import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const title = 'Ikigai'
const author = 'Francesc Miralles'
const img = "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg"

function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}
const Book = () => {
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