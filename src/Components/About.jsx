/*import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to Burger Hut! Since 1999, we have been dedicated to crafting the best burgers in town. Our passion for quality ingredients and exceptional flavors drives us to provide you with an unforgettable dining experience.
          </p>
          <p>
            At Burger Hut, we believe in using only the freshest, locally-sourced ingredients. Our beef patties are made from 100% organic, grass-fed beef, and our buns are baked fresh daily. We also offer a variety of vegetarian and vegan options to cater to all dietary preferences.
          </p>
          <p>
            Our chefs are culinary experts who put their heart and soul into every burger they create. From classic cheeseburgers to gourmet creations, our menu has something for everyone. We pride ourselves on our friendly service and welcoming atmosphere.
          </p>
          <p>
            Join us at Burger Hut for a delicious meal and see why we are the favorite spot for burger lovers in the community. Whether you're here for a quick bite or a leisurely meal, we're committed to making your visit special.
          </p>
        </div>
        <div className="about-images">
          <img src="path_to_your_image1.jpg" alt="Burger 1" />
          <img src="path_to_your_image2.jpg" alt="Burger 2" />
          <img src="path_to_your_image3.jpg" alt="Burger 3" />
        </div>
      </div>
    </section>
  );
}

export default About;*/


import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className='about-heading'>About Burger Hut</h2>
          <p>
            Welcome to Burger Hut! Since 1999, we have been dedicated to crafting the best burgers in town. Our passion for quality ingredients and exceptional flavors drives us to provide you with an unforgettable dining experience.
          </p>
          <p>
            At Burger Hut, we believe in using only the freshest, locally-sourced ingredients. Our beef patties are made from 100% organic, grass-fed beef, and our buns are baked fresh daily.
          </p>
          <p>
            Join us at Burger Hut for a delicious meal and see why we are the favorite spot for burger lovers in the community. Whether you're here for a quick bite or a leisurely meal, we're committed to making your visit special.
          </p>
        </div>
        <div className="about-image">
          <img src={'https://images.unsplash.com/photo-1571091718767-18b5b1457add?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZlZyUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D'} alt="Delicious Burger" />
        </div>
      </div>
    </section>
  );
}

export default About;