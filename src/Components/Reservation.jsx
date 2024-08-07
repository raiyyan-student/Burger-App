import React from 'react';

function Reservation() {
  return (
    <section id="reservation">
      <div className="reservation-container">
        <h2>Make a Reservation</h2>
        <p>Reserve a table now and enjoy the best burgers in town!</p>
        <form className="reservation-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" required />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" required min="1" />
          </div>
          <button type="submit" className="reserve-button">Reserve Now</button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;