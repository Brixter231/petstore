package com.bondoc.pet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*") // Allow all origins; adjust as needed for production
@Controller
@RequestMapping(path="/manalo")
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping(path = "/pets")
    public @ResponseBody Iterable<Pet> getAllPet() {
        return petRepository.findAll();
    }

    @PostMapping(path = "/pets")
    public @ResponseBody Pet newPet(@RequestBody Pet pet) {
        petRepository.save(pet);
        return pet;
    }

    @PostMapping(path = "/pets/bulk")
    public @ResponseBody List<Pet> newPetsBulk(@RequestBody List<Pet> pets) {
        return petRepository.saveAll(pets);
    }

    @PutMapping("/pets/{id}")
    public @ResponseBody String updatePet(@PathVariable int id, @RequestBody Pet updatedPet) {
        Pet pet = petRepository.findById(id).orElseThrow(() -> new RuntimeException("Pet not found with id: " + id));

        pet.setName(updatedPet.getName());
        pet.setSpecies(updatedPet.getSpecies());
        pet.setBreed(updatedPet.getBreed());
        pet.setGender(updatedPet.getGender());
        pet.setImage(updatedPet.getImage());
        pet.setDescription(updatedPet.getDescription());
        pet.setPrice(updatedPet.getPrice());

        petRepository.save(pet);

        return "Pet with id " + id + " updated.";
    }

    @DeleteMapping("/pets/{id}")
    public @ResponseBody String deletePet(@PathVariable int id) {
        if (!petRepository.existsById(id)) {
            return "Pet ID not found";
        }

        petRepository.deleteById(id);
        return "Pet with id " + id + " deleted.";
    }

    @GetMapping("/pets/{id}")
    public @ResponseBody Pet getPet(@PathVariable int id) {
        return petRepository.findById(id).orElseThrow(() -> new RuntimeException(""));
    }

    @GetMapping("/pets/search/{key}")
    public @ResponseBody Iterable<Pet> search(@PathVariable String key) {
        return petRepository.findByNameOrSpeciesOrBreedOrGenderOrImageOrDescription(key, key, key, key, key, key);
    }

    @GetMapping("/pets/search/price/{maxPrice}")
    public @ResponseBody List<Pet> getPetsByPrice(@PathVariable Double maxPrice) {
        return petRepository.findByPriceLessThanEqual(maxPrice);
    }
}