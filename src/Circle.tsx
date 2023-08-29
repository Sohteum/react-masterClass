import { styled } from "styled-components";

interface ContainerProps{
    bgColor:string;
}
//interface는 object설명해주는거.
const Container = styled.div<ContainerProps>`
display:flex;
width:200px;
height:200px;
background-color:${props=> props.bgColor};
border-radius: 100px;
`

interface CircleProps {
    bgColor:string;
}

function Circle({bgColor}:CircleProps) {
    return <Container bgColor={bgColor} />;

}

export default Circle;