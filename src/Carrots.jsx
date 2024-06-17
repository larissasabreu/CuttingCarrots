import styled from "styled-components";
import { useState } from "react";

import Carrot1 from './assets/Carrot1.png';
import Carrot2 from './assets/Carrot2.png';
import Carrot3 from './assets/Carrot3.png';
import Carrot4 from './assets/Carrot4.png';
import Carrot5 from './assets/Carrot5.png';

export default function Carrots (props) {
    const [count, setCount] = useState(0);

    switch (count) {
        case 0:
            return (
            <Img src={Carrot1} onClick={() => {setCount((count) => count + 1);
            {play}}} />
            );
        case 1:
            return (
            <Img src={Carrot2} onClick={() => setCount((count) => count + 1)} />
            );
        case 2:
            return (
            <Img src={Carrot3} onClick={() => setCount((count) => count + 1)} />
            );
        case 3:
            return (
            <Img src={Carrot4} onClick={() => setCount((count) => count + 1)} />
            );
        case 4:
            return (
            <Img src={Carrot5} onClick={() => {setCount(() => 0); 
                props.setCarrotCounter((count) => count + 1)}} />
            );
   }

}

const Img = styled.img`
    width: 900px;
    height: 800px;
    position: fixed;
    z-index: 2;
    left: 20%;
    cursor: pointer;
`
