import React from 'react';
import './Header.css';
import photo from '../../mainbanner.jpg';

const Header = () => {
    return (
        <div>
            <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 header-img">
            <h2 className="banner-head">Team Tracker</h2>
            <img className="img-fluid" src={photo} alt="" />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Header;