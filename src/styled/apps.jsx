import styled from 'styled-components';

const boder_color = "#6f6f6f"
export const Content = styled.div`

width:100vw;
height:100vh;
display:flex ;
align-items:center ;
justify-content:center ;
background-color:black;
`

export const GridWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    height:max-content;
    border-left:1px solid ${boder_color};
    border-top:1px solid ${boder_color};
`
export const Rows = styled.div`
    display:flex ;
    flex-direction:row;
    width: max-content;
    border-bottom:1px solid ${boder_color};
    

`

export const Cell = styled.div`

width:15px;
height:15px;
border-right:1px solid ${boder_color};
background-color:${props=>props.bg==1?"white":"black"} ;
`