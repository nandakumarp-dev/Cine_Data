import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function MovieEdit() {

    let {uuid} = useParams()

    let [movie,ChangeMovie] = useState({
                                            name: "",
                                            released_year: "", 
                                            runtime: "", 
                                            description: "", 
                                            genre: null,
                                            industry: "", 
                                            photo: null, 
                                            cast: [],
                                            director: null, 
                                            production: null, 
                                            music_director: null

                                        })

    useEffect(()=>{fetchMovieDetails()},[uuid])

    let baseUrl = 'http://127.0.0.1:8000'

    let url = `http://127.0.0.1:8000/movies/${uuid}/`    

    async function fetchMovieDetails(){

        let response = await axios.get(url)

        response.status ===200 ? ChangeMovie(response.data) : console.log('no movie details')
    }

    async function updateMovie(event){

        event.preventDefault()

        let movieData = new FormData(event.target)

        let cast = [...event.target.cast.selectedOptions].map(item=>parseInt(item.value))

        movieData.delete('cast')

        movieData.append('cast',JSON.stringify(cast))        

        movieData.forEach((value,key)=>console.log(key,value))

        if (!event.target.files[0] instanceof File){

            movieData.delete('photo')

        }

        movieData.forEach((value,key)=>console.log(key,value))

    }

  return (
    <>
    <div class="container mt-5">
    <h2>Edit Movie</h2>
    <form encType='multipart/form-data' onSubmit={(event)=>{updateMovie(event)}}>

       
        <div class="mb-3">
            <label for="name" class="form-label">Movie Name</label>
            <input type="text" value={movie.name} onChange={event=>{ChangeMovie({...movie,name:event.target.value})}}  class="form-control" id="name" name="name" maxlength="25"/>
        </div>


        <div class="mb-3">
            <label for="released_year" class="form-label">Released Year</label>
            <input type="text" value={movie.released_year} onChange={event=>{ChangeMovie({...movie,released_year:event.target.value})}}  class="form-control" id="released_year" name="released_year" maxlength="4" />
        </div>

        <div class="mb-3">
            <label for="runtime" class="form-label">Runtime</label>
            <input type="time" value={movie.runtime} onChange={event=>{ChangeMovie({...movie,runtime:event.target.value})}}  class="form-control" id="runtime" name="runtime" />
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" value={movie.description} onChange={event=>{ChangeMovie({...movie,description:event.target.value})}} id="description" name="description" rows="4"></textarea>
        </div>

        <div class="mb-3">
            <label for="genre" class="form-label">Genre</label>
            <select class="form-select" value={movie.genre?.id} onChange={event=>{ChangeMovie({...movie,genre:event.target.value})}} id="genre" name="genre" required>
                <option value="1">Thriller</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="industry" class="form-label">Industry</label>
            <select class="form-select" value={movie.industry} onChange={event=>{ChangeMovie({...movie,industry:event.target.value})}} id="industry" name="industry" required>
                <option value="Hollywood">Hollywood</option>
                <option value="Bollywood">Bollywood</option>
                <option value="Tollywood">Tollywood</option>
                <option value="Mollywood">Mollywood</option>
            </select>
        </div>
        <div className="row">
            <div className="col-8">
                <div class="mb-3">
            <label for="photo" class="form-label">Movie Poster</label>
            <input type="file" onChange={event=>{ChangeMovie({...movie,photo:event.target.files[0]})}} class="form-control"  id="photo" name="photo" accept="image/*"/>
                </div>
            </div>
            <div className="col-4">
                <img src={`${baseUrl}${movie.photo}`} alt=""  style={{width:"200px",height:"300px",objectFit:"fill"}} />

            </div>
        </div>
        
        <div class="mb-3">
            <label for="cast" class="form-label">Cast</label>
            <select multiple value={movie.cast?.map(person=>String(person.id))} onChange={event=>{ChangeMovie({...movie,cast:event.target.value})}} class="form-select" id="cast" name="cast">
                <option value="1">Mohan Lal</option>
                <option value="2">Sobana</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="director" class="form-label">Director</label>
            <select class="form-select" value={movie.director?.id} onChange={event=>{ChangeMovie({...movie,director:event.target.value})}}  id="director" name="director" required>
                <option value="4">Tharun Moorthy</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="production" class="form-label">Production</label>
            <select class="form-select" value={movie.production?.id} onChange={event=>{ChangeMovie({...movie,production:event.target.value})}}  id="production" name="production" required>
                <option value="1">Rejaputhra Visual Media</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="music_director" class="form-label">Music Director</label>
            <select class="form-select" value={movie.music_director?.id} onChange={event=>{ChangeMovie({...movie,music_director:event.target.value})}}  id="music_director" name="music_director" required>
                <option value="5">Jakes Bejoy</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Update Movie</button>
    </form>
</div>

    </>
  )
}

export default MovieEdit