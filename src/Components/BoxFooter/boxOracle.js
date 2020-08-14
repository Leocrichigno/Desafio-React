import React from 'react';
import oracle from '/React/my-project/src/img/oracle.png';

const boxOracle = () => {
  return (
    <div className="container-course">
      <div className="box-course">
        <img src={oracle} className="img-oracle " />
      </div>
      <p className="title-footer">
        Intruduction to Training Programme on Oracle
      </p>
      <p className="inf-footer">
        Batch No:23
        <br />
        Deadline: 12 Mar 2020
        <br />
        <br />
        Course Fee: Tk. 18000.00
      </p>
      <button className="btn-footer"> Details</button>
    </div>
  );
};

export default boxOracle;
