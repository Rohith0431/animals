import { useState } from "react";
import Animals from "./Animals.jsx";
import * as Styled from "./App.js";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

function renderAnimalList(animals) {
  return animals.map((animal, index) => (
    <Animals animal={animal} key={index} />
  ));
}

function App() {
  const [animals, setAnimals] = useState([]);
  const onButtonClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  return (
    <Styled.AppContainer>
      <Styled.AddAnimalButton onClick={onButtonClick}>
        Add Animal
      </Styled.AddAnimalButton>
      <Styled.AnimalListContainer>
        {renderAnimalList(animals)}
      </Styled.AnimalListContainer>
    </Styled.AppContainer>
  );
}

export default App;
