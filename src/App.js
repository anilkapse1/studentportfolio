import React from 'react'
import Home from './components/Home'
import Stream from './components/Stream'
import Area from './components/Area'
import Topper from './components/Topper'
import Announcement from './components/Announcement'
import Team from './components/Team'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Hero from './components/Hero'


const App = () => {
  const theme={
    colors:{
      heading:'red',
      black:'black',
      purple:'purple',
      white:'white',
      red:'red',
      header:'#75482d',
      headeractive:'#db5c64',
      headerborder:'#9dc76f',
      text1:'#6a6ab3',
      text2:'#8b8556',
      text3:'#54396b',
      text4:'#9b4330',
      text5:'#9C27B0'

    },
    media:{
      smaller:'480px',
      tablet:'768px',
      laptop:'1279px',
      desktop:'1280px'
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <BrowserRouter>
        <Header/>
        <Hero/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/stream" element={<Stream/>}/>
          <Route path="/area" element={<Area/>}/>
          <Route path="/topper" element={<Topper/>}/>
          <Route path="/announcement" element={<Announcement/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>
      </BrowserRouter>
   
    </ThemeProvider>
    )
}

export default App