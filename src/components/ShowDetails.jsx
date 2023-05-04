import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowDetails = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!show) return <p>Loading...</p>;

  return (
    <div className='pt-[75px] max-w-[500px] mx-auto flex flex-col items-center justify-center bg-blue-800 rounded-md p-4 gap-2 shadow-2xl'>
      <h1 className='text-2xl font-bold text-white'>{show.name}</h1>
      <img src={show?.image?.medium} alt="imageOfShow" className='rounded-md shadow-md '/>
      <p className='font-bold text-white'>{show.summary}</p>
      <Link to={`/book/${id}`}>
        <button className='font-semibold text-[16px] bg-white rounded-md py-2 px-4 shadow-md text-center'>
            Book Tickets
        </button>
      </Link>
    </div>
  );
};

export default ShowDetails;
