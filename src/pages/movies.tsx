import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Header from '../components/header';
import { Link } from 'react-router-dom'
import { Movie } from '../App';

function Movies() {
  const params = useParams()
  const [movie, setMovie] = useState<Movie>(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(`/api/movies/${params.id}`);
      const payload = await response.json();
      setMovie(payload.data);
    }
    if (params.id) {
      getData();
    }
  }, [params]);
  /*
    * Display single movie page upon clicking movie in list page
    * Display every field (`release_date` should be localized based on browser settings. `runtime` is calculated in minutes)
    * Display a button/link to return to list movies page
  */
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container mx-auto">
        {
          movie && (
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal mb-4">
              <div className="mb-8">
                <p className="text-xl mb-2 font-bold text-gray-900 flex items-center">
                  {movie.title}
                </p>
                <div className="flex flex-col">
                  {
                    Object.keys(movie)
                      .filter((attr) => {
                        return !["title"].includes(attr)
                      })
                      .map((attr) => {
                        return (
                          <div key={`movie_${movie.id}_${attr}`} className='grid grid-cols-2'>
                            <div className="text-gray-600">{attr}</div>
                            <div>{movie[attr]}</div>
                          </div>
                        )
                      })
                  }
                </div>
              </div>
            </div>
          )
        }
        <Link to={"/"}>
          <button className="bg-blue-500 rounded-md text-white p-2">Back to Home</button>
        </Link>
      </main>
    </>
  )
}

export default Movies;