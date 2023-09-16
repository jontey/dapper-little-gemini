import React from 'react';
import { Movie } from '../App';
import { Link } from 'react-router-dom'

function Card({ movie }: { movie: Movie }) {

  return (
    <div className="flex shadow-lg">
      <Link className="w-full" to={`/movies/${movie.id}`}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie.title}</div>
          <p className="text-gray-700 text-base">
            {movie.tagline}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {movie.vote_average}/10
          </span>
        </div>
      </Link>
    </div>
  )
}

export default Card