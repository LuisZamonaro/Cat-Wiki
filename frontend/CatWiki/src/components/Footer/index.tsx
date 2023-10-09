import * as S from './styles'
import logoFooter from '../../images/CatwikiLogoFooter.svg'
import logoFooterM from '../../images/CatwikiLogoMF.svg'

export default function Footer() {
    return (
        <S.Container>
            <S.Wrapper>
                <S.LeftContainer>
                    <div className="logoFooter">
                        <img id='logoF' src={logoFooter} />
                        <img id='logoFM' src={logoFooterM}/>
                    </div>
                </S.LeftContainer>
                <S.RightContainer>
                    <div className="created">
                        &copy; created by <a href="https://github.com/LuisZamonaro" target="_blank">LuisZamonaro</a> - devChallenge.io 2021
                    </div>
                </S.RightContainer>
            </S.Wrapper>
        </S.Container>
    )
}