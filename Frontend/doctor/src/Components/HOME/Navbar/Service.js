import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
import Authuse from './UserAuth';

const Services = () => {
  const services = [
    {
      title: 'Primary Care',
      description: 'Comprehensive care for individuals of all ages, including routine check-ups, vaccinations, and management of chronic conditions.',
    },
    {
      title: 'Specialist Consultations',
      description: 'Access to a wide range of specialists, including cardiologists, dermatologists, neurologists, and more, for specialized care and treatment.',
    },
    {
      title: 'Dental Services',
      description: 'Preventive, restorative, and cosmetic dental services to keep your smile healthy and beautiful.',
    },
    {
      title: 'Mental Health Counseling',
      description: 'Support and therapy for individuals dealing with stress, anxiety, depression, trauma, and other mental health concerns.',
    },
    {
      title: 'Telemedicine',
      description: 'Virtual consultations with healthcare providers via secure video conferencing, allowing for convenient access to medical care from the comfort of your home.',
    },
    {
      title: 'Radiology',
      description: 'All Kinds of MRI , CT ECG EEG , etc .. We have all the Advanced Level Radiology equipments and best technicians.',
    }
  ];

  const useNAme=Authuse()
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {useNAme.userName?
            <button id='appointment'><Link to='/appointment'>Appointment</Link></button>
            : <button id='appointment'><Link to='/login'>Appointment</Link></button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
