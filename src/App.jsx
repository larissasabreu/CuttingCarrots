import { useState } from 'react';
import styled from 'styled-components';
import BG from './assets/Background.png';
import './reset.css'
import CuttingBoard from './CuttingBoard';
import CarrotCounter from './CarrotCounter';
import Carrots from './Carrots';

export default function App() {
  const [carrotCounter, setCarrotCounter] = useState(0);

  return (
    <>
      <Background>
        <Carrots setCarrotCounter={setCarrotCounter}/>
        <CarrotCounter carrotCounter={carrotCounter} setCarrotCounter={setCarrotCounter}/>
        <CuttingBoard/>
      </Background>
    </>
  )
}

const Background = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  position: fixed;
  width: 100vw;
`
