import React from 'react'
import { Box,Stack,Typography } from "@mui/material"
import {VideoCard} from "./componentindex"

const Videos = ( {videoList} ) => {
	
	return (
		<Stack direction="row"
			flexWrap="wrap"
			justifyContent="center"
			alignItems="center"
			gap={2} sx={{ height: "auto"}}>
		{videoList.map((video, idx) => {

			return (
				<Box key={idx}>
					<VideoCard videoId={video.id} videoSnippet={video.snippet}/>
				</Box>)
		})}
		</Stack>
	)
}

export default Videos