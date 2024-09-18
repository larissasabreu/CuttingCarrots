import styled from "styled-components";

export default function CarrotCounter (props) {

    return (
        <>
        <Counter>
            Carrots:  <b> {props.carrotCounter} </b>
        </Counter>

        <Reset onClick={() => {props.setCarrotCounter(() => 0)}}>
            RESET
        </Reset>
        </>
    );
}

const Counter = styled.div`
    width: 100px;
    height: 50px;
    right: 190px;
    position: fixed;
    overflow-x: contain;
    background-color: navajowhite;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
    border: 2px solid white;
    color: sienna;
    font-weight: bold;

`
const Reset = styled.div`
    width: 100px;
    height: 50px;
    position: fixed;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
    border: 2px solid white;
    color: white;
    font-weight: bold;
    cursor: pointer;
`