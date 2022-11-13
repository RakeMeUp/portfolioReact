import { useState } from "react";
import { StyledTag } from "../styles/Tag.styles";

type Props = {
    name: string;
    size?: "sm" | undefined;
    onClick?: () => void;
    selected?: boolean;
    selectable?: boolean;
};

const Tag = ({ size, name, selected, onClick, selectable = false }: Props) => {
    const handleClick = () => {
        if (!onClick) return;
        onClick();
    };

    return (
        <StyledTag onClick={handleClick} selected={selectable ? selected : false} size={size}>
            {name}
        </StyledTag>
    );
};

export default Tag;
