import {
    StyledCard,
    StyledCardImageContainer,
    StyledTagScroller,
} from "../styles/Cards.styles";

type Props = {};

const Card = (props: Props) => {
    return (
        <StyledCard>
            <StyledCardImageContainer>placeholder</StyledCardImageContainer>
            <h3>Card</h3>
            <p>text</p>
            <StyledTagScroller>tags</StyledTagScroller>
        </StyledCard>
    );
};

export default Card;
