import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
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
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg" />
const Title = () => {
    return <h2>Ikigai</h2>;
};
const Author = () => <h4> Francesc Miralles </h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);