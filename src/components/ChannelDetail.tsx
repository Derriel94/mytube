import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import { fetchFromApi } from './../utils/fetchFromApi'

function ChannelDetail() {

	const { channelid } = useParams();



	useEffect(()=> {
	

	},[channelid])

	return (
		<Box sx={{height: "95vh"}}>
			
		</Box>
	)
}

export default ChannelDetail