import styled, { keyframes } from 'styled-components'
import { mainColor } from './commonStyle'

const skeletonGradient = keyframes`
   0% {background-color: rgba(165, 165, 165, 0.1);}
   50% {background-color: rgba(165, 165, 165, 0.3);}
   100% {background-color: rgba(165, 165, 165, 0.1);}
`

export const BoxOfficeSkeletonContainer = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    line-height: 30px;
    margin: auto;
`

export const BoxOfficeSkeletonItem = styled.div`
    margin-right: 40px;
    margin-bottom: 40px; 
    width: 245px;
    &:nth-child(4n) { margin-right: 0; }
    .skeleton-boxOffice-img { 
        width: 245px; 
        height: 350px;
        margin-bottom:5px;
        animation: ${skeletonGradient} 1.8s infinite ease-in-out;
    }
    .skeleton-boxOffice-name {
        width: 100%;
        height:24px;
        margin-bottom:5px;
        animation: ${skeletonGradient} 1.8s infinite ease-in-out;
    }
    .skeleton-boxOffice-per_date {
        width: 100%;
        height:23px;
        margin-bottom:5px;
        animation: ${skeletonGradient} 1.8s infinite ease-in-out;
    }
    .like {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button {
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