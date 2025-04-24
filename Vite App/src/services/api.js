import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/pelayo'; // Replace with your actual API URL

export const fetchPets = async () => {
  const response = await axios.get(`${API_BASE_URL}/pets`);
  return response.data;
};

export const addPet = async (pet) => {
  const response = await axios.post(`${API_BASE_URL}/pets`, {
    name: pet.name,
    species: pet.species,
    breed: pet.breed,
    gender: pet.gender,
    image: pet.image,
    description: pet.description,
    price: pet.price,
  });
  return response.data;
};

export const addPetsBulk = async (pets) => {
  const response = await axios.post(`${API_BASE_URL}/pets/bulk`, pets);
  return response.data;
};

export const updatePet = async (id, pet) => {
  const response = await axios.put(`${API_BASE_URL}/pets/${id}`, pet);
  return response.data;
};

export const deletePet = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/pets/${id}`);
  return response.data;
};