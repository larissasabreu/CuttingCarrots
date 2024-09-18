import styled from "styled-components";
import Board from './assets/Board.png';

export default function CuttingBoard () {
    return (
        <>
        <Img src={Board} />
        </>
    )
}

const Img = styled.img`
    width: 900px;
    height: 800px;
    position: fixed;
    top: 0%;
    left: 15%;
`
