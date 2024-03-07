import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { fetchFromApi } from '../utils/fetchFromApi'
import {Videos} from './componentindex'
import './../App.css'


function Feed({randomvideoId, videoFeed, videoList}) {
	
	

	return (
			<Stack sx={{flexDirection: {md: "column"}, textAlign: "center"}}>
			<Typography color="#fff" variant="h4" fontWeight="bold" p={1}>
				MyTube: <span style={{color: "blue"}}>Vidoes</span>
			</Typography>
				<Box 
					sx={{ height: "60vh", width: "100%"}}
					display="flex"
					position="sticky"
					top="50px"
					justifyContent="center"
					flexDirection="column"
					alignItems="center"
					>
						<ReactPlayer height="100%" width="100%"
						url={ `https://www.youtube.com/watch?v=${randomvideoId}`}
						className="react-player" 
						controls
						/>
				</Box>
				<Typography color="#fff" variant="h4" fontWeight="bold" p={1}>
						MyTube: <span style={{color: "blue"}}> {videoFeed || "Videos"}</span>
				</Typography>
					<Videos videoList={videoList}/>
			</Stack>
	)
}

export default Feed