import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SendEmail = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: '',
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setEmailData({ ...emailData});

      const response = await fetch('https://localhost:7051/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      }).then(navigate('/'));

      if (response.ok) {
        console.log('Email has been sent successfully.');
      } else {
        console.error("Email couldn't be sent.");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e, fieldName) => {
    setEmailData({ ...emailData, [fieldName]: e.target.value });
  };

  return (
    
    <form onSubmit={handleFormSubmit} className='p-5 text-center'>
      <h1>New Email</h1>
      <div className='row'>
        <div className='col'>
        </div>
      <div className='form-group row col-6 text-center'>
        <input
            type="text"
            className="form-control mt-2"
            placeholder="To"
            value={emailData.to}
            onChange={(e) => handleChange(e, 'to')}
            required
          />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Subject"
          value={emailData.subject}
          onChange={(e) => handleChange(e, 'subject')}
          required
        />
        <textarea
          className="form-control mt-2"
          placeholder={"Content"}
          value={emailData.body}
          onChange={(e) => handleChange(e, 'body')}
          rows={8}
          required
        />
            
        <button type="submit" className="btn btn-outline-primary d-inline mb-2"><i class="bi bi-check2"></i> Send</button>
        <button className="btn btn-outline-secondary d-inline mb-2" onClick={() => navigate('/')}><i class="bi bi-arrow-left"></i> Back</button>
      </div>
      <div className='col'>
      </div>
      </div>
    </form>
  );
};

export default SendEmail;