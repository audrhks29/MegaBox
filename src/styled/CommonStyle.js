import styled from 'styled-components'

export const mainColor = "#503396";
export const WrapContainer = styled.div`
    width: 100%;
    position: relative;
`

export const BgImageContainer = styled.div`
    background-image: url(../public/images/bg.jpg);
    filter: blur(15px);
    -webkit-filter: blur(15px);
    transform: scale(1.02);
    width: 100%;
    height: ${(props) => props.scrollHeight}px;
`

export const BtnCloseContainer = styled.div`
    position: absolute;
    font-size: 30px;
    top: 20px;
    right: 20px;
    cursor: pointer;
`