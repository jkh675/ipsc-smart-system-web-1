import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography, styled } from "@mui/material";
import React from "react";




const StageAttr = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.caption,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));


export interface StageFormDialogProps {
    onClose: () => void;
    open: boolean;
}

export default function StageFormDialog(props: StageFormDialogProps) {
	const [stageAttr, setStageAttr] = React.useState({
		minRounds: 0,
		maxScore: 0,
		stageType: "Short",
	});


	function onCreateStageFormSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const formJson = Object.fromEntries((formData).entries());
		console.log(formJson);
	}

	return (
		<Dialog
			maxWidth="md"
			onClose={props.onClose}
			open={props.open}
			PaperProps={{
				component: "form",
				onSubmit: onCreateStageFormSubmit,
			}}
		>
			<DialogTitle>Craete new stage</DialogTitle>
			<DialogContent>
				<Stack gap={2}>
					<TextField
						autoFocus
						required
						name="name"
						label="Name"
						type="text"
						fullWidth
						variant="outlined"
					/>
					<TextField
						name="description"
						label="Description"
						type="text"
						multiline
						fullWidth
						variant="outlined"
					/>
					<FormControl fullWidth required>
						<InputLabel>Designer</InputLabel>
						<Select
							name="designer"
							label="Designer"
							defaultValue={1}
						>
							<MenuItem value={1}>aefklmklmfklmfw3klm</MenuItem>
						</Select>
					</FormControl>
					<Grid container justifyContent={"space-around"} spacing={1}>
						<Grid item xs={12/2} sm={12/3}>
							<TextField
								fullWidth
								required
								name="pappers"
								label="Pappers"
								type="number"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12/2} sm={12/3}>
							<TextField
								fullWidth
								required
								name="noshoots"
								label="No-shoots"
								type="number"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} sm={12/3}>
							<TextField
								fullWidth
								required
								name="poppers"
								label="Popper"
								type="number"
								variant="outlined"
							/>
						</Grid>
					</Grid>
					<FormControl fullWidth required>
						<InputLabel>Gun condition</InputLabel>
						<Select
							name="gunCondition"
							label="Gun condition"
							defaultValue={1}
						>
							{[1, 2, 3].map(v => <MenuItem value={v} key={v}>Condition {v}</MenuItem>)}
						</Select>
					</FormControl>
					<TextField
						fullWidth
						required
						name="walkthroughTime"
						label="Walkthrough time"
						type="number"
						variant="outlined"
						InputProps={{
							inputProps: {
								min: 0,
							},
							endAdornment: <InputAdornment position="end">minutes</InputAdornment>,
						}}
					/>
					<Grid container borderRadius={1}>
						<StageAttr item borderRadius={"inherit"} xs={12/2} sm={12/3}>Max. score: {stageAttr.maxScore}</StageAttr>
						<StageAttr item borderRadius={"inherit"} xs={12/2} sm={12/3}>Min. rounds: {stageAttr.minRounds}</StageAttr>
						<StageAttr item borderRadius={"inherit"} xs={12} sm={12/3}>Stage type: {stageAttr.stageType}</StageAttr>
					</Grid>
				</Stack>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.onClose}>Cancel</Button>
				<Button type="submit">Create</Button>
			</DialogActions>
		</Dialog>
	);
}