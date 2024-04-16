import { BookList } from "./BookList";
import { useState } from "react";

export const BookStore = ( bookData ) => {

    const arrOfGenres = Object.keys(bookData['bookData']);
    
    // Add state to keep track of genres selected
    const [selectedGenres, setSelectedGenres] = useState(arrOfGenres);

    // console.log(bookData['bookData']['children']);
    // console.log(arrOfGenres);
    // console.log("Hello???");

    function selectGenres(genreToHide) {
        const indexToRemove = selectedGenres.indexOf(genreToHide);
        // Can't edit selectedGenres
        let newGenres = selectedGenres.slice();
        if (indexToRemove !== -1) {
            newGenres.splice(indexToRemove, 1);
        }
        setSelectedGenres(newGenres);
    }
    
    return (
        <>
            <button onClick={() => selectGenres('fiction')}>Hide Fiction</button>
            <button onClick={() => selectGenres('non-fiction')}>Hide Non-Fiction</button>
            <button onClick={() => selectGenres('children')}>Hide Children</button>
            {selectedGenres.map((genre) => { return (
                <ul key={genre}>
                    <li><h2>{genre}:</h2></li>
                    <BookList arrOfBooks={bookData['bookData'][genre]}/>
                </ul>
            )})}
        </>
    )

}