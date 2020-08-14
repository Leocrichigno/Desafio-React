import React, { useState } from 'react';
import medal from '../img/medal.png';

const HeaderPag = () => {
  const [openMenu, setOpenmenu] = useState(false);

  const handleOpen = () => {
    setOpenmenu(!openMenu);
    console.log(openMenu);
  };
  document.body.style.overflow = openMenu ? 'hidden' : 'initial';

  return (
    <div className={openMenu !== true ? 'menu-section' : 'menu-section on'}>
      <div className="menu-toggle" onClick={handleOpen}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <nav className="header">
        <div className="logo">MAQs</div>
        <div className="div-menu">
          <ul className="list">
            <li className="itens">HOME</li>
            <li className="itens">ABOUT US</li>
            <li className="itens">COURSES</li>
            <li className="itens">ADMISSION</li>
            <li className="itens">FEEDBACK</li>
            <li className="itens">GALLERY</li>
            <li className="itens">CONTACT US</li>
          </ul>
        </div>
        <div className="certif_btn">
          <div className="certificado">
            <img src={medal}></img> Verify Certificate
          </div>
          <button className="btn-header">Log In</button>
        </div>
      </nav>
    </div>
  );
};
export default HeaderPag;
