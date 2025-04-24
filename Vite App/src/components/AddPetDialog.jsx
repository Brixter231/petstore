import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export default function AddPetDialog({ open, onClose, onSave }) {
  const [newPet, setNewPet] = useState({
    name: '',
    species: '',
    breed: '',
    gender: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(newPet);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Pet</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Name"
          value={newPet.name}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
        />
        <TextField
          name="species"
          label="Species"
          value={newPet.species}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
        />
        <TextField
          name="breed"
          label="Breed"
          value={newPet.breed}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
        />
        <TextField
          name="gender"
          label="Gender"
          value={newPet.gender}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          value={newPet.price}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
        />
        <TextField
          name="description"
          label="Description"
          value={newPet.description}
          onChange={handleChange}
          fullWidth
          margin="dense"
          multiline
          rows={3}
        />
        <TextField
          name="image"
          label="Image URL"
          value={newPet.image}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}