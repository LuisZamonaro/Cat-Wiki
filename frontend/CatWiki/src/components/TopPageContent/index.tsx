import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import * as S from './styles';
import logoPage from '../../images/CatwikiLogo.svg';
import logoPageM from '../../images/CatwikiLogoFooter.svg'
import heroImagemd from '../../images/HeroImagemd.png';
import catWikiHero from '../../images/CatwikiLogoHero.svg';
import iconSearch from '../../images/icons8-search.svg';
import { Link, useNavigate } from 'react-router-dom';
import heroImageSm from '../../images/HeroImagesm.png'

interface BreedData {
  id: string;
  name: string;
  description: string;
  origin: string;
}

export default function TopPageContent() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [breedDetails, setBreedDetails] = useState<BreedData | null>(null);

  const navigate = useNavigate(); // Use useNavigate para navegação

  useEffect(() => {
    // Fazer a solicitação à API quando o componente montar
    axios.get<BreedData[]>('https://api.thecatapi.com/v1/breeds')
      .then((response) => {
        const breedNames = response.data.map((breed) => breed.name);
        setBreeds(breedNames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    // Filtrar as raças com base no texto de pesquisa
    const filtered = breeds.filter((breed) =>
      breed.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setSelectedBreed(null);
  };

  const handleBreedClick = (breedName: string) => {
    setSelectedBreed(breedName);

    // Fazer uma nova solicitação à API para obter detalhes da raça pelo ID
    axios.get<BreedData[]>(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
      .then((response) => {
        if (response.data.length > 0) {
          const breedDetails = response.data[0];
          setBreedDetails(breedDetails);

          // Navegar para a página de detalhes do gato com o ID da raça
          navigate(`/cat-info/${breedDetails.id}`, { replace: true }); // Use navigate para redirecionar
        } else {
          setBreedDetails(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setBreedDetails(null);
      });
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.TopPage>
          <div className="logoPage"><img src={logoPage} alt="Logo" /></div>
          <div className="heroImage">
            <img id='heroImageMd' src={heroImagemd} alt="Hero Image" />
            <img id='heroImageSm' src={heroImageSm} alt="Hero Image" />
          </div>
          <S.ContentHero>
            <div className="Catwiki" id='catWikiHero'><img src={catWikiHero} alt="Catwiki Logo Hero" /></div>
            <div id="catWikiHeroM"><img src={logoPageM} alt="Logo" /></div>
            <div className="textHero">
              Get to know more about your cat breed
            </div>
            <div className="inputBreed">
              <input type="text" placeholder='Enter your breed' value={searchValue} onChange={handleSearchChange} />
              <img id='iconSearch' src={iconSearch} alt="Search Icon" />
            </div>
            {searchValue.length != 0 ? <div id="search-results">
              {searchValue.length !== 0 && filteredOptions.map((option, index) => (
                <div className='individualOp' key={index} onClick={() => handleBreedClick(option)}><Link to={"/cat-info"}>{option}</Link></div>
              ))}
            </div> : null}
            <div id="breed-details">
              {selectedBreed && breedDetails && (
                <div>
                  <h2>Detalhes da Raça: {selectedBreed}</h2>
                  <p>Descrição: {breedDetails.description}</p>
                  <p>Origem: {breedDetails.origin}</p>
                </div>
              )}
            </div>
          </S.ContentHero>
        </S.TopPage>
      </S.Wrapper>
    </S.Container>
  );
}
