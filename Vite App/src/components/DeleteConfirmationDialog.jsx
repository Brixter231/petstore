import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function DeleteConfirmationDialog({ open, petName, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Delete Pet</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete <strong>{petName}</strong>? This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}