import React, { useEffect, useState } from 'react'

const TriviaApp = () => {

    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        // fetch trivia questions
        const fetchData = async() => {
            const data = await fetch("https://the-trivia-api.com/v2/questions");
            const json = await data.json();
            setQuestions(json);
            console.log(json[0]['question']['text']);
        }

        fetchData();

    }, [])

    return (
        <>
            <h1>Trivia App</h1>
            <p></p>
            {questions.map((questionData, index) => { return (
                <li key={index}>{questionData.question.text}</li>
            )})}
        </>
    )
}

export default TriviaApp