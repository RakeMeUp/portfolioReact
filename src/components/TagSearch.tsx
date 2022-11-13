import { useState } from "react";
import {
    StyledDivider,
    StyledDrawer,
    StyledImg,
    StyledSearchBar,
    StyledSearchContainer,
    StyledTagContainer,
} from "../styles/TagSearch.styles";
import Tag from "./Tag";
import upCarot from "/upCarot.svg";

type Props = {};
type Tag = {
    name: string;
    selected?: boolean;
};

const TagSearch = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [options, setOptions] = useState<Tag[]>([
        { name: "React" },
        { name: "TypeScript" },
        { name: "Redux" },
        { name: "Styled Components" },
        { name: "Sass" },
        { name: "Php" },
        { name: "NodeJs" },
        { name: "React-Router" },
    ]);

    const selectTag = (id: number | string) => {
        const index = options.findIndex((o) => o.name === id);
        if (index === -1) return;
        if (options[index]?.selected === true) {
            removeTag(id, index);
            return;
        }
        const temp = [...options];
        temp[index].selected = true;
        setOptions([...temp]);
        setSelectedAmount((prev) => ++prev);
    };

    const removeTag = (id: number | string, index: number = -1) => {
        if (index === -1) {
            index = options.findIndex((o) => o.name === id);
        }
        const temp = [...options];
        temp[index].selected = false;
        setOptions([...temp]);
        setSelectedAmount((prev) => --prev);
    };

    return (
        <>
            <StyledSearchContainer>
                {isOpen && (
                    <StyledDrawer>
                        {options.map((t) => (
                            <Tag
                                onClick={() => selectTag(t.name)}
                                selected={t.selected}
                                key={t.name}
                                name={t.name}
                                selectable
                            />
                        ))}
                    </StyledDrawer>
                )}
                <StyledSearchBar onClick={() => setIsOpen((prev) => !prev)}>
                    <StyledTagContainer>
                        {selectedAmount === 0 ? (
                            <span style={{ color: "black" }}>Select Tags to filter by</span>
                        ) : (
                            options
                                .filter((o) => o.selected === true)
                                .map((t) => (
                                    <Tag
                                        selected={t.selected}
                                        name={t.name}
                                        size="sm"
                                        key={t.name}
                                    />
                                ))
                        )}
                    </StyledTagContainer>
                    <StyledDivider />
                    <StyledImg isOpen={isOpen} src={upCarot} alt="open menu" />
                </StyledSearchBar>
            </StyledSearchContainer>
        </>
    );
};

export default TagSearch;
