import styled from 'styled-components'
import { mainColor } from './commonStyle'

export const PagingContainer = styled.div`
    display: flex;
    justify-content: center;
    .pagingOn {
        background-color: ${mainColor};
        color: white;
        opacity: 0.8;
    }
    p {
        border: 1px solid ${mainColor};
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: black;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.8);

        &:first-child,
        &:last-child {
            width: 50px;
        }

        &:hover {
            background-color: ${mainColor};
            color: white;
            opacity: 0.8;
        }
    }
`