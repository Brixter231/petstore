import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

export default function PetDetailsDialog({ open, pet, onClose }) {
  if (!pet) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{pet.name}</DialogTitle>
      <DialogContent>
        <Box
          component="img"
          src={pet.image}
          alt={pet.name}
          sx={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: 2,
          }}
        />
        <Typography variant="body1" gutterBottom>
          <strong>Species:</strong> {pet.species}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Breed:</strong> {pet.breed}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Gender:</strong> {pet.gender}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Price:</strong> ₱{pet.price.toFixed(2)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Description:</strong> {pet.description}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}