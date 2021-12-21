import React from "react";
import { Spinner } from "react-bootstrap";


const Loading = () => {
  return (
    <div className="loadingDiv">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h1>Loading..</h1>
    </div>
  );
};

export default Loading;
