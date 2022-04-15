import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const RatingIcon = () => {
    const [rating, setRating] = useState(0) // initial rating value
    console.log(rating);
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }

    return (
        <div className='App'>
            <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
        </div>
    )
}

export default RatingIcon;