import axios from 'axios'
import React, { useState } from 'react'

const AdminPage = () => {
 
  const [location, setLocation] = useState('');
  const [Hospitals,setHospitals]=useState('')
  const [doctorName, setDoctorName] = useState('');
  const [qualification, setQualification] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [timing, setTiming] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location && doctorName && qualification && specialist && timing) {
      const List= {
        location,
        Hospitals,
        doctorName,
        qualification,
        specialist,
        timing
      }
      axios.post('http://localhost:3001/appoinment/post',List)
        .then((res) => {
          console.log(res.data)
          alert("Form submitted successfully")
        })
        .catch((err) => {
          console.error('Error:', err);
          alert("Failed to submit form")
        })
    } else {
      alert("Please fill all the fields")
    }
  }
  return (
    <div className="admin-page-container">
      <h1 className='Admin-heading'>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Location:</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            <option value="Saravanampatti">Saravanampatti</option>
            <option value="Gandhipuram">Gandhipuram</option>
            <option value="Kalapatti">Kalapatti</option>
            <option value="Thudiyalur">Thudiyalur</option>
            <option value="Ganapathi">Ganapathi</option>
          </select>
        </div>
        <div className="form-group">
          <label>Hospitals:</label>
          <select value={Hospitals} onChange={(e) => setHospitals(e.target.value)}>
            <option value="">Select Hospitals</option>
            <option value="KMCH">KMCH</option>
            <option value="PSG">PSG</option>
            <option value="KG">KG</option>
            <option value="GRD">GRD</option>
            <option value="GANGA">GANGA</option>
          </select>
        </div>
        <div className="form-group">
          <label>Doctor Name:</label>
          <input type='text' value={doctorName} onChange={(e) => setDoctorName(e.target.value)} className='doctorName'/>
        </div>
        <div className="form-group">
          <label>Qualification:</label>
          <select value={qualification} onChange={(e) => setQualification(e.target.value)}>
            <option value="">Select Qualification</option>
            <option value="Doctor of medicine">Doctor of medicine</option>
            <option value="Bachelor of science in nursing">Bachelor of science in nursing</option>
            <option value="Doctor of Philosophy">Doctor of Philosophy</option>
            <option value="Doctor of dental medicine">Doctor of dental medicine</option>
            <option value="Gynecologist">Gynecologist</option>
          </select>
        </div>
        <div className="form-group">
          <label>Specialist:</label>
          <select value={specialist} onChange={(e) => setSpecialist(e.target.value)}>
          <option value="1">CARDIO THORACIC SURGERY</option>
                 <option value="CARDIOLOGY">CARDIOLOGY</option>
                 <option value="COSMETIC SURGEON">COSMETIC SURGEON</option>
                 <option value="4">DENTAL</option>
                 <option value="DENTAL">DERMATOLOGY</option>
                 <option value="DIABETOLOGY">DIABETOLOGY</option>
                 <option value="ENDOCRINOLOGY & DIABETOLOGY">ENDOCRINOLOGY & DIABETOLOGY</option>
                 <option value="ENT">ENT</option>
                 <option value="FERTILITY CENTER">FERTILITY CENTER</option>
                 <option value="GASTRO ENTEROLOGY">GASTRO ENTEROLOGY</option>
                 <option value="GENERAL MEDICINE">GENERAL MEDICINE</option>
                 <option value="GENERAL SURGERY">GENERAL SURGERY</option>
                 <option value="HAEMATOLOGY">HAEMATOLOGY</option>
                 <option value="LIVER UNIT">LIVER UNIT</option>
                 <option value="MASTER HEALTH CHECKUP">MASTER HEALTH CHECKUP</option>
                 <option value="NEONATOLOGY">NEONATOLOGY</option>
                 <option value="NEPHROLOGY">NEPHROLOGY</option>
                 <option value="NEURO SURGERY">NEURO SURGERY</option>
                 <option value="NEUROLOGY">NEUROLOGY</option>
          </select>
        </div>
        <div className="form-group">
          <label>Timing from:</label>
          <select value={timing} onChange={(e) => setTiming(e.target.value)}>
            <option value="">Select Timing</option>
            <option value="6 AM - 8 AM">6 AM - 8 AM</option>
            <option value="8 AM - 10 AM">8 AM - 10 AM</option>
            <option value="10 AM - 12 AM">10 AM - 12 AM</option>
            <option value="2 PM - 4 PM">2 PM - 4 PM</option>
            <option value="4 PM - 6 PM">4 PM - 6 PM</option>
          </select>
        </div>
        <div id='form-button'>
        <button type='submit' className="submit-button">Submit</button>
        <button type='reset'  className="submit-button">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
