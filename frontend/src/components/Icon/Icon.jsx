import { Wrapper } from "../Wrapper/styled.js";
import { StyledIcon } from "./styled.js";

const Icon = ({ name, text }) => {
  return (
    <Wrapper>
      <StyledIcon>
        <use href={`img/icons.svg#icon-${name}`} />
      </StyledIcon>
      {text}
    </Wrapper>
  );
};

export default Icon;