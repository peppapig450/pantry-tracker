import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  useTheme,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const PantryItemTable = ({ items, startEditing, deleteItem }) => {
  const theme = useTheme();

  <TableContainer sx={{ maxHeight: 350, overflowY: "auto" }}>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Expiration</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.expiration}</TableCell>
            <TableCell>
              <IconButton onClick={() => startEditing(item)}>
                <Edit color="primary" />
              </IconButton>
              <IconButton onClick={() => deleteItem(item.id)}>
                <Delete color="error" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>;
};

export default PantryItemTable;
