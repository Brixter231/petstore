import React, { useState, useEffect } from 'react';
import { Box, Snackbar, Alert, Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PetGallery from './PetGallery';
import PetDetailsDialog from './PetDetailsDialog';
import EditDialog from './EditDialog';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import AddPetDialog from './AddPetDialog';
import { fetchPets, addPet, updatePet, deletePet } from '../services/api';

export default function PetManager() {
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null); // State for the selected pet
  const [editDialogOpen, setEditDialogOpen] = useState(false); // State for edit dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // State for delete dialog
  const [addDialogOpen, setAddDialogOpen] = useState(false); // State for add pet dialog
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    const loadPets = async () => {
      try {
        const pets = await fetchPets();
        setPetList(pets);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    loadPets();
  }, []);

  const handleAddOpen = () => {
    setAddDialogOpen(true); // Open the add pet dialog
  };

  const handleAddClose = () => {
    setAddDialogOpen(false); // Close the add pet dialog
  };

  const handleAddSave = async (newPet) => {
    try {
      const addedPet = await addPet(newPet); // Add the new pet to the server
      setPetList((prevList) => [...prevList, addedPet]); // Update the local list
      setSnackbarMessage('Pet added successfully!');
      setSnackbarSeverity('success');
    } catch (err) {
      setSnackbarMessage('Failed to add pet!');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
      setAddDialogOpen(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box sx={{ padding: 4, position: 'relative' }}>
      <PetGallery
        petList={petList}
        handleEditOpen={(pet) => setEditDialogOpen(true) && setSelectedPet(pet)}
        handleDeleteOpen={(pet) => setDeleteDialogOpen(true) && setSelectedPet(pet)}
      />
      <EditDialog
        open={editDialogOpen}
        petData={selectedPet}
        onClose={() => setEditDialogOpen(false)}
        onChange={(e) =>
          setSelectedPet((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
        onSave={async () => {
          await updatePet(selectedPet.id, selectedPet);
          setPetList((prevList) =>
            prevList.map((pet) => (pet.id === selectedPet.id ? selectedPet : pet))
          );
          setEditDialogOpen(false);
        }}
      />
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        petName={selectedPet?.name}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={async () => {
          await deletePet(selectedPet.id);
          setPetList((prevList) => prevList.filter((pet) => pet.id !== selectedPet.id));
          setDeleteDialogOpen(false);
        }}
      />
      <AddPetDialog open={addDialogOpen} onClose={handleAddClose} onSave={handleAddSave} />
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleAddOpen}
      >
        <AddIcon />
      </Fab>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}