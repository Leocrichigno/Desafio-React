import React from 'react';
import Oracle from './BoxFooter/boxOracle';
import Python from './BoxFooter/boxPython';
import Android from './BoxFooter/boxAndroid';
import Cisco from './BoxFooter/boxCisco';

const FooterPag = () => {
  return (
    <div className="footer">
      <h1 className="up-training">Upcoming Training</h1>
      <div className="courses-footer">
        <Oracle />
        <Python />
        <Android />
        <Cisco />
      </div>
    </div>
  );
};

export default FooterPag;
