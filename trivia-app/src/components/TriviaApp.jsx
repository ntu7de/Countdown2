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

    }, []);

    const shuffleAnswers = (answers) => {
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return answers;
    }

    function checkAnswer(question, givenAnswer) {
        
    }

    return (
        <>
            <h1>Trivia App</h1>
            {questions.map((questionData, index) => { 
                
                const answers = [questionData.correctAnswer, ...questionData.incorrectAnswers];
                const shuffledAnswers = shuffleAnswers(answers);

                return (
                <div key={index}>
                    <h3>{questionData.question.text}</h3>
                    <ul key={`ul_${index}`}>
                        {shuffledAnswers.map((answer, idx) => { return (
                            <li><button key={idx}>{answer}</button></li>
                        )})}
                    </ul>
                </div>
                
            )})}
        </>
    )
}

export default TriviaApp