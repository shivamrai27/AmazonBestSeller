import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const firstBook = {
    title: 'The Psychology Of Money',
    author: 'Morgan Housel',
    img: "https://m.media-amazon.com/images/I/71g2ednj0JL._SY466_.jpg"
}
const secondBook = {
    title: 'Atomic Habits',
    author: 'James Clear',
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg"
}
const thirdBook = {
    title: 'KARMA: A YOGI GUIDE',
    author: 'Sadguru',
    img: "https://m.media-amazon.com/images/I/91xafByFlLL._SY466_.jpg"
}
const fourtBook = {
    title: 'Hindus in Hindu',
    author: 'Anand Ranganathan',
    img: "https://m.media-amazon.com/images/I/91EtFGJvG8L._SY466_.jpg"
}
// const title = 'Ikigai'
// const author = 'Francesc Miralles'
// const img = "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg"

function BookList() {
    return (
        <section className='booklist'>
            <Book
                title={firstBook.title}
                author={firstBook.author}
                img={firstBook.img}
            />
            <Book
                title={secondBook.title}
                author={secondBook.author}
                img={secondBook.img}
            />
            <Book
                title={thirdBook.title}
                author={thirdBook.author}
                img={thirdBook.img} />
            <Book
                title={fourtBook.title}
                author={fourtBook.author}
                img={fourtBook.img} />
        </section>
    );
}
const Book = ({ img, title, author }) => {

    return (
        <article className='book'>
            <img src={img} />
            <h2>{title}</h2>;
            <h4>{author}</h4>;
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);