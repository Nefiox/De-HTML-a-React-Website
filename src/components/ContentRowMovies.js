import React from 'react';
import PropTypes from 'prop-types';

function ContentRowMovies(props) {
    return(
        <div className="row">
                {/*<!-- Movies in Data Base -->*/}
            {props.blocks.map((block, i) =>
                <div key={i+block} className="col-md-4 mb-4">
                    <div className={`card shadow h-100 py-2 ${block.border}`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{block.titulo}</div>
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
};

ContentRowMovies.propTypes = {
    titulo: PropTypes.string,
    cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    border: PropTypes.oneOf(["border-left-primary", "border-left-success", "border-left-warning"]),
    icon: PropTypes.string
}

ContentRowMovies.defaultProps = {
    titulo: "Sin encabezado",
    cifra: 0,
    border: "border-left-primary",
    icon: "border-left-primary"
}

export default ContentRowMovies;