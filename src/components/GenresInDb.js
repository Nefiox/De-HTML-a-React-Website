import React from 'react';
let genres = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical'];

function GenresInDb() {
    return (
        <div class="col-lg-6 mb-4">						
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            
                            {genres.map((genre) => (
                                    <div class="col-lg-6 mb-4">
                                    <div class="card bg-dark text-white shadow">
                                        <div class="card-body">
                                            {genre}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default GenresInDb;