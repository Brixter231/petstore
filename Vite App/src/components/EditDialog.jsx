import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export default function EditDialog({ open, petData, onClose, onChange, onSave }) {
  // Use a fallback in case `petData` is null or undefined
  const fallbackData = petData || {
    name: '',
    species: '',
    breed: '',
    gender: '',
    price: '',
    description: '',
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Pet Details</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            name="name"
            label="Name"
            value={fallbackData.name} // Controlled input
            onChange={onChange} // Update state on change
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="species"
            label="Species"
            value={fallbackData.species}
            onChange={onChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="breed"
            label="Breed"
            value={fallbackData.breed}
            onChange={onChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="gender"
            label="Gender"
            value={fallbackData.gender}
            onChange={onChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={fallbackData.price}
            onChange={onChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="description"
            label="Description"
            value={fallbackData.description}
            onChange={onChange}
            fullWidth
            margin="dense"
            multiline
            rows={3}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={onSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}