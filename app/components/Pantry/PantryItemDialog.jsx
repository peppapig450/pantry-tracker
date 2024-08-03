import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase";

const PantryItemDialog = ({ open, onClose, itemToEdit, onSave }) => {
  const theme = useTheme();

  // Local state for form inputs
  const [newItemName, newSetItemName] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
  const [newItemExpiration, setNewItemExpiration] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (itemToEdit) {
      setItemName(itemToEdit.name);
      setItemQuantity(itemToEdit.quantity);
      setItemExpiration(itemToEdit.expiration);
    }
  }, [itemToEdit]);

  const handleSave = async () => {
    setLoading(true);
    try {
      await onSave(itemName, itemQuantity, itemExpiration);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "&.MuiDialog-paper": {
          padding: theme.spacing(2),
          borderRadius: "8px",
          boxShadow: theme.shadows[5],
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderBottom: `1px solid ${theme.palette.divider}`,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        {editingItem ? "Edit Pantry Item" : "Add Pantry Item"}
      </DialogTitle>
      <DialogContent
        sx={(theme) => ({
          padding: theme.spacing(2),
        })}
      >
        <Box
          component="form"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
          })}
        >
          <Typography
            variant="body1"
            sx={(theme) => ({
              color: theme.palette.text.primary,
            })}
          >
            Name
          </Typography>
          <TextField
            placeholder="Enter item name"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            sx={(theme) => ({
              borderRadius: theme.shape.borderRadius,
              "& .MuiOutlinedInput-root": {
                borderRadius: theme.shape.borderRadius,
                "& fieldset": {
                  borderColor: theme.palette.divider,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            })}
          />
          <Typography
            variant="body1"
            sx={(theme) => ({
              color: theme.palette.text.primary,
            })}
          >
            Quantity
          </Typography>
          <TextField
            type="number"
            placeholder="Enter quantity"
            fullWidth
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            sx={(theme) => ({
              borderRadius: theme.shape.borderRadius,
              "& .MuiOutlinedInput-root": {
                borderRadius: theme.shape.borderRadius,
                "& fieldset": {
                  borderColor: theme.palette.divider,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            })}
          />
          <Typography
            variant="body1"
            sx={(theme) => ({
              color: theme.palette.text.primary,
            })}
          >
            Expiration Date
          </Typography>
          <TextField
            type="date"
            fullWidth
            value={itemExpiration}
            onChange={(e) => setItemExpiration(e.target.value)}
            sx={(theme) => ({
              borderRadius: theme.shape.borderRadius,
              "& .MuiOutlinedInput-root": {
                borderRadius: theme.shape.borderRadius,
                "& fieldset": {
                  borderColor: theme.palette.divider,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            })}
          />
        </Box>
      </DialogContent>
      <DialogActions
        sx={(theme) => ({
          padding: theme.spacing(1, 2),
          justifyContent: "space-between",
        })}
      >
        <Button
          onClick={onClose}
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          })}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          disabled={loading}
          variant="contained"
          color="primary"
          sx={(theme) => ({
            borderRadius: theme.shape.borderRadius,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
            },
            "&:active": {
              backgroundColor: theme.palette.primary.darker,
              color: theme.palette.primary.contrastText,
            },
          })}
        >
          {loading ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PantryItemDialog;
