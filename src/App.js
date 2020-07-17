import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import {Frase} from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem 0 0 0;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const URL_API = "http://breaking-bad-quotes.herokuapp.com/v1/quotes";

  // state de frases
  const [frase, setFrase] = useState({})

  
  const handleOnClick = async () => {
    const api = await fetch(`${URL_API}`);
    const frase = await api.json();
    setFrase(frase[0])
  };
  useEffect(() => {
      handleOnClick()
  }, [])
  return (
    <Contenedor>
      <Frase
        frase = {frase}
      />
      <Boton onClick={handleOnClick}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
