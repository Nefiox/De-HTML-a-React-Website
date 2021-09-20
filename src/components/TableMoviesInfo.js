import React from 'react'

function TableMoviesInfo(props) {
    return (
    <table>
        <thead>
            <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
            </tr>
        </thead>
        <tbody>
            {props.movieInfo.map((movie, i) => 
            <tr key={i+movie}>
                <td>{movie.titulo}</td>
                <td>{movie.duracion}</td>
                <td>{movie.rating}</td>
                <td>{movie.genero}</td>
                <td>{movie.awards}</td>
            </tr>
            )}
        </tbody>
        <tfoot>
            <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
            </tr>
        </tfoot>
    </table>
    )
}

export default TableMoviesInfo;