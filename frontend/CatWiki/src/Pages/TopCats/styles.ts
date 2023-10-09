import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    .top10 {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    }

    .logoPage {
       display: flex;
       align-items: center;
       justify-content: flex-start;
       width: 1050px;
       margin-top: 1rem;
       margin-bottom: 33px;
    }

    @media(max-width: 1300px) {

        .logoPage {
            width: 910px;
        }

        .top10 {
            width: 500px;
        }
    }

    @media(max-width: 925px) {

    .logoPage {
        width: 710px;
    }
    }

    @media(max-width: 735px) {

    .logoPage {
        width: 510px;
    }

    .top10 {
            width: 500px;
        }
    }

    @media(max-width: 735px) {

    .logoPage {
        width: 410px;
    }

    .top10 {
            width: 350px;
            font-size: 27px;
        }
    }

    @media(max-width: 735px) {

    .logoPage {
        width: 510px;
    }

    .top10 {
            width: 300px;
            font-size: 24px;
        }
    }

    @media(max-width: 535px) {

        .logoPage {
            width: 410px;
        }
    }

    @media(max-width: 535px) {

    .logoPage {
        width: 300px;
    }
}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1250px;
    margin-bottom: 50px;

    @media(max-width: 1300px) {
        width: 700px;
    }

    @media(max-width: 925px) {
        width: 500px;
    }

    @media(max-width: 735px) {
        width: 300px;
    }

`

export const RankCats = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    

    .imageCat {
        width: 170px;
        height: 170px;
        object-fit: cover;
        border-radius: 24px;
    }

    .breed {
        margin-bottom: 25px;
        color: #291507;
        font-size: 22px;
    }

    .description {
        width: 888px;
        height: 66px;
        font-size: 18px;
        font-weight: 500;
        color: #291507;
    }

    .individualCatContent {
        display: flex;
        gap: 40px;
    }

    @media(max-width: 1300px) {
        
        .description {
            width: 700px;
        }

    }

    @media(max-width: 925px) {
        
        .description {
            width: 500px;
        }

    }

    @media(max-width: 735px) {
        gap: 100px;
        padding-bottom: 210px;

        .description {
            width: 300px;
        }

    }

    @media(max-width: 535px) {
        gap: 100px;
        padding-bottom: 190px;

        .imageCat {
            width: 100px;
            height: 100px;
            border-radius: 15px;
        }

        .description {
            width: 290px;
            font-size: 16px;
        }

        .individualCatContent {
            gap: 20px;
        }

        h1 {
            font-size: 22px;
        }

    }

    @media(max-width: 420px) {
        gap: 100px;

        .imageCat {
            width: 70px;
            height: 70px;
        }

        .description {
            width: 250px;
            font-size: 14px;
        }

        .individualCatContent {
            gap: 15px;
        }

        h1 {
            font-size: 20px;
        }

    }

    @media(max-width: 350px) {
        gap: 100px;

        .imageCat {
            width: 60px;
            height: 60px;
        }

        .description {
            width: 230px;
            font-size: 13px;
        }

        .individualCatContent {
            gap: 12px;
        }

        h1 {
            font-size: 18px;
        }

    }
`