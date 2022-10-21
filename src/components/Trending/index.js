/* eslint-disable array-callback-return */
import React from 'react';
import MoviesCard from './MoviesCard';

const trending = () => {
    return (
        <div>
            <h3 className=" border-b border-primary mt-12 mb-6 pb-6">Phim Hot</h3>

            <MoviesCard />

            <div className="flex justify-center">
                <button className="btn hover:scale-125 transition ease-out duration-500">Load More</button>
            </div>
        </div>
    );
};

export default trending;
