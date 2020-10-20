import React from 'react';
import './ChangePagesRendered.module.scss';

const ChangePagesRendered = (props) => {

    const { pages } = props;

    return(
        <div className="container">
          <button id="5" onClick={pages} className="btn btn-primary m-1 custom">5</button>
          <button id="10" onClick={pages} className="btn btn-primary m-1 custom">10</button>
          <button id="15" onClick={pages} className="btn btn-primary m-1 custom">15</button>
          <button id="20" onClick={pages} className="btn btn-primary m-1 custom">20</button>
        </div>
    );
};

export default ChangePagesRendered;