import React, { useEffect, useState } from 'react'
import '../styles/TriviaApp.css'

const TriviaApp = () => {

    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    
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

    const handleAnswerClick = (questionsData, answer) => {
        setSelectedAnswer(answer);
        if (answer === questionsData.correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <>
            <h1>Trivia Game</h1>
            {questions.map((questionData, index) => { 
                
                const answers = [questionData.correctAnswer, ...questionData.incorrectAnswers];
                const shuffledAnswers = shuffleAnswers(answers);

                return (
                <div key={index}>
                    <h3>{questionData.question.text}</h3>
                    <ul key={`ul_${index}`}>
                        {shuffledAnswers.map((answer, idx) => { return (
                            <li><button 
                                key={idx} 
                                className={selectedAnswer === answer ? (isCorrect ? 'correct' : 'incorrect') : ''}
                                onClick={() => handleAnswerClick(questionData,answer)}
                            > {answer}</button></li>
                        )})}
                    </ul>
                </div>
                
            )})}
        </>
    )
}

export default TriviaApp