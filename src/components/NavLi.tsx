import { forwardRef } from "react";
import { StyledLi } from "../styles/NavLi.styles";

type Props = {
    handleClick: (ref: any) => void;
    index: number;
    section: any;
    activeLiId: number;
    setActiveLiId: () => void;
};

const NavListEl = forwardRef<HTMLDivElement, Props>(
    (
        { handleClick, index, section, activeLiId, setActiveLiId }: Props,
        ref: any
    ) => {
        return (
            <StyledLi
                isActive={activeLiId === index}
                onClick={() => {
                    setActiveLiId();
                    handleClick(ref[index]);
                }}
            >
                {section.navMenuTitle || "default"}
            </StyledLi>
        );
    }
);

export default NavListEl;
