import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import logoPage from '../../images/CatwikiLogo.svg';
import axios from 'axios';
import Footer from '../Footer';

export default function TopCats() {
    const imageUrlBengal = 'https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg';
    const imageUrlChartreux = 'https://cdn2.thecatapi.com/images/OUZlUVIco.jpg';
    const imageUrlKhaoManee = 'https://cdn2.thecatapi.com/images/iyFN2mF8l.jpg';

    const [descriptions, setDescriptions] = useState<Array<string | null>>([null, null, null]);

    useEffect(() => {
        const fetchDescriptions = async () => {
            const updatedDescriptions = await Promise.all(
                ['beng', 'char', 'khao'].map(async (breedName) => {
                    try {
                        const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${breedName}`);
                        return response.data.description;
                    } catch (error) {
                        console.error(`Erro ao buscar a descrição do gato ${breedName}:`, error);
                        return null;
                    }
                })
            );

            setDescriptions(updatedDescriptions);
        };

        fetchDescriptions();
    }, []);

    return (
        <>
            <S.Container>
                <div className="logoPage">
                    <Link to={'/'}><img src={logoPage} alt="" /></Link>
                </div>
                <S.Wrapper>
                    <h1 className='top10'>Top 10 most searched breeds</h1>
                    <S.RankCats>
                        {descriptions.map((description, index) => (
                            <div key={index} className="individualCatContent">
                                <div className="left">
                                    <div className="imageCatContainer">
                                        <img
                                            className='imageCat'
                                            src={index === 0 ? imageUrlBengal : index === 1 ? imageUrlChartreux : imageUrlKhaoManee}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="breed">
                                        <h1>{index + 1}. {index === 0 ? 'Bengal' : index === 1 ? 'Chartreux' : 'Khao Manee'}</h1>
                                    </div>
                                    <div className="description">
                                        {description ? <p>{description}</p> : <p>Carregando...</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </S.RankCats>
                </S.Wrapper>
            </S.Container>
            <Footer />
        </>
    );
}
