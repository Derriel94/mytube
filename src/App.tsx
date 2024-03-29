import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components/componentindex'
import { Box, Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material/Search';
import IconBxSearchAlt from './components/IconBxSearchAlt';
import { fetchFromApi } from './utils/fetchFromApi'
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [randomvideoId, setRandomVideoId] = useState("dyFVwXROzZk&t=7463s")
  const [videoFeed, setFeedVideo] = useState("");
  const [videoList, setVideoList] = useState([]);
  const { clickedVideoId }= useParams();

  
  const randomTopicList = ["programing", "marine biology", "sea life", "React", "Html", "CSS"];
  
  //Break this down as much as possible
  useEffect(()=>{
    const randomTopicIdx = Math.floor(Math.random() * randomTopicList.length);
    fetchFromApi(`search?part=snippet&q=${randomTopicList[randomTopicIdx]}`)
    .then((data)=> {
      let randomVideo = data.items[Math.floor(Math.random() * 50)]
      
      if (randomVideo.id.videoId == undefined) {
        setRandomVideoId("dyFVwXROzZk&t=7463s")
      } else {
        setRandomVideoId(randomVideo.id.videoId)
        setFeedVideo(randomVideo.snippet.title)
        setVideoList(data.items)
      }
      
     })
  
  
  },[])

  const handleSubmit = () => {

        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> {
      let randomVideo = data.items[Math.floor(Math.random() * 50)]
      if (randomVideo.id.videoId == undefined) {
        setRandomVideoId("dyFVwXROzZk&t=7463s")
      } else {
        setRandomVideoId(randomVideo.id.videoId)
        setFeedVideo(randomVideo.snippet.title)
        setVideoList(data.items)
      }
     })   

  }

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      handleSubmit()
    }
  }
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
      <Paper 
      
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        width: "211px",
        margin: "auto"
        }} 
        elevation={3}>
        <input type="text" className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        onKeyDown={(e)=> handleEnter(e)}
        />
        <IconButton onClick={handleSubmit} sx={{p:"5px", color:"blue"}}>
          <IconBxSearchAlt />       
        </IconButton>

      </Paper>
   
      <Routes>
        <Route path="/" exact element={<Feed randomvideoId={randomvideoId} videoFeed={videoFeed} videoList={videoList} />} />
        <Route path="/video/:id" element={<VideoDetail videoList={videoList}/>} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
      </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
