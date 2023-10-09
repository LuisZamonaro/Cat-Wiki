import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1100px;
    height: 550px;
    margin: 0 auto;
    margin-top: 80px;

    @media(max-width: 1270px) {
        width: 850px;
    }

    @media(max-width: 865px) {
        width: 650px;
    
    }

    @media(max-width: 665px) {
        width: 500px;
    
    }

    @media(max-width: 665px) {
        width: 500px;
    
    }

    @media(max-width: 515px) {
        width: 340px;
    
    }
    
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 865px) {
        flex-direction: column;
    }

    @media(max-width: 515px) {
        width: 340px;
    }
`

export const LeftContainer = styled.div`

    .brownLine {
            width: 60px;
            height: 3.5px;
            background-color: #4D270C;
            border-radius: 77px;
        }

    .title {
        font-weight: 700px;
        font-size: 55px;
        width: 430px;
        color: #291507;
        margin-bottom: 40px;
    }

    .text {
        font-weight: 500;
        font-size: 20px;
        width: 425px;
        margin-bottom: 60px;
    }

    .readMore {
        color: #29150799;
        font-weight: 700;
        font-size: 20px;
    }

    @media(max-width: 1270px) {
        .title {
            font-size: 40px;
            width: 300px;
        }

        .text {
            width: 300px;
        }

        .readMore {
            margin-bottom: 30px;
        }
    }

    @media(max-width: 865px) {
        .title {
            width: 100%;
            padding-inline: 1.5rem;
        }

        .text {
            width: 100%;
            padding-inline: 1.5rem;
        }

        .readMore {
            padding-inline: 1.5rem;
        }

        .brownLine {
            margin-left: 1.5rem;
        }
    }

`

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-bottom: 120px;

    #image2  {
        width: 274px;
        height: 167px;
        object-fit: cover;
        margin-bottom: 25px;
    }

    #image1  {
        width: 195px;
        height: 293px;
        object-fit: cover;
    }

    .image1 {
        display: flex;
        justify-content: flex-end;
    }

    #image3  {
        width: 238px;
        height: 386px;
        object-fit: cover;
    }

    @media(max-width: 515px) {
        #image2  {
        width: 172px;
        height: 105px;
        object-fit: cover;
    }

        #image1  {
            width: 123px;
            height: 184px;
            object-fit: cover;
        }

        #image3  {
        width: 150px;
        height: 243px;
        object-fit: cover;
    }
    }

`