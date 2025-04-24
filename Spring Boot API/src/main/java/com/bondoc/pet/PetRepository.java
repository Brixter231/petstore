package com.bondoc.pet;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PetRepository extends JpaRepository<Pet, Integer> {
    List<Pet> findByNameOrSpeciesOrBreedOrGenderOrImageOrDescription(String name, String species, String breed, String gender, String image, String description);

    List<Pet> findByPriceLessThanEqual(double price);
}