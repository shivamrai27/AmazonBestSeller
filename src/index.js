import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const books = [
    {
        author: 'Morgan Housel',
        title: 'The Psychology Of Money',
        img: "https://m.media-amazon.com/images/I/71g2ednj0JL._SY466_.jpg",
        id: 1
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: "https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg",
        id: 2
    },
    {
        author: 'Sadguru',
        title: 'KARMA: A YOGI GUIDE',
        img: "https://m.media-amazon.com/images/I/91xafByFlLL._SY466_.jpg",
        id: 3
    },
    {
        author: 'Anand Ranganathan',
        title: 'Hindus in Hindu',
        img: "https://m.media-amazon.com/images/I/91EtFGJvG8L._SY466_.jpg",
        id: 4
    }

]

const BookList = () => {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id} />
            })}
        </section>
    );
};


const Book = (props) => {
    const { img, title, author, } = props;

    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);