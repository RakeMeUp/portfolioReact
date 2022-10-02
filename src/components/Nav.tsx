import {
    StyledNavButton,
    StyledNavContainer,
    StyledNavMenu,
} from "../styles/Nav.styles";
import { useState, forwardRef } from "react";
import menuSvg from "/menu.svg";
import { sectionData } from "../data";

type Props = {
    scrollToNextSection: (ref: any) => void;
};

const Nav = forwardRef<HTMLDivElement, Props>(
    ({ scrollToNextSection }: Props, ref: any) => {
        const [isExpanded, setIsExpanded] = useState(false);

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
                                <li
                                    onClick={() => {
                                        scrollToNextSection(ref[i]);
                                    }}
                                >
                                    {section.navMenuTitle || "default"}
                                </li>
                            );
                        })}
                    </StyledNavMenu>
                </StyledNavContainer>
            </>
        );
    }
);

export default Nav;
