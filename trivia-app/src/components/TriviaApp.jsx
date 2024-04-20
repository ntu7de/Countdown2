import React, { useEffect, useState } from 'react'

const TriviaApp = () => {

    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        // fetch trivia questions
        const fetchData = async() => {
            const data = await fetch("https://the-trivia-api.com/v2/questions");
            const json = await data.json();
            setQuestions(json);
            console.log(json[0]['incorrectAnswers']);
        }

        fetchData();

    }, [])

    return (
        <>
            <h1>Trivia App</h1>
            {questions.map((questionData, index) => { return (
                <div key={index}>
                    <h3>{questionData.question.text}</h3>
                    <ul key={`ul_${index}`}>
                        {questionData.incorrectAnswers.map((answer, idx) => { return (
                            <li><button key={idx}>{answer}</button></li>
                        )})}
                        <li><button>{questionData.correctAnswer}</button></li>
                    </ul>
                </div>
                
            )})}
        </>
    )
}

export default TriviaApp