import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Home() {

    useEffect(()=>{fetchAllMovies()},[])

    useEffect(()=>{fetchTop20Movies()},[])


    let [movies,changeMovies]=useState()

    let [top20Movies,changeTop20Movies] = useState()
    
    let baseUrl = 'http://127.0.0.1:8000'

    

    async function fetchAllMovies(){

        let url = 'http://127.0.0.1:8000/movies/'

        let response = await axios.get(url)

        if (response.status===200){
            console.log(response.data)
            changeMovies(response.data)
        }
        else {
            console.log('failed to fetch movies')
        }

    }

    async function fetchTop20Movies(){

        let url = 'http://127.0.0.1:8000/movies/'

        let response = await axios.get(url)

        if (response.status===200){
            console.log(response.data)
            changeTop20Movies(response.data)
        }
        else {
            console.log('failed to fetch movies')
        }

    }    
    
  return (
    <>
    <main class="container my-5">
        <h3>Movies</h3>
    <div class="card mb-3 shadow">
        <div class="row g-0">
            {movies?.map(movie=>(
                <div class="col-md-3 col-sm-6 m-4">
                        <Link to={`/movie-details/${movie.uuid}/`} class="card h-100 shadow-sm">
                        <img src={`${baseUrl}${movie.photo}`} class="card-img-top" alt=""/>
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title text-truncate">{movie.name} {movie.released_year}</h5>
                    
                            <div class="d-flex align-items-center mt-2">
                                <span class="badge bg-warning text-dark me-2">★ {movie.avg_rating?movie.avg_rating:0} out of {movie.out_of_users} users</span>
                                <small class="text-muted"></small>
                            </div>
                        </div>
                        </Link>
                    </div>
            ))}
            </div>
        </div>
        <h3>Top 20 Movies</h3>
    <div class="card mb-3 shadow">
        <div class="row g-0">
            {top20Movies?.map(movie=>(
                <div class="col-md-3 col-sm-6 m-4">
                        <Link to={`/movie-details/${movie.uuid}/`} class="card h-100 shadow-sm">
                        <img src={`${baseUrl}${movie.photo}`} class="card-img-top" alt=""/>
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title text-truncate">{movie.name} {movie.released_year}</h5>
                    
                            <div class="d-flex align-items-center mt-2">
                                <span class="badge bg-warning text-dark me-2">★ {movie.avg_rating?movie.avg_rating:0} out of {movie.out_of_users} users</span>
                                <small class="text-muted"></small>
                            </div>
                        </div>
                        </Link>
                </div>
                
            ))}
            </div>
        </div>
    </main>
    </>
  )
}

export default Home