import styled from "styled-components";
import FlexContainer from "../shared/flex-container";
import GridContainer from "../shared/grid-container";
import FilledStarBlack from "../../assets/star-filled.svg";
import EmptyStarBlack from "../../assets/star-empty.svg";

const starSize = `
@media only screen and (min-width: 1024px) {
  height: 50px;
  width: 50px;
};
`;

export const FilledStar = styled(FilledStarBlack)`
  fill: orange;
  ${starSize}
`;

// without viewBox, it cannot scale. the other svg has this by default
export const EmptyStar = styled(EmptyStarBlack).attrs({
  viewBox: "0 0 24 24",
})`
  fill: orange;

  ${starSize}
`;

export const DetailsPageContainer = styled(GridContainer)`
  padding: 20px;
  font-size: larger;

  @media only screen and (min-width: 1024px) {
    grid-template-areas: "title rating" "data data" "desc desc";
    grid-template-columns: 40% 60%;
  }
`;

export const DetailsPoster = styled.img`
  /*
    this way it won't fill out as much space as in the mockup
    if we stick to the mockup, the image will get pixelated
    can be fixed by making the images bigger on the backend
  */
  max-width: 100%;
  align-self: center;
  justify-self: center;
`;

export const DetailsContainer = styled(FlexContainer)`
  grid-row-gap: 10px;
  margin-top: 10px;
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    grid-row-gap: 20px;
  }
`;

export const DetailsTitle = styled(FlexContainer)`
  align-items: center;
`;

export const DetailsTitleText = styled.h2`
  margin: 0;
`;

export const DetailsRatingContainer = styled(FlexContainer)`
  grid-auto-flow: column;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const DetailsDataContainer = styled(FlexContainer)`
  flex-direction: column;
`;

export const DetailsDescription = styled.span``;

export const DetailsTopRowContainer = styled(FlexContainer)`
  justify-content: space-between;
`;
