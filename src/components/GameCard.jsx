import React from 'react'

const GameCard = ({ game: { name, rating, background_image, released } }) => {
    return (
        <div className='game-card'>
            <img className='h-40 w-full' src={background_image ? `${background_image}` : `./No-Poster.png`} alt={name} />

            <div className='mt-4'>
                <h3>{name}</h3>
                <div className='content'>
                    <div className='rating'>
                        <img src="star.svg" alt="Rating" />
                        <p>{rating ? rating.toFixed(1) : `N/A`}</p>
                    </div>
                    <span>●</span>
                    <p className='year'>{released ? released.split('-')[0] : 'N/A'}</p>
                </div>
            </div>


        </div>
    )
}

export default GameCard