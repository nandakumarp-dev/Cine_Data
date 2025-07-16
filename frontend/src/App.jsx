import React from 'react'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import CreateMovie from './CreateMovie'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="" element={<Home/>}></Route>
            <Route path="create-movie/" element={<CreateMovie/>}></Route>
            <Route path="movie-details/:uuid/" element={<MovieDetails/>}></Route>
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App