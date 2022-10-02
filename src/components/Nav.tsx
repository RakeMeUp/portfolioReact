import {
    StyledNavButton,
    StyledNavContainer,
    StyledNavMenu,
} from "../styles/Nav.styles";
import { useState, forwardRef } from "react";
import menuSvg from "/menu.svg";
import { sectionData } from "../data";
import NavLi from "./NavLi";

type Props = {
    scrollToNextSection: (ref: any) => void;
};

const Nav = forwardRef<HTMLDivElement, Props>(
    ({ scrollToNextSection }: Props, ref: any) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const [activeLiId, setActiveLiId] = useState(0);

        return (
            <>
                <StyledNavContainer expanded={isExpanded}>
                    <StyledNavButton
                        onClick={() => {
                            setIsExpanded((prev) => !prev);
                            console.log("click");
                        }}
                    >
                        <img src={menuSvg} alt="menu" />
                    </StyledNavButton>
                    <StyledNavMenu>
                        {sectionData.map((section, i) => {
                            return (
                                <NavLi
                                    ref={ref}
                                    handleClick={scrollToNextSection}
                                    index={i}
                                    section={section}
                                    activeLiId={activeLiId}
                                    setActiveLiId={() => setActiveLiId(i)}
                                />
                            );
                        })}
                    </StyledNavMenu>
                </StyledNavContainer>
            </>
        );
    }
);

export default Nav;
