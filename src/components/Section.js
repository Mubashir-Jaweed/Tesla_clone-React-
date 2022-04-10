import React from 'react'
import styled from 'styled-components'

function Section(props) {
    console.log(props);
    return (
        <Wrap bgImage={props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
                { props.rightBtnText &&
                <RightButton>
                    {props.rightBtnText}
                </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
     background-size : cover;
     background-position : center;
     background-repeat : no-repeat ;
     display:flex;
     flex-direction: column;
     justify-content: space-between; // vertical
     align-items: center; // horizontal
     background-image: ${props =>`url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    z-index: 1;
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.button`
    background-color:rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    overflow-x: hidden;
    height: 40px;
    margin-left: 250px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`