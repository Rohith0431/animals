import { useState } from "react";
import { svgMapping, heart } from "./images/Images";
import * as Styled from "./Animals.js";

function Animals({ animal }) {
  const [clicks, setClicked] = useState(0);

  const onClick = () => {
    setClicked(clicks + 1);
  };
  return (
    <Styled.AnimalContainer onClick={onClick}>
      <Styled.AnimalImage src={svgMapping[animal]} alt={animal} />
      <Styled.HeartIcon
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </Styled.AnimalContainer>
  );
}

export default Animals;
