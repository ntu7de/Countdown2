
export const BookList = ({ arrOfBooks }) => {

    console.log(arrOfBooks);
    // console.log("Printed.");

    return (
        <>
            {arrOfBooks.map((book) => { return (
                <ul>
                    <li>{book.title}, {book.author}, {book.price}</li>
                </ul>
            )})}
        </>
    )
}