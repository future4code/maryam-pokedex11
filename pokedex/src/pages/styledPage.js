import styled, {keyframes} from "styled-components";

const animationBody= keyframes`
0%{
    opacity: 0;
}

60%{
    opacity: 0;
}

100%{
    opacity: 1;
}

`

export const Body=styled.div `
animation-name: ${animationBody};
animation-duration: 3s;
margin: 0;


`