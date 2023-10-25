import styled from 'styled-components'
import { mainColor } from './commonStyle'

export const PopupContainer = styled.div`
    width: 1000px;
    color: black;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index:100;
`
export const PopupInner = styled.div`
    position: relative;
`

export const PopupBg = styled.div`
    background: url(../../public/images/popupBg.png);
    width: 1000px;
    height: 752px;
    background-size: cover;
    background-position: center;
    border-radius: 50px;
    filter: blur(3px);
`
export const PopupContent = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    padding: 70px;
    width: 1000px;
    height: 752px;
    box-sizing: border-box;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50px;
`
export const PopupLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .popUpLeft_top {
        word-break: keep-all;
        width: 610px;
        padding-right:10px;
        h3 {
            font-size: 40px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        strong {
            font-size: 20px;
            font-weight: 600;
            display: block;
            margin-bottom: 20px;
        }
        span {
            font-size: 16px;
            display: block;
            word-wrap: normal;
            line-height:1.5;
        }
    }
    .popUpLeft_bottom {
        display: flex;
        font-size: 18px;
        box-sizing: border-box;
        text-align: center;
        span {
            display: flex;
            flex-direction: column;
            margin-right: 40px;
            strong {
                font-weight: 600;
                i {
                    margin-right: 10px;
                }
            }
        }
    }
`
export const PopupRightContainer = styled.div`
    height: auto;
    button {
        cursor: pointer;
        background: none;
        height: 40px;
        width: 245px;
        font-size: 16px;
        line-height: 40px;
        border: none;
        box-sizing: border-box;
        background: ${mainColor};
        color: white;
        &:hover {
            background: black;
            color: white;
        }
    }
`