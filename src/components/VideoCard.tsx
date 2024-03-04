import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

const VideoCard =( { videoId, videoSnippet} ) => {
	return (
		<Card sx={{ width: {md: '320px', xs: '100%'}, borderRadius: "5px"}}>
			{/*<Link to={`/video/${videoId.videoId}`} >

			</Link>*/}
		<CardContent>
					<Typography 
						variant="subttile2"
						fontWeight="bold"
						color="blue">
						{console.log(videoId.videoId)}
						{videoSnippet.title}
					</Typography>
		</CardContent>
		</Card>
	)
}

export default 	VideoCard