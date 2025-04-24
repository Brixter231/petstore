import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function PetGallery({ petList, handleEditOpen, handleDeleteOpen }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 4,
        width: '100%',
        margin: '0 auto',
      }}
    >
      {petList.map((pet) => (
        <Box
          key={pet.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: 2,
            backgroundColor: '#fff',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >

          {/* Pet Image */}
          <Box
            component="img"
            src={pet.image}
            alt={pet.name}
            sx={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />

          {/* Pet Details */}
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Typography variant="h6">{pet.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {pet.species} - {pet.breed}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Gender: {pet.gender}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Price: ${pet.price}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Description: {pet.description}
            </Typography>
          </Box>

          {/* Edit and Delete Buttons */}
          <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                handleEditOpen(pet);
              }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteOpen(pet);
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}