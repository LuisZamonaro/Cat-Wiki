import styled from 'styled-components'


export const Container = styled.div` 
    background-color: #000000;

    @media(max-width: 865px) {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 6rem;
    height: 96px;

    @media(max-width: 865px) {
        padding-inline: 1.5rem;
    }

    @media(max-width: 570px) {
        padding-inline: .5rem;
    }
`

export const LeftContainer = styled.div`

    #logoFM {
        display: none;
    }

    @media(max-width: 580px) {
        #logoFM {
            display: block;
        }

        #logoF {
            display: none;
        }
    }
`

export const RightContainer = styled.div`


    .created {
        color: white;
    }

    a {
        color: white;
    }

    @media(max-width: 570px) {
        font-size: 12px;
    }

    @media(max-width: 415px) {
        font-size: 10px;
    }

    @media(max-width: 355px) {
        font-size: 9px;
    }
`
