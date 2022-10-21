import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import dataMovies from './DataMovies';

const MoviesCard = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {dataMovies.map((movie, index) => {
                return (
                    <div
                        key={index}
                        className="bg-primary rounded  bg-cover shadow-md relative overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-primary hover:ease-linear"
                    >
                        <img src={movie.img} className="w-full" />
                        <div className="text-white flex justify-center p-3">
                            <h4>{movie.title}</h4>
                        </div>
                        <div className="flex justify-between items-center absolute bg-cyan-50 top-2 left-2 p-2 min-w-[25%] rounded-md ">
                            <FontAwesomeIcon icon={faClock} />
                            {movie.runtime}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MoviesCard;
