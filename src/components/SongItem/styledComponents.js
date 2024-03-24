import styled from 'styled-components'

// ListCont, ImgCont, Img, Para

export const ListCont = styled.li`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const ImgCont = styled.div`
    display:flex;
    align-items:center; 
    gap:20px;   
`
export const Img = styled.img`
    width:150px;   
    border-radius:10px; 
`
export const Para = styled.p`
    color:${props => (props.genre ? '#3b82f6' : '#ffffff')};
    font-size:18px;

`
export const Button = styled.button`
    background:transparent;
    border:0px;
    outline:none;
    cursor:pointer;
    margin-left:40px;
    color:#ffffff ;
    font-size:20px;
`
