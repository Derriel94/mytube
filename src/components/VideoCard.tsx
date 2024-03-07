import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

const VideoCard =( { videoId, videoSnippet} ) => {
	
	return (
		<Card sx={{ width: {md: '320px', xs: '320px'}, borderRadius: "5px"}}>
			<Link to={videoId.videoId == undefined ?`/channel/${videoId.channelId}` : `/video/${videoId.videoId}`} >
				<CardMedia 
				alt={videoSnippet.title}
				sx={{width: "200px", height: "200px", margin:"auto"}}
				image={videoSnippet.thumbnails.high.url}/>
			</Link>
		<CardContent>
					<Typography 
						variant="subtitle2"
						fontWeight="bolder"
						color="blue">
						{videoSnippet.title}
					</Typography>
					<Typography 
						variant="subtitle1"
						fontWeight="bold"
						color="gray">
						{videoSnippet.channelTitle}
					</Typography>

		</CardContent>
		</Card>
	)
}

export default 	VideoCard