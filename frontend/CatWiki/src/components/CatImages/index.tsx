import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styles'

interface CatImage {
  id: string;
  url: string;
}

interface CatImagesProps {
  breedId: string | undefined;
}

const CatImages: React.FC<CatImagesProps> = ({ breedId }) => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);

  useEffect(() => {
    if (breedId) {
      axios
        .get<CatImage[]>(`https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=${breedId}`)
        .then((response) => {
          const allImages = response.data;
          // Embaralhe o array de imagens aleatoriamente
          const shuffledImages = allImages.sort(() => 0.5 - Math.random());
          // Pegue apenas as primeiras 8 imagens
          const selectedImages = shuffledImages.slice(0, 8);
          setCatImages(selectedImages);
        })
        .catch((error) => {
          console.error('Erro ao buscar imagens de gatos:', error);
        });
    }
  }, [breedId]);


    return (
        <S.Container>
            <h2>Other photos</h2>
           <S.ImageCats>
                {catImages.map((catImage) => (
                    <img
                        id='othersCatImages'
                        key={catImage.id}
                        src={catImage.url}
                        alt={`Gato ID: ${catImage.id}`}
                    />
                ))}
            </S.ImageCats>
        </S.Container>
    );
};

export default CatImages;
