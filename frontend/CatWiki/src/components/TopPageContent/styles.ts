import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;


    a {
        color: #000000;
        text-decoration: none;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 1.5rem;

    #catWikiHero {
        display: block;
    }

    #catWikiHeroM {
        display: none;
    }

    .logoPage {
        display: block;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 27px;
    }

    @media(max-width: 865px) {
            #catWikiHero {
            display: none;
        }

        #catWikiHeroM{
            display: block;
        }

        .logoPage {
            margin-bottom: 15px;
        }
    }
`

export const TopPage = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    #heroImageMd {
        border-top-right-radius: 55px;
        border-top-left-radius: 55px;
    }

    #heroImageSm {
            display: none;
        }

    @media(max-width: 1270px) {
        #heroImageMd{
            width: 850px;
        }

    }

    @media(max-width: 865px) {
        #heroImageMd {
            width: 650px;
        }
    }

    @media(max-width: 665px) {

        #heroImageMd {
            display: none;
        }

        #heroImageSm {
            display: block;
            border-top-right-radius: 55px;
            border-top-left-radius: 55px;
            width: 500px;
        }
    }

    @media(max-width: 515px) {
        #heroImageSm {
            width: 340px;
        }
    }
    

`

export const ContentHero = styled.div`
    position: absolute;
    left: 50px;
    top: 70px;

    .textHero {
        color: white;
        width: 351px;
        font-size: 28px;
        margin-top: -50px;
        margin-bottom: 35px;
    }

    .inputBreed {
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
        background-color: white;
        width: 395px;
        height: 70px;
        border-radius: 40px;
    }

    input {
        outline: none;
        border: none;
        height: 25px;
        padding-left: 8px;
        font-size: 22px;
    }

    input::placeholder {
        font-size: 22px;
    }

    #iconSearch {
        width: 35px;
    }

    #search-results {
        height: 180px;
        font-weight: 500;
        font-size: 20px;
        background-color: white;
        color: #000000;
        border-radius: 24px;
        padding-left: 2rem;
        margin-top: 12px;
        transition: width 0.5s ease;
        overflow-y: auto;
    }

    .individualOp {
        display: flex;
        align-items: center;
        height: 50px;
    }

    @media(max-width: 865px) {
        .textHero {
            width: 230px;
            font-size: 23px;
            margin-top: 0px;
        }

        .inputBreed {
            width: 300px;
        }

        input {
            width: 200px;
            font-size: 20px;
        }
    }

    @media(max-width: 665px) {
        .textHero {
            width: 180px;
            font-size: 19px;
            margin-bottom: 20px;
        }

        .inputBreed {
            width: 180px;
            height: 45px;
        }

        input {
            width: 130px;
            font-size: 20px;
        }

        input::placeholder {
        font-size: 16px;
    }
    }

    @media(max-width: 515px) {
        left: 10px;
        top: 48px;

        .textHero {
            margin-bottom: 5px;
            font-size: 16px;
            margin-top: -20px;
        }
    }
`