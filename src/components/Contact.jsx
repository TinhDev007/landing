import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import NumberFormat from 'react-number-format';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    description: ''
  });

  const [formDataError, setFormDataError] = useState({
    name: '',
    email: '',
    phone_number: '',
    description: ''
  });

  const [systemMessage, setSystemMessage] = useState('');

  const validateEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	};

  const validateInput = (value, fieldName) => {

    if (fieldName === "phone_number") {
      return true;
    }

    if(!value) {
      setFormDataError((formDataError) => ({...formDataError, [fieldName]: 'This field should not be empty.'}))
      return false;
    } else {
      if(fieldName === "email") {			
				const emailValid = validateEmail(value);				
				if (!emailValid) {
					setFormDataError((formDataError) => ({...formDataError, [fieldName]: 'Invalid e-mail address'}))
					return false;
				} else {
					setFormDataError((formDataError) => ({...formDataError, [fieldName]: ''}));
					return true;
				}
			} else {
				setFormDataError((formDataError) => ({...formDataError, [fieldName]: ''}));
				return true;
			}
    }
  };

  const handleChange = (event, fieldName) => {
    const { value } = event.target;
    validateInput(value, fieldName);
    setFormData((formData) => {
      return {...formData, [fieldName]: value}
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = Object.keys(formData).map((key) => {
      return validateInput(formData[key], key)
    });

    const isInvalid = result.filter((r) => !r).length > 0;

    if (isInvalid) {		
      return
    };

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_USER_ID)
      .then((result) => {
          setSystemMessage('The messages are sent successfully.');
          setFormData({
            name: '',
            email: '',
            phone_number: '',
            description: ''
          });
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact-us" id="technologies">
      <h6 className="section-title">Project <span>Budget</span></h6>
      <div className="section-container">
        <div className="section-container-content"> 
          <div className="text-section">
            <h1>Send us your <span>project</span> for a quote</h1>
            <h3>There are many variations of passages of Lorem Ipsum available, but the majority have</h3>
            <div className="action-groups mobile-hidden">             
              <button className="btn outline-btn no-border small" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
          <div className="form-section">
            <div className="form-item">
              <div className="form-item-inner">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={(e) => handleChange(e, 'name')}/>
              </div>
              {formDataError.name && <p className="error-msg">{formDataError.name}</p>}
            </div>
            <div className="form-item">
              <div className="form-item-inner">
                <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={(e) => handleChange(e, 'email')}/>
              </div>
              {formDataError.email && <p className="error-msg">{formDataError.email}</p>}
            </div>
            <div className="form-item">
              <div className="form-item-inner">                
                <NumberFormat format="+## (###) ###-####" mask="_" placeholder="Phone number" onChange={(e) => handleChange(e, 'phone_number')} value={formData.phone_number} />
              </div>
              {formDataError.phone_number && <p className="error-msg">{formDataError.phone_number}</p>}
            </div>
            <div className="form-item">
              <div className="form-item-inner">
                <textarea name="" id="" cols="30" rows="5" placeholder="Project Description" onChange={(e) => handleChange(e, 'description')} value={formData.description} ></textarea>
              </div>
              {formDataError.description && <p className="error-msg">{formDataError.description}</p>}
            </div>
            <div className="action-groups desktop-hidden">             
              <button className="btn outline-btn no-border small" onClick={handleSubmit}>Submit</button>
            </div>
            {/* {systemMessage && <p className="success">{systemMessage}</p> } */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;