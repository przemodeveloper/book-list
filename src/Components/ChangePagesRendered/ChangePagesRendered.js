import React from 'react';

const ChangePagesRendered = (props) => {
    return(
        <div>
          <button id="5" onClick={props.pages} className="btn btn-primary m-1 custom">5</button>
          <button id="10" onClick={props.pages} className="btn btn-primary m-1 custom">10</button>
          <button id="15" onClick={props.pages} className="btn btn-primary m-1 custom">15</button>
          <button id="20" onClick={props.pages} className="btn btn-primary m-1 custom">20</button>
        </div>
    );
};

export default ChangePagesRendered;