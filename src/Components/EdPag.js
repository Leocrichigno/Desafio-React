import React from 'react';
import rosto from '../img/foto.png';
import bola from '../img/bola-branca.png';

const EdPag = () => {
  return (
    <div className="Ed-msg">
      <div className="left-ed">
        <div className="fundo-ed"></div>
        <div className="img-ed">
          <img src={rosto} />
        </div>
        <img src={bola} className="bola-img" />
      </div>
      <div className="right-ed">
        <h1 className="title-ed">Message from Executive Director(MAQs)</h1>
        <h4 className="subtitle-ed">
          Hi, I am fortunate to have a very strong team of high skilled
          professionals who support me to carry forward the mission of MAQs.
        </h4>
        <p className="content-ed">
          We have gone through a serious transformation recently to run our
          business treating everyone coming to us a customer. This means we try
          to ensure "customer service" in whatever we do and are always keen to
          seen a happy smile in all our customer's face...
        </p>
        <a href="" className="link-ed">
          Read More
        </a>
      </div>
    </div>
  );
};

export default EdPag;
