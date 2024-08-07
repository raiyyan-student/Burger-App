import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Burger Hut</h2>
          <p>Enjoy the best burgers in town with fresh, locally-sourced ingredients and a cozy atmosphere. Come and taste the difference!</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png'} alt="Facebook" />
            <img src={'https://cdn-icons-png.flaticon.com/256/124/124021.png'} alt="Twitter" />
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png'} alt="Instagram" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Burger Hut. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;