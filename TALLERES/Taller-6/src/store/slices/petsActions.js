// src/store/slices/petsActions.js
import { fetchPetsStart, fetchPetsSuccess, fetchPetsFailure } from './petsSlice';

export const fetchPets = () => async (dispatch) => {
  dispatch(fetchPetsStart());
  try {
    const dogResponse = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1');
    const dogData = await dogResponse.json();

    const catResponse = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1');
    const catData = await catResponse.json();

    console.log('Dog Data:', dogData);
    console.log('Cat Data:', catData);

    const petsData = {
      dogs: dogData.message.map((url, index) => ({ id: index, url, breeds: [{ name: 'Dog Breed' }] })),
      cats: catData.map((cat) => ({ id: cat.id, url: cat.url, breeds: [{ name: 'Cat Breed' }] })),
    };

    dispatch(fetchPetsSuccess(petsData));
} catch (error) {
  dispatch(fetchPetsFailure(error.message));
}

};
