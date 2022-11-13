import { StyledCard, StyledCardImageContainer, StyledTagScroller } from "../styles/Cards.styles";
import Tag from "./Tag";

type Props = {};

const Card = (props: Props) => {
    return (
        <StyledCard>
            <StyledCardImageContainer>placeholder</StyledCardImageContainer>
            <h3>Card</h3>
            <p>text</p>
            <StyledTagScroller>
                <Tag name="12" />
                <Tag name="34" />
                <Tag name="56" />
            </StyledTagScroller>
        </StyledCard>
    );
};

export default Card;
