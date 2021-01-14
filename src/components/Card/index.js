import React from 'react'
import {StyledCardwrapper, StyledText} from './Card.style'



function Card({movie} ) {
    return (
        <StyledCardwrapper>
            <StyledText> {movie.title}  </StyledText>
        </StyledCardwrapper>
    )
}

export default Card
