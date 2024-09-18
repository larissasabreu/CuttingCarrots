import Hand from "./assets/Hand.png"
import React from "react";
import { useMouse } from '@react-hooks-library/core'
import styled from "styled-components";

export default function Hands() {
    const { x } = useMouse()
    const mov = (x + 5) + 'px';

    return (
        <MovingHand src={Hand} mouse={mov}/>
    )
}

const MovingHand = styled.img`
    width: 800px;
    height: 800px;
    position: fixed;
    z-index: 3;
    margin-left: ${props => props.mouse};
    top: 0;
`