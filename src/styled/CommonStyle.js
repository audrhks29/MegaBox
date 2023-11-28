import styled from 'styled-components'

export const mainColor = "#503396";
export const WrapContainer = styled.div`
    width: 100%;
    position: relative;
`

export const BgImageContainer = styled.div`
    background-image: url(../public/images/bg.jpg);
    min-height: 1420px;
    background-size: cover;
    filter: blur(15px);
    -webkit-filter: blur(15px);
    transform: scale(1.02);
    width: 100%;
    
`

export const BtnCloseContainer = styled.div`
    position: absolute;
    font-size: 30px;
    top: 20px;
    right: 20px;
    cursor: pointer;
`