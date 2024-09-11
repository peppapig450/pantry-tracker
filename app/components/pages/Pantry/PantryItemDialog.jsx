import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { usePantry } from "./PantryContext";

const PantryItemDialog = ({ open, handleClose, item, isEdit }) => {
  const theme = useTheme();
  const { addItem, editItem } = usePantry();

  const [name, setName] = useState(item?.name || "");
  const [quantity, setQuantity] = useState(item?.quantity || 1);
  const [expiration, setExpiration] = useState(item?.expiration || "");

  useEffect(() => {
    if (item) {
      setName(item.name);
      setQuantity(item.quantity);
      setExpiration(item.expiration);
    }
  }, [item]);

  const handleSave = async () => {
    if (isEdit) {
      await editItem(item.id, name, quantity, expiration);
    } else {
      await addItem(name, quantity, expiration);
    }
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        padding: theme.spacing(2),
        borderRadius: "8px",
        boxShadow: theme.shadows[5],
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
        {isEdit ? "Edit Item" : "Add Item"}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Item Name"
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="quantity"
              label="Quantity"
              type="number"
              fullWidth
              variant="standard"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="expiration"
              label="Expiration Date"
              type="date"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PantryItemDialog;
