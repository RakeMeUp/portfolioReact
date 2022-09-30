import {
    StyledNavButton,
    StyledNavContainer,
    StyledNavMenu,
} from "../styles/Nav.styles";
import { useState, forwardRef, ReactNode } from "react";
import menuSvg from "/menu.svg";

type Props = {
    scrollToNextSection: (ref: any) => void;
};

const Nav = forwardRef<HTMLDivElement, Props>(
    ({ scrollToNextSection }: Props, ref: any) => {
        const [isExpanded, setIsExpanded] = useState(false);

        function LiScroll({
            index,
            children,
        }: {
            index: number;
            children: ReactNode;
        }) {
            return (
                <li
                    onClick={() => {
                        scrollToNextSection(ref[index]);
                    }}
                >
                    {children}
                </li>
            );
        }

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
                        <LiScroll index={0}>Main</LiScroll>
                        <LiScroll index={1}>Tech Stack</LiScroll>
                        <LiScroll index={2}>Projects</LiScroll>
                        <LiScroll index={3}>Contacts</LiScroll>
                    </StyledNavMenu>
                </StyledNavContainer>
            </>
        );
    }
);

export default Nav;
