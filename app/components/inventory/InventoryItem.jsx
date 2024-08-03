import React from "react";
import {
  Typography,
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  Box,
  Badge,
  useTheme,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const InventoryItem = ({
  name,
  quantity,
  onRemove,
  onIncrease,
  onDecrease,
  isFavorite,
  onToggleFavorite,
}) => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: theme.shadows[2],
        transition: "box-shadow 0.3 ease-in-out",
        "&:hover:": {
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <Grid xs={6}>
        <Typography
          variant="body1"
          fontWeight="bold"
          color={theme.palette.getContrastText}
        >
          {name}
        </Typography>
      </Grid>
      <Grid xs={4}>
        <Box
          sx={{
            color: theme.palette.action.active,
            display: "flex",
            "& > *": {
              marginBottom: 2,
            },
            "& .MuiBadge-root": {
              marginRight: 4,
            },
          }}
        >
          <div>
            <Badge color="secondary" badgeContent={quantity}>
              <ShoppingBagIcon />
            </Badge>
            <ButtonGroup>
              <Button
                aria-label="increase"
                onClick={onIncrease}
                color="primary"
              >
                <AddCircleOutlineIcon />
              </Button>
              <Button
                aria-label="decrease"
                onClick={onDecrease}
                color="secondary"
              >
                <RemoveCircleOutlineRoundedIcon />
              </Button>
              {/* TODO: keep going and implement the remove button */}
            </ButtonGroup>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};
