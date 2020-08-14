import React from 'react';
import Image from '../img/fundo-container.png';
import Bola1 from '../img/bola-amarela.png';
import Bola2 from '../img/bola-azul.png';
const ContainerPag = () => {
  return (
    <div className="container">
      <div className="left-container">
        <div className="title-course">Website Design Free Course</div>
        <div className="subtitle-course">
          One of the activities of Blangladesh Computer Council (BCC) is to
          develop trained manpower in the field of ICT through ICT training.
        </div>
        <button className="btn-course">
          <p className="text-btn">Enroll Now</p>
        </button>
      </div>
      <div className="right-container">
        <div className="local-01">
          <img src={Bola1} className="bola01"></img>
        </div>
        <div className="espaço-img">
          <img src={Image} class="img-container"></img>
        </div>
        <div className="local-03">
          <img src={Bola2} className="bola02"></img>
        </div>
      </div>
    </div>
  );
};

export default ContainerPag;
