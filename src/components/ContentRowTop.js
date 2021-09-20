import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';

let stats = [
    {
    title: "Movies in Data Base",
    cifra: 21,
    border: "border-left-primary",
    icon: "fa-film"
},
{
    title: "Total awards",
    cifra: 79,
    border: "border-left-success",
    icon: "fa-award"
},
{
    title: "Actors quantity",
    cifra: 49,
    border: "border-left-warning",
    icon: "fa-user"
}
];

function ContentRowTop() {
    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <ContentRowMovies blocks = { stats } />
            <LastMovieInDb />
    </div>
    );
}

export default ContentRowTop;