import { Link } from 'react-router-dom'
import * as S from './styles'

export default function MidPageContent() {
    const imageUrlBengal = 'https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg'
    const imageUrlSavannah = 'https://cdn2.thecatapi.com/images/G_2zGI5Wu.jpg'
    const imageUrlNorweigan = 'https://cdn2.thecatapi.com/images/-ZBBqoWNQ.jpg'
    const imageUrlSelkirk = 'https://cdn2.thecatapi.com/images/B2YB13Ydq.jpg'

    return (
        <S.Container>
            <S.Wrapper>
                <div className="mostSearched">
                    Most Searched Breeds
                </div>
                <div className="brownLine"></div>
                <div className="textMidPage">
                    <div className="text"> 66+ Breeds for you to discover</div>
                    <div className="seeMore"><Link to={'/top-10-cats'}>SEE MORE</Link></div>
                </div>
                <div className="containerCats">
                    <div className="catContent">
                        <div className="imageCat">
                            <img className='catPhoto' src={imageUrlBengal}/>
                        </div>
                        <div className="breedCat">Bengal</div>
                    </div>
                    <div className="catContent">
                        <div className="imageCat">
                            <img className='catPhoto' src={imageUrlSavannah}/>
                        </div>
                        <div className="breedCat">Savannah</div>
                    </div>
                    <div className="catContent">
                        <div className="imageCat">
                            <img className='catPhoto' src={imageUrlNorweigan}/>
                        </div>
                        <div className="breedCat">Norweigan Forest Cat</div>
                    </div>
                    <div className="catContent">
                        <div className="imageCat">
                            <img className='catPhoto' src={imageUrlSelkirk}/>
                        </div>
                        <div className="breedCat">Selkirk Rex</div>
                    </div>
                </div>
            </S.Wrapper>
        </S.Container>
    )
}