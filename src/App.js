import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddAnimalButton = styled.button`
  width: 30%;
  padding: 10px;
  font-size: 20px;
  border: 1px solid cyan;
  border-radius: 3px;
  background-color: darkcyan;
`;

const AnimalListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export { AppContainer, AddAnimalButton, AnimalListContainer };
