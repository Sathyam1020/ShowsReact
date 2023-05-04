import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Home = ({ shows, loading }) => {
  return (
    <div className='h-full p-[60px]'>
      <h1 className='p-4 text-2xl font-bold text-center text-yellow-400'>TV Shows</h1>
      <div className='mx-auto max-w-[300px] flex items-center flex-wrap justify-center gap-3'>
        {
            loading ? (<Spinner/>): (
                shows.map((show) => {
                    return (
                        <div key={show.show.id} className='flex flex-col items-center gap-3 p-3 mb-4 bg-blue-800 rounded-md shadow-2xl'>
                                <img src={show?.show?.image?.medium} alt="imageOfShow" className='rounded-md shadow-md '/>
                                <p className='text-2xl font-bold text-white'>{show?.show?.name}</p>
                            <Link to={`/details/${show.show.id}`}>
                                <button className='font-semibold text-[16px] bg-white rounded-md py-2 px-4 shadow-md text-center'>Read More</button>
                            </Link>
                        </div>
                    )
                })
            )
        }
      </div>
    </div>
  );
};

export default Home;