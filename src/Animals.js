import styled from "styled-components";

const AnimalContainer = styled.div`
  position: relative;
  border: 1px solid darkcyan;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #f0f8ff;
  box-shadow: 0px 3px 3px lightcyan;
`;

const AnimalImage = styled.img`
  height: 200px;
`;

const HeartIcon = styled.img`
  position: absolute;
  bottom: 10%;
  right: 10%;
`;

export { AnimalContainer, AnimalImage, HeartIcon };
