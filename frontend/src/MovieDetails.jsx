import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


function MovieDetails() {

    let {uuid} = useParams()

    useEffect(()=>{fetchMovieDetails()},[uuid])

    let [movie,ChangeMovie] = useState({})

    let navigate = useNavigate()

    let baseUrl = 'http://127.0.0.1:8000'

    let url = `http://127.0.0.1:8000/movies/${uuid}/`

    let token = `Bearer ${localStorage.getItem('accessToken')}`

    async function deleteMovie(){

        let headers = {'Authorization':token}

        let response = await axios.delete(url,{headers})

        response.status === 200 ? navigate('/') : console.log('no movie details')

    }

    async function fetchMovieDetails(){

        let response = await axios.get(url)

        response.status ===200 ? ChangeMovie(response.data) : console.log('no movie details')
    }
    
  return (
    <div class="container mt-5">
    <div class="card shadow">
        <div class="row g-0">
            <div class="col-md-4">
                <img src={`${baseUrl}${movie.photo}`} class="img-fluid rounded-start" alt=""/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">{movie.name}</h3>
                    <p><strong>Released Year:</strong>{movie.released_year}</p>
                    <p><strong>Runtime:</strong>{movie.runtime}</p>
                    <p><strong>Genre:</strong>{movie.genre?.name}</p>
                    <p><strong>Industry:</strong>{movie.industry}</p>
                    <p><strong>Director:</strong>{movie.director?.name}</p>
                    <p><strong>Music Director:</strong>{movie.music_director?.name}</p>
                    <p><strong>Production:{movie.production?.comp_name}</strong></p>

                    <p><strong>Cast:</strong>
                    
                    {movie.cast?.map((person=>person.name+' '))}
                    </p>

                    <hr/>
                    <div class="d-flex">
                        <Link to={`/movie-edit/${movie.uuid}/`} class="btn btn-primary m-1">Edit</Link>
                        <button class="btn btn-danger m-1" onClick={deleteMovie}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MovieDetails