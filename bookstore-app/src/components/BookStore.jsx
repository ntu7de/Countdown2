import { BookList } from "./BookList";

export const BookStore = ( bookData ) => {

    const arrOfGenres = Object.keys(bookData['bookData']);

    // console.log(bookData['bookData']['children']);
    // console.log(arrOfGenres);
    // console.log("Hello???");
    
    return (
        <>
            {arrOfGenres.map((genre) => { return (
                <ul key={genre}>
                    <li><h2>{genre}</h2></li>
                    <BookList arrOfBooks={bookData['bookData'][genre]}/>
                </ul>
            )})}
        </>
    )

}