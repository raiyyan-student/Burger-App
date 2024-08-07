import React from 'react';

const restaurants = [
  {
    name: 'Burger Haven',
    image: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2023/10/beacon_restaurants-2.jpg',
  },
  {
    name: 'Grill Master',
    image: 'https://cdn.vox-cdn.com/thumbor/noZfzQSiPhEJf-mba24qCe9TvOU=/0x0:2000x1333/1200x900/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/72095606/BarSprezzatura_PChang_6523.7.jpg',
  },
  {
    name: 'Taste of Heaven',
    image: 'https://offloadmedia.feverup.com/secretdublin.com/wp-content/uploads/2022/02/28053554/274705466_1382678062174912_596125798583630942_n-1024x683.jpg',
  },
  {
    name: 'The Burger Joint',
    image: 'https://www.thedailymeal.com/img/gallery/the-most-beautiful-restaurants-in-the-world/l-intro-1688049904.jpg',
  },
  {
    name: 'Cheese & Beef',
    image: 'https://robbreport.com/wp-content/uploads/2023/12/Bad-Roman-Christian-Harder-1.jpg?w=1000',
  }
];

function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-container">
        <h2>Our Favorite Restaurants</h2>
        <div className="gallery-grid">
          {restaurants.map((restaurant, index) => (
            <div className="gallery-item" key={index}>
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="gallery-info">
                <h3>{restaurant.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;