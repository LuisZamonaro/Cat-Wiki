import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 1.5rem;
    
    .containerLogo {
        width: 950px;
        margin-bottom: 17px;
    }

    @media(max-width: 985px) {
        .containerLogo {
            width: 650px;
        }
    }

    @media(max-width: 665px) {
        .containerLogo {
            width: 350px;
        }
    }

    @media(max-width: 350px) {
        .containerLogo {
            width: 300px;
        }
    }
`

export const Wrapper = styled.div`
    width: 950px;
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-bottom: 70px;

    @media(max-width: 985px) {
        display: block;
        width: 450px;
    }
    
    @media(max-width: 985px) {
        display: block;
        width: 450px;
    }

    @media(max-width: 450px) {
        width: 300px;
    }

`
export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    #catImage {
        width: 371px;
        height: 371px;
        border-radius: 24px;
        object-fit: cover;
    }

    @media(max-width: 1180px) {
       
        #catImage {
            width: 291px;
            height: 291px;
        }
    }

`
export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    span {
        font-weight: bold;
    }

    .description {
        width: 601px;
    }

    .catPlates {
        display: flex;
        gap: 5px;
        width: 100%;
    }

    .pData {
        font-weight: bold;
        width: 100%;
        margin-right: 8px;
    }

    .plateContainer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .plate1 {
        width: 60px;
        height: 12px;
        background-color: #E0E0E0;
        border-radius: 8px;
    }
    
    .plate2 {
        background-color: #E0E0E0;
        border-radius: 8px;
        height: 12px;
        width: 60px;
    }

    .plate3 {
        background-color: #E0E0E0;
        border-radius: 8px;
        height: 12px;
        width: 60px;
    }

    .plate4 {
        background-color: #E0E0E0;
        border-radius: 8px;
        height: 12px;
        width: 60px;
    }

    .plate5 {
        background-color: #E0E0E0;
        border-radius: 8px;
        height: 12px;
        width: 60px;
    }

    .plate1.active {
        background-color: #544439;
    }

    .plate2.active {
        background-color: #544439;
    }

    .plate3.active {
        background-color: #544439;
    }

    .plate4.active {
        background-color: #544439;
    }

    .plate5.active {
        background-color: #544439;
    }

    @media(max-width: 980px) {

        .description {
            width: 450px;
        }
    }

    @media(max-width: 472px) {

        .plate1 {
        width: 35px;
    }
    
    .plate2 {
        width: 35px
    }

    .plate3 {
        width: 35px
    }

    .plate4 {
        width: 35px
    }

    .plate5 {
        width: 35px
    }

    .description {
        width: 350px;
    }

    .temperament {
        width: 350px;
    }
    }

    @media(max-width: 350px) {
        width: 300px;

        .description {
            width: 300px;
            font-size: 15px;
        }

        .temperament {
            width: 300px;
            font-size: 14px;
        }

    }
    
`

