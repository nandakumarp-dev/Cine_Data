import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'

function CreateMovie() {

    let navigate = useNavigate()

    async function CreateMovieAPI(event){

        event.preventDefault()

        let url = 'http://127.0.0.1:8000/movies/'

        let token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUyNjQyNTE5LCJpYXQiOjE3NTI1NTYxMTksImp0aSI6IjU5YmMyMjY1YmI5MDRmMmFhYjMyNTJiY2NiOGI3YWZjIiwidXNlcl9pZCI6MX0.F4bXOCi0B_IpbpEYt_7qJRYpmwysc09lxlS1JjfR0OY`

        let headers = {'Authorization':token}

        let movieData = new FormData(event.target)

        let cast = [...event.target.cast.selectedOptions].map(item=>parseInt(item))

        movieData.delete('cast')

        movieData.append('cast',JSON.stringify(cast))

        let response = await axios.post(url,movieData,{headers})

        if (response.status===201){

            console.log(response.data.msg)

            navigate('')

        }
        else{

            console.log('movie creation failed')

        }

    }

  return (
<>
    <div class="container mt-5">
    <h2>Add Movie</h2>
    <form encType='multipart/form-data' onSubmit={(event)=>{CreateMovieAPI(event)}}>

       
        <div class="mb-3">
            <label for="name" class="form-label">Movie Name</label>
            <input type="text" class="form-control" id="name" name="name" maxlength="25" required/>
        </div>


        <div class="mb-3">
            <label for="released_year" class="form-label">Released Year</label>
            <input type="text" class="form-control" id="released_year" name="released_year" maxlength="4" required/>
        </div>

        <div class="mb-3">
            <label for="runtime" class="form-label">Runtime (HH:MM:SS)</label>
            <input type="text" class="form-control" id="runtime" name="runtime" placeholder="e.g. 02:40:20" pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$" required />
            <small class="form-text text-muted">Format: HH:MM:SS (e.g., 02:40:20)</small>
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
        </div>

        <div class="mb-3">
            <label for="genre" class="form-label">Genre</label>
            <select class="form-select" id="genre" name="genre" required>
                <option value="1">Drama</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="industry" class="form-label">Industry</label>
            <select class="form-select" id="industry" name="industry" required>
                <option value="Hollywood">Hollywood</option>
                <option value="Bollywood">Bollywood</option>
                <option value="Tollywood">Tollywood</option>
                <option value="Mollywood">Mollywood</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="photo" class="form-label">Movie Poster</label>
            <input type="file" class="form-control" id="photo" name="photo" accept="image/*" required/>
        </div>

        <div class="mb-3">
            <label for="cast" class="form-label">Cast</label>
            <select multiple class="form-select" id="cast" name="cast">
                <option value="1">Mohan Lal</option>
                <option value="2">Shobana</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="director" class="form-label">Director</label>
            <select class="form-select" id="director" name="director" required>
                <option value="4">Tharun Moorthy</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="production" class="form-label">Production</label>
            <select class="form-select" id="production" name="production" required>
                <option value="1">Aashirvad Cinemas</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="music_director" class="form-label">Music Director</label>
            <select class="form-select" id="music_director" name="music_director" required>
                <option value="5">Jakes Bejoy</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Save Movie</button>
    </form>
</div>

    </>
  )
}

export default CreateMovie