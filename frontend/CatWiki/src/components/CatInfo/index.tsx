import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import logoPage from '../../images/CatwikiLogo.svg';
import { Link } from 'react-router-dom';
import CatImages from '../CatImages';
import Footer from '../Footer';

interface BreedDetails {
  name: string;
  description: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  life_span: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
  adaptability: number;
}



function CatInfoComponent() {
  const { id } = useParams<{ id: string }>();
  const [breedDetails, setBreedDetails] = useState<BreedDetails | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [strangerData, setStrangerData] = useState<number | null>(null);
  const [socialData, setSocialData] = useState<number | null>(null);
  const [healthData, setHealthData] = useState<number | null>(null);
  const [inteligenceData, setInteligenceData] = useState<number | null>(null);
  const [groomingData, setGroomingData] = useState<number | null>(null);
  const [childFData, setChildFData] = useState<number | null>(null);
  const [affectionData, setAffectionData] = useState<number | null>(null);
  const [adaptabilityData, setAdaptabilityData] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<BreedDetails>(`https://api.thecatapi.com/v1/breeds/${id}`)
      .then((response) => {
        const breedData = response.data;
        setBreedDetails(breedData);

        axios
          .get(`https://api.thecatapi.com/v1/images/${breedData.reference_image_id}`)
          .then((imageResponse) => {
            const image = imageResponse.data;
            setImageUrl(image.url);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setBreedDetails(null);
      });
  }, [id]);

  useEffect(() => {
    if (breedDetails) {
      setStrangerData(breedDetails.stranger_friendly);
      setSocialData(breedDetails.social_needs);
      setHealthData(breedDetails.health_issues)
      setInteligenceData(breedDetails.intelligence)
      setGroomingData(breedDetails.grooming)
      setChildFData(breedDetails.child_friendly)
      setAffectionData(breedDetails.affection_level)
      setAdaptabilityData(breedDetails.adaptability)
    }
  }, [breedDetails]);



  return (
    <div className="cat-info">
      {breedDetails ? (
        <>
          <S.Container>
            <div className="containerLogo">
              <Link to={'/'}><img src={logoPage} alt="" /></Link>
            </div>
            <S.Wrapper>
              <S.LeftContainer>
                <img id='catImage' src={imageUrl} alt={`Imagem de ${breedDetails.name}`} />
              </S.LeftContainer>
              <S.RightContainer>
                <h2>{breedDetails.name}</h2>

                <div className="description">
                  <p>{breedDetails.description}</p>
                </div>
                <div className="temperament">
                  <p><span>Temperament:</span> {breedDetails.temperament}</p>
                </div>
                <div className="origin">
                  <p><span>Origin:</span> {breedDetails.origin}</p>
                </div>
                <div className="lifeSpan">
                  <p><span>Life Span:</span> {breedDetails.life_span} years</p>
                </div>
                <div className="plateContainer">
                  <p className='pData'>Adaptability: {adaptabilityData !== null ? adaptabilityData : 0}</p>
                  <div className="catPlates">
                    {adaptabilityData !== null &&
                      Array.from({ length: adaptabilityData }, (_, index) => (
                        <div key={index} className={`plate${index + 1} active`}></div>
                      ))}
                    {adaptabilityData !== null &&
                      Array.from({ length: 5 - (adaptabilityData || 0) }, (_, index) => (
                        <div key={index + (adaptabilityData || 0)} className={`plate${index + (adaptabilityData || 0) + 1}`}></div>
                      ))}
                  </div>
                </div>
                <div className="plateContainer">
                  <p className='pData'>Affection Level: {affectionData !== null ? affectionData : 0}</p>
                  <div className="catPlates">
                    {affectionData !== null &&
                      Array.from({ length: affectionData }, (_, index) => (
                        <div key={index} className={`plate${index + 1} active`}></div>
                      ))}
                    {affectionData !== null &&
                      Array.from({ length: 5 - (affectionData || 0) }, (_, index) => (
                        <div key={index + (affectionData || 0)} className={`plate${index + (affectionData || 0) + 1}`}></div>
                      ))}
                  </div>
                </div>
                <div className="plateContainer">
                  <p className='pData'>Child Friendly: {childFData !== null ? childFData : 0}</p>
                  <div className="catPlates">
                    {childFData !== null &&
                      Array.from({ length: childFData }, (_, index) => (
                        <div key={index} className={`plate${index + 1} active`}></div>
                      ))}
                    {childFData !== null &&
                      Array.from({ length: 5 - (childFData || 0) }, (_, index) => (
                        <div key={index + (childFData || 0)} className={`plate${index + (childFData || 0) + 1}`}></div>
                      ))}
                  </div>
                </div>
                <div className="plateContainer">
                  <p className='pData'>Grooming: {groomingData !== null ? groomingData : 0}</p>
                  <div className="catPlates">
                    {groomingData !== null &&
                      Array.from({ length: groomingData }, (_, index) => (
                        <div key={index} className={`plate${index + 1} active`}></div>
                      ))}
                    {groomingData !== null &&
                      Array.from({ length: 5 - (groomingData || 0) }, (_, index) => (
                        <div key={index + (groomingData || 0)} className={`plate${index + (groomingData || 0) + 1}`}></div>
                      ))}
                  </div>
                </div>
                <div className="plateContainer">
                  <p className='pData'>Intelligence: {inteligenceData !== null ? inteligenceData : 0}</p>
                  <div className="catPlates">
                    {inteligenceData !== null &&
                      Array.from({ length: inteligenceData }, (_, index) => (
                        <div key={index} className={`plate${index + 1} active`}></div>
                      ))}
                    {inteligenceData !== null &&
                      Array.from({ length: 5 - (inteligenceData || 0) }, (_, index) => (
                        <div key={index + (inteligenceData || 0)} className={`plate${index + (inteligenceData || 0) + 1}`}></div>
                      ))}
                  </div>
                </div>
                <div className="plateContainer">
                  <p className='pData'>Health Issues: {healthData !== null ? healthData : 0}</p>
                  <div className="catPlates">
                    {healthData !== null &&
                      Array.from({ length: healthData }, (_, index) => (
                        <div key={index} className={`plate${index + 1} active`}></div>
                      ))}
                    {healthData !== null &&
                      Array.from({ length: 5 - (healthData || 0) }, (_, index) => (
                        <div key={index + (healthData || 0)} className={`plate${index + (healthData || 0) + 1}`}></div>
                      ))}
                  </div>
                </div>
                <div className="plateContainer">
                  <p className='pData'>Social Needs: {socialData !== null ? socialData : 0}</p>
                  <div className="catPlates">
                    {socialData !== null &&
                      Array.from({ length: socialData }, (_, index) => (
                        <div key={index} className={`plate${index + 1} active`}></div>
                      ))}
                    {socialData !== null &&
                      Array.from({ length: 5 - (socialData || 0) }, (_, index) => (
                        <div key={index + (socialData || 0)} className={`plate${index + (socialData || 0) + 1}`}></div>
                      ))}
                  </div>
                </div>
                <div className="plateContainer">
                  <p className='pData'>Stranger Friendly: {strangerData !== null ? strangerData : 0}</p>
                  <div className="catPlates">
                    {strangerData !== null &&
                      Array.from({ length: strangerData }, (_, index) => (
                        <div key={index} className={`plate${index + 1} active`}></div>
                      ))}
                    {strangerData !== null &&
                      Array.from({ length: 5 - (strangerData || 0) }, (_, index) => (
                        <div key={index + (strangerData || 0)} className={`plate${index + (strangerData || 0) + 1}`}></div>
                      ))}
                  </div>
                </div>
              </S.RightContainer>
            </S.Wrapper>
            {breedDetails && <CatImages breedId={id} />}
          </S.Container>
          <Footer />
        </>
      ) : (
        <p>Carregando informações da raça...</p>
      )}
    </div>


  );
}

export default CatInfoComponent;
