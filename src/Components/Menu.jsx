import React from 'react';

function Menu() {
  return (
    <section id="menu">
    <h1 className='menu'>Our Menu</h1>
      <div className="menu-container">
        <div className="menu-item">
          <img src={'https://www.eatingwell.com/thmb/UY5N-tQKYgA91XJBwiolc_1nbJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3757723-7c4020ccc47240138323b9bc5b730e8d.jpg'} alt="Classic Burger" />
          <div className="menu-item-info">
            <h3>Classic Burger</h3>
            <p>Delicious beef patty with fresh lettuce, tomato, and cheese, served on a freshly baked bun.</p>
          </div>
        </div>
        <div className="menu-item">
          <img src={'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg'} alt="Cheese Burger" />
          <div className="menu-item-info">
            <h3>Cheese Burger</h3>
            <p>Juicy beef patty with double cheese, pickles, and special sauce, served on a toasted bun.</p>
          </div>
        </div>
        <div className="menu-item">
          <img src={'https://images.ctfassets.net/qu53tdnhexvd/VkS6PdhsxZDX3fbtebFhG/beda70c3f440d8e7f0f069ee0ecfe229/Vegan-burger-1200-x-600.jpg'} alt="Vegan Burger" />
          <div className="menu-item-info">
            <h3>Vegan Burger</h3>
            <p>Grilled plant-based patty with avocado, lettuce, tomato, and vegan cheese, served on a whole grain bun.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
