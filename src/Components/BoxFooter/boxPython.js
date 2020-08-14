import React from 'react';
import python from '/React/my-project/src/img/python.png';

const boxPython = () => {
  return (
    <div className="container-course">
      <div className="box-course">
        <img src={python} className="img-python " />
      </div>
      <p className="title-footer">
        Intruduction to Training Programme on Python
      </p>
      <p className="inf-footer">
        Batch No:21
        <br />
        Deadline: 18 Mar 2020
        <br />
        <br />
        Course Fee: Tk. 10000.00
      </p>
      <button className="btn-footer"> Details</button>
    </div>
  );
};

export default boxPython;
