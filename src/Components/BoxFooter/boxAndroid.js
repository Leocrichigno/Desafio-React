import React from 'react';
import android from '/React/my-project/src/img/android.png';

const boxAndroid = (props) => {
  return (
    <div className="container-course">
      <div className="box-course course-android">
        <img src={android} className="img-android " />
      </div>
      <p className="title-footer">
        Professional Android Application Development
      </p>
      <p className="inf-footer">
        Batch No:01
        <br />
        Deadline: 22 Mar 2020
        <br />
        <br />
        Course Fee: Tk. 18000.00
      </p>
      <button className="btn-footer"> Details</button>
    </div>
  );
};

export default boxAndroid;
