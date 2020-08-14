import React from 'react';
import cisco from '/React/my-project/src/img/cisco.png';

const boxCisco = () => {
  return (
    <div className="container-course">
      <div className="box-course">
        <img src={cisco} className="img-cisco " />
      </div>
      <p className="title-footer">Server and Internet Security Administrator</p>
      <p className="inf-footer">
        Batch No:06
        <br />
        Deadline: 23 Mar 2020
        <br />
        <br />
        Course Fee: Tk. 18000.00
      </p>
      <button className="btn-footer"> Details</button>
    </div>
  );
};

export default boxCisco;
