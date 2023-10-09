import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E3E1DC;
    width: 1248px;
    margin: 0 auto;
    margin-top: -5px;
    border-bottom-left-radius: 55px;
    border-bottom-right-radius: 55px;
    height: 600px;

    @media(max-width: 1270px) {
        width: 850px;
    }

    @media(max-width: 865px) {
        width: 650px;
        height: 500px;
    }

    @media(max-width: 665px) {
        width: 500px;
    }

    @media(max-width: 515px) {
        height: 580px;
        width: 340px;
    
    }
`

export const Wrapper = styled.div`
    padding-inline: 5rem;
    padding-top: 2rem;

    a {
        color: #29150799;
        text-decoration: none;
    }

    .mostSearched {
        font-size: 23px;
        color: #291507;
        font-weight: 500;
        margin-bottom: 8px;
    }

    .brownLine {
        width: 60px;
        height: 3.5px;
        background-color: #4D270C;
        border-radius: 77px;
        margin-bottom: 40px;
    }

    .textMidPage {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .text {
        width: 450px;
        font-weight: 700;
        color: #291507;
        font-size: 55px;
        margin-bottom: 50px;
    }

    .seeMore {
        font-size: 20px;
        font-weight: 700;
        color: #29150799;
    }

    .containerCats {
        display: flex;
        gap: 50px;
        
    }

    .catPhoto {
        border-radius: 24px;
        width: 220px;
        height: 220px;
        object-fit: cover;
        margin-bottom: 15px;
    }

    .breedCat {
        font-weight: 600;
        font-size: 20px;
        color: #291507;
    }

    @media(max-width: 1270px) {
        padding-inline: 2rem;

       .containerCats {
            gap: 20px;
       }
       
       .catPhoto {
            width: 180px;
            height: 180px;
       }
    }

    @media(max-width: 865px) {
        .containerCats {
            gap: 15px;
       }

       .catPhoto {
            width: 132px;
            height: 132px;
       }

       .text {
        font-size: 40px;
       }

       .breedCat {
        font-size: 15px;
       }
    }

    @media(max-width: 865px) {

        .catPhoto {
            width: 100px;
            height: 100px;
       }

       .breedCat {
        font-size: 14px;
       }
       
    }

    @media(max-width: 515px) {

        .containerCats {
            display: grid;
            grid-template-columns: repeat(2, 0.25fr);
            gap: 16px;
       }

       .catPhoto {
            width: 130px;
            height: 130px;
            margin-bottom: 8px;
       }

       .text {
        margin-bottom: 10px;
        font-size: 30px;
       }

    }

     
`