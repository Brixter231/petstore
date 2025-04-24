import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export default function InputForm({ open, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      name: '',
      species: '',
      breed: '',
      gender: '',
      price: '',
      description: '',
      image: '',
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a New Pet</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="species"
            label="Species"
            value={formData.species}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="breed"
            label="Breed"
            value={formData.breed}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="gender"
            label="Gender"
            value={formData.gender}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="dense"
            multiline
            rows={3}
          />
          <TextField
            name="image"
            label="Image URL"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add Pet
        </Button>
      </DialogActions>
    </Dialog>
  );
}