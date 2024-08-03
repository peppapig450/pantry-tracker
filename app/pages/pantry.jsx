import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  createTheme,
  ThemeProvider,
  Menu,
  MenuItem,
  CircularProgress,
} from "@mui/material";

import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { firestore, auth } from "@/firebase";
import { useRouter } from "next/navigation";
import PantryItemDialog from "../components/Pantry/PantryItemDialog";
import PantryItemTable from "../components/Pantry/PantryItemTable";
import PantryFLoatingActionButton from "../components/Pantry/PantryFloatingActionButton";
import PrimarySearchPantryAppBar from "../components/AppBars/PantryAppBar";

// TODO: setup firestore logic for working with it and use our custom components
