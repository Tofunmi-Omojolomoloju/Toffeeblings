import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    contact: "",
    note: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We'll contact you shortly.");
    setFormData({
      name: "",
      service: "",
      date: "",
      time: "",
      contact: "",
      note: ""
    });
  };

  return (
    <div className="container" style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        
        <select name="service" required value={formData.service} onChange={handleChange}>
          <option value="">Select a Service</option>
          <option value="Nails">Nails</option>
          <option value="Lashes">Lashes</option>
          <option value="Pedicure">Pedicure</option>
        </select>

        <input type="date" name="date" required value={formData.date} onChange={handleChange} />
        <input type="time" name="time" required value={formData.time} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Phone or Email" required value={formData.contact} onChange={handleChange} />
        <textarea name="note" placeholder="Any additional notes?" value={formData.note} onChange={handleChange}></textarea>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;
