import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box, Paper, Stack } from '@mui/material';
import { fetchFromApi } from './../utils/fetchFromApi'

function ChannelDetail() {

	const { channelid } = useParams();
	const [channelDetail, setChannelDetail] = useState();



	useEffect(()=> {
		fetchFromApi(`channels?part=snippet,statistics&id=${channelid}`)
		.then((data) => {
			console.log(data)
		})
	},[channelid])

	return (
		<Box sx={{height: "95vh"}}>
			<Stack sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
				<Paper elevation={3} sx={{background: "blue"}}>

				</Paper>
				<Box>

				</Box>
			</Stack>
		</Box>
	)
}

export default ChannelDetail