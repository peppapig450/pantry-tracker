import React, { useState } from "react";
import { PantryProvider } from "./PantryContext";
import PrimarySearchPantryAppBar from "../AppBars/PantryAppBar";
import FloatingActionButton from "./PantryFloatingActionButton";
import PantryItemDialog from "./PantryItemDialog";
import PantryItemTable from "./PantryItemTable";

const Pantry = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleFabClick = () => {
    setIsEdit(false);
    setSelectedItem(null);
    setDialogOpen(true);
  };

  const handleEditDialogOpen = (item) => {
    setIsEdit(true);
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <PantryProvider>
      <PrimarySearchPantryAppBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <PantryItemTable
        searchQuery={searchQuery}
        openEditDialog={handleEditDialogOpen}
      />
      <FloatingActionButton onClick={handleFabClick} />
      <PantryItemDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        item={selectedItem}
        isEdit={isEdit}
      />
    </PantryProvider>
  );
};

export default Pantry;
