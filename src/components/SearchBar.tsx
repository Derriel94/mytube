import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material/Search';
import IconBxSearchAlt from './IconBxSearchAlt';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		// e.preventDefault();

		if (searchTerm) {
			navigate(`${searchTerm}`)

			setSearchTerm('')
		}
	}

	return (
			<Paper 
			component="form"
			sx={{
				borderRadius: 20,
				border: '1px solid #e3e3e3',
				pl: 2,
				boxShadow: 'none',
				mr: {sm: 5}
				}} 
				elevation={3} onSubmit={handleSubmit}>
				<input type="text" className="search-bar"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e)=>{setSearchTerm(e.target.value)}}
				/>
				<IconButton type="submit" sx={{p:"5px", color:"blue"}}>
					<IconBxSearchAlt />				
				</IconButton>

			</Paper>
	)
}

export default SearchBar