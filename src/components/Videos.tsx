import React from 'react'
import { Box,Stack,Typography } from "@mui/material"

const Videos = ( {videoList} ) => {
	
	return (
		<Stack
			direction="row"
			flexWrap="wrap"
			justifyContent="start"
			gap={2} sx={{ height: {sx: "auto", md: "32vh"}}}>
		<Box>
		{videoList.map((video, idx) => {

			return (
				<Box key={idx}>
					<Typography 
						variant="subttile2"
						fontWeight="bold"
						color="blue">
						{video.snippet.title}
					</Typography>
				</Box>)
		})}
		</Box>
		</Stack>

	)
}

export default Videos