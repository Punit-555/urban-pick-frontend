import React from 'react';
import './services.css';
import { FaShippingFast, FaLock, FaHeadset, FaCreditCard } from 'react-icons/fa';

const services = [
  {
    icon: <FaShippingFast size={30} />,
    title: 'Fast Delivery',
    description: 'We ensure quick delivery across all regions with real-time tracking.',
  },
  {
    icon: <FaLock size={30} />,
    title: 'Secure Payments',
    description: 'All transactions are encrypted and protected with top-tier security.',
  },
  {
    icon: <FaHeadset size={30} />,
    title: '24/7 Support',
    description: 'Our team is here to assist you anytime, anywhere.',
  },
  {
    icon: <FaCreditCard size={30} />,
    title: 'Easy Returns',
    description: 'No-hassle returns within 7 days of purchase.',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p className="services-subtext">We’re committed to providing the best experience for our customers.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
