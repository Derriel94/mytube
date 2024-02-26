import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from './componentindex'


function NavBar() {
	return (
		<Box sx={{ display: "flex", justifyContent:"center"}} p={2}>
			<SearchBar />
		</Box>
	)
}

export default NavBar