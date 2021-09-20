import React from 'react';

function ContentRowMovies(props) {
    return(
        <div className="row">
                {/*<!-- Movies in Data Base -->*/}
            {props.blocks.map(block =>
                <div className="col-md-4 mb-4">
                    <div className={`card shadow h-100 py-2 ${block.border}`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{block.title}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{block.cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas ${block.icon} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContentRowMovies;