"use client";

import React, { useState } from "react";
import { PantryProvider } from "../components/Pantry/PantryContext";
import PrimarySearchPantryAppBar from "../components/AppBars/PantryAppBar";
import FloatingActionButton from "../components/Pantry/PantryFloatingActionButton";
import PantryItemDialog from "../components/Pantry/PantryItemDialog";
import PantryItemTable from "../components/Pantry/PantryItemTable";
import withAuth from "../components/withAuth";
import { ThemeContextProvider } from "../theme/ThemeContextProvider";

const Page = () => {
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
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  );
};

export default withAuth(PantryPage);
