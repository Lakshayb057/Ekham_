import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizationType: '',
    organization: '',
    time: '11:00 AM IST'
  });

  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('demo-open');
      if (dialogRef.current) dialogRef.current.focus();
    } else {
      document.body.classList.remove('demo-open');
    }
    return () => {
      document.body.classList.remove('demo-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('EKhum demo request — ' + (formData.organization || formData.name));
    const body = encodeURIComponent(
      `Name: ${formData.name}\nWork email: ${formData.email}\nPhone: ${formData.phone}\nOrganization type: ${formData.organizationType}\nOrganization: ${formData.organization}\nPreferred time: ${formData.time}`
    );
    window.location.href = `mailto:contact@ekhum.org?subject=${subject}&body=${body}`;
  };

  const modalContent = (
    <div
      id="demo-overlay"
      className="demo-overlay"
      onClick={(e) => {
        if (e.target.id === 'demo-overlay') onClose();
      }}
    >
      <div
        className="demo-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-heading"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          type="button"
          className="demo-close"
          aria-label="Close demo form"
          onClick={onClose}
          style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}
        >
          &times;
        </button>
        <div className="demo-eyebrow">15-MINUTE PLATFORM WALKTHROUGH</div>
        <h2 id="demo-heading">Book a Live Demo of EKhum</h2>
        <p className="demo-intro">
          Discover how unified infrastructure frees your team from manual compliance and drives 3× repeat donors.
        </p>
        <form id="demo-form" onSubmit={handleSubmit}>
          <div className="demo-field demo-full">
            <label htmlFor="demo-name">Your Full Name</label>
            <input
              id="demo-name"
              name="name"
              autoComplete="name"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="demo-field">
            <label htmlFor="demo-email">Work Email</label>
            <input
              id="demo-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Work Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="demo-field">
            <label htmlFor="demo-phone">Phone / WhatsApp</label>
            <input
              id="demo-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone / WhatsApp"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="demo-field">
            <label htmlFor="demo-type">Organization Type</label>
            <select
              id="demo-type"
              name="organizationType"
              required
              value={formData.organizationType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Organization Type
              </option>
              <option value="Registered NGO (12A / 80G)">Registered NGO (12A / 80G)</option>
              <option value="Nonprofit / Foundation">Nonprofit / Foundation</option>
              <option value="CSR / Corporate">CSR / Corporate</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="demo-field">
            <label htmlFor="demo-org">Organization Name</label>
            <input
              id="demo-org"
              name="organization"
              autoComplete="organization"
              placeholder="Organization Name"
              required
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <fieldset className="demo-times demo-full">
            <legend>Preferred Time Slot</legend>
            <div className="demo-time-options">
              <label>
                <input
                  type="radio"
                  name="time"
                  value="11:00 AM IST"
                  checked={formData.time === '11:00 AM IST'}
                  onChange={handleChange}
                />
                <span>11:00 AM IST</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="time"
                  value="3:30 PM IST"
                  checked={formData.time === '3:30 PM IST'}
                  onChange={handleChange}
                />
                <span>3:30 PM IST</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="time"
                  value="5:00 PM IST"
                  checked={formData.time === '5:00 PM IST'}
                  onChange={handleChange}
                />
                <span>5:00 PM IST</span>
              </label>
            </div>
          </fieldset>
          <button type="submit" className="demo-submit" style={{ cursor: 'pointer' }}>
            Confirm Walkthrough <span aria-hidden="true">→</span>
          </button>
        </form>
        <div className="demo-privacy">
          <span aria-hidden="true">♢</span> 100% Confidential. No spam. Instant calendar link.
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
}
