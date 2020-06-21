import React from 'react';

const RandomQuestion = (props)=>{
    console.log('InRandomQuestion');
    console.log(props.location.state.examId);
    return(
        <div>Random Question Working</div>
    )
}

export default RandomQuestion;