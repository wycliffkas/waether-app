import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

const AddCityModal = ({ open, onModalClose, setCity, onSaveCity }) => {
	return (
		<Dialog
			open={open}
			onClose={onModalClose}
			aria-labelledby="responsive dialog">
			<DialogContent>
				<DialogContentText>
					To add a new city, please enter the city name below.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					label="City"
					aria-describedby="add city"
					aria-labelledby="city"
					type="text"
					fullWidth
					variant="standard"
					onChange={(event) => setCity(event.target.value)}
					inputProps={{ style: { textTransform: "capitalize" } }}
					aria-required
					required
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onModalClose} variant="outlined" size="small" aria-label="cancel">
					Cancel
				</Button>
				<Button onClick={onSaveCity} variant="contained" size="small" aria-label="submit">
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddCityModal;
