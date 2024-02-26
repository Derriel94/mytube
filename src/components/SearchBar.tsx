import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, IconButton } from '@mui/material';
import { YoutubeSearchedForIcon } from '@mui/icons-material';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`/search/${searchTerm}`)

			setSearchTerm('')
		}
	}

	return (
			<Paper elevation={3} onSubmit={handleSubmit}>
				<input type="text" className="search-bar"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e)=>{setSearchTerm(e.target.value)}}
				/>
				<IconButton type="submit" sx={{p:"10px", color:"gray"}}>
					<YoutubeSearchedForIcon />
				</IconButton>
			</Paper>
	)
}

export default SearchBar