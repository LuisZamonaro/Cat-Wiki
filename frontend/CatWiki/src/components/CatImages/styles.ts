import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 100px;

    #othersCatImages {
        width: 278px;
        height: 278px;
        object-fit: cover;
        border-radius: 24px;
    }

    h2 {
        margin-bottom: 30px;
    }

    @media(max-width: 605px) {
        width: 310px;
        height: 310px;
    }
`

export const ImageCats = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 0.25fr);
    gap: 16px; 

    @media(max-width: 1180px) {
        grid-template-columns: repeat(3, 0.25fr);
    }

    @media(max-width: 900px) {
        grid-template-columns: repeat(2, 0.25fr);
    }

    @media(max-width: 605px) {
        grid-template-columns: repeat(1, 0.25fr);
        padding-bottom: 120px;
    }
`