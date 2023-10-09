import * as S from './styles'
import image2 from '../../images/image 2.png'
import image1 from '../../images/image 1.png'
import image3 from '../../images/image 3.png'

export default function BottomPageContent() {

    return (
        <S.Container>
            <S.Wrapper>
                <S.LeftContainer>
                    <div className="brownLine"></div>
                    <div className="title">
                        Why should you have a cat
                    </div>
                    <div className="text">
                        Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
                    </div>
                    <div className="readMore">
                        READ MORE
                    </div>
                </S.LeftContainer>
                <S.RightContainer>
                    <div className="left">
                        <div className="image2">
                            <img id='image2' src={image2} />
                        </div>
                        <div className="image1">
                            <img id='image1' src={image1} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="image3">
                            <img id='image3' src={image3} />
                        </div>
                    </div>
                </S.RightContainer>
            </S.Wrapper>
        </S.Container>
    )
}