import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card';
import Header from './components/header';

export interface Movie {
  id: number,
  original_title: String,
  overview: String,
  release_date: String,
  runtime: number,
  status: String,
  tagline: String,
  title: String,
  vote_average: number,
  vote_count: number
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container mx-auto">
        <p className='py-4 text-xl'>These are a list of nice movies:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-between'>
          {
            movies && movies.length > 0 && (
              movies.map((movie, idx) => {
                return <Card key={`Movie_${idx}`} movie={movie}></Card>
              })
            )
          }
        </div>
      </main>
    </div>
  );
}

export default App;
