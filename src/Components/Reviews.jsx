import React from 'react';

function Reviews() {
  return (
    <section id="reviews">
      <div className="reviews-container">
        <h2>Customer Reviews</h2>
        <p>See what our customers are saying about us!</p>
        <div className="reviews-grid">
          <div className="review-card">
            <p>"The best burgers in town! Fresh ingredients and amazing taste."</p>
            <div className="review-author">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSnsLxqY2BlICB2ZJCTvWbLyxLMmGn1qOtg&s" alt="Reviewer 1" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="review-card">
            <p>"Fantastic service and a cozy atmosphere. Highly recommend!"</p>
            <div className="review-author">
              <img src="https://media.istockphoto.com/id/1159801465/photo/portrait-of-handsome-boy-posing-in-photo-studio.jpg?s=612x612&w=0&k=20&c=JL9do2qrawpp6U81nJcW-u6KHJsjTZRSTy-RwDoGGlw=" alt="Reviewer 2" />
              <span>Jane Smith</span>
            </div>
          </div>
          <div className="review-card">
            <p>"A must-visit for burger lovers. The vegan options are great too!"</p>
            <div className="review-author">
              <img src="https://i.pinimg.com/236x/2c/eb/3f/2ceb3f537efe1b84807dd02af019c066.jpg" alt="Reviewer 3" />
              <span>Alex Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;