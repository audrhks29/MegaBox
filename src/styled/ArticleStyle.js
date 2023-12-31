import styled from 'styled-components'
import { mainColor } from './commonStyle'

export const ArticleContainer = styled.div`
    padding: 60px 0;
    width: 100%;
    background-image: url(../public/images/bg-movie-detail-pattern.png);
    position: absolute;
    top: 0;
    color: white;
    box-sizing: border-box;
    height: 1420px;
    h2 {
        font-size: 40px;
        text-align: center;
    }
    >input {
        display: block;
        margin: 40px auto;
        border: 2px solid ${mainColor};
        width: 600px;
        height: 50px;
        text-indent:10px;
        &:focus {
            outline: none;
        }
    }
    .btnWrap {
        width: 1100px;
        margin: auto;
        padding-bottom: 20px;
        button {
            cursor: pointer;
            background: none;
            height: 40px;
            width: 120px;
            font-size: 16px;
            line-height: 40px;
            border: 1px solid white;
            box-sizing: border-box;
            background: ${mainColor};
            color: white;
            &:hover {
                background: black;
                color: white;
            }
        }
        h3 {
            margin-top: 10px;
        }
    }
`