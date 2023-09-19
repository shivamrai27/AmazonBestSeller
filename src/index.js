import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList() {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}


const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg" />
const Title = () => {
    return <h2>Atomic Habbit</h2>;
};
const Author = () => <h4>James Clear</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);