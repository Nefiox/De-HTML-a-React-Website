import React from 'react';
import Topbar from './Topbar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import TableMoviesInfo from './TableMoviesInfo';

let movies = [
    {
        titulo: 'Toy Story',
        duracion: 120,
        rating: 8.5,
        genero: ['Animación', 'Infantiles'],
        awards: 5
    },
    {
        titulo: 'Tomb Raider',
        duracion: 135,
        rating: 8,
        genero: ['Acción', 'Aventura'],
        awards: 2
    },
    {
        titulo: 'Interstellar',
        duracion: 150,
        rating: 9,
        genero: ['Aventura', 'Ciencia Ficción'],
        awards: 7
    }
]


function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">
                <Topbar />   
                <ContentRowTop />
            </div>
            <TableMoviesInfo movieInfo = { movies }/>
            <Footer />

      </div>
    );
}

export default ContentWrapper;