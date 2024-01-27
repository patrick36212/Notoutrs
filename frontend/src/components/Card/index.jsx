import { CardSection, CardWrapper } from "./styled.js";
import { ContextHeading, SecondaryHeading } from "../Title/index.js";
import { StyledLink } from "../Link/index.js";
import { Paragraph } from "../Paragraph/index.js";
import Icon from "../Icon/Icon.jsx";
import Img from "../Img/index.jsx";

const Card = ({ tour }) => {
  const date = new Date(tour.startDates[0]);
  const tourDate = date.toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  });

  return (
    <CardWrapper>
      <CardSection heading="true">
        <Img
          card="true"
          shadow="true"
          src={`img/tours/${tour.imageCover}`}
          alt={tour.name}
        >
          <SecondaryHeading>{tour.name}</SecondaryHeading>
        </Img>
      </CardSection>

      <CardSection details="true">
        <ContextHeading>{`${tour.difficulty} difficulty ${tour.duration}-day tour`}</ContextHeading>
        <Paragraph italic="true">{tour.summary}</Paragraph>
        <ul>
          <li>
            <Icon name="map-pin" text={tour.startLocation.description} />
          </li>
          <li>
            <Icon name="calendar" text={tourDate} />
          </li>
          <li>
            <Icon name="flag" text={`${tour.locations.length} stops`} />
          </li>
          <li>
            <Icon name="user" text={`${tour.maxGroupSize} people`} />
          </li>
        </ul>
      </CardSection>

      <CardSection footer="true">
        <ul>
          <li>
            <span>{`$${tour.price}`}</span>
            {" per person"}
          </li>
          <li>
            <span>{tour.ratingsAverage}</span>
            {` rating (${tour.ratingsQuantity})`}
          </li>
        </ul>
        <StyledLink cta="true" to={`/tours/${tour.slug}`}>
          Details
        </StyledLink>
      </CardSection>
    </CardWrapper>
  );
};

export default Card;
