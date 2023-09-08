import styled from 'styled-components'
import { mainColor } from './commonStyle'

export const BoxOfficeContainer = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    line-height: 30px;
    margin: auto;
`

export const BoxOfficeItem = styled.div`
    margin-right: 40px;
    margin-bottom: 40px;
    width: 245px;
    position: relative;
    &:hover .BoxOffice-info { display: block; }
    .BoxOffice-img { width: 245px; }
    &:nth-child(4n) { margin-right: 0; }
    .BoxOffice-name {
        width: 200px;
        white-space: nowrap;
        img {
            width: 20px;
            vertical-align: middle;
        }
        span {
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-left: 10px;
            font-size: 20px;
            font-weight: 600;
            vertical-align: middle;
        }
    }
    .BoxOffice-info {
        display: none;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        height: 142px;
        overflow: hidden;
        font-size: 15px;
        padding: 20px;
        color: white;
        height: 350px;
        box-sizing: border-box;

        span {
            max-width: 100%;
            text-overflow: ellipsis;

            &:nth-child(1) {
                display: block;
                margin-bottom: 22px;
            }
        }
    }
    .BoxOffice-per_date {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        strong {
            font-weight: 600;
        }
    }
    .like {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        button {
            cursor: pointer;
            background: none;
            height: 40px;
            width: 120px;
            font-size: 16px;
            line-height: 40px;
            border: 1px solid white;
            box-sizing: border-box;
            background: #000;
            color: white;

            &:nth-child(2) {
                background: ${mainColor};
                color: white;
                border: none;
            }
        }
    }
`