import React from 'react'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import CreateMovie from './CreateMovie'
import MovieDetails from './MovieDetails'
import Login from './Login'
import MovieEdit from './MovieEdit'

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="" element={<Home/>}></Route>
            <Route path="create-movie/" element={<CreateMovie/>}></Route>
            <Route path="movie-details/:uuid/" element={<MovieDetails/>}></Route>
            <Route path="login/" element={<Login/>}></Route>
            <Route path="movie-edit/:uuid/" element={<MovieEdit/>}></Route>
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App