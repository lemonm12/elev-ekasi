import React, { useState } from 'react';
import './Programs.css';

const Programs = () => {
  const [formData, setFormData] = useState({});
  const [showLinks, setShowLinks] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Do you give permission to use your data for tailored recommendations?");
    if (confirmed) {
      setShowLinks(true); // Show funding links
    } else {
      alert("Submission canceled.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Example funding links based on the industry; add more links as needed
  const fundingLinks = {
    tech: [
      { name: "Tech Funding Program A", url: "https://techfundingA.com" },
      { name: "Innovation Grants for Tech", url: "https://innovationgrants.com" },
    ],
    agriculture: [
      { name: "AgriStart Funding", url: "https://agristartfunding.com" },
      { name: "Green Growth Grants", url: "https://greengrowthgrants.com" },
    ],
    education: [
      { name: "Education Grants Fund", url: "https://educationgrantsfund.com" },
      { name: "EduSupport Program", url: "https://edusupportprogram.com" },
    ],
  };

  const getFundingLinks = () => {
    const industry = formData.industry?.toLowerCase();
    return fundingLinks[industry] || [];
  };

  return (
    <div className='programs'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required onChange={handleChange} />
        </label>
        
        <label>
          Age:
          <input type="number" name="age" min="18" max="99" required onChange={handleChange} />
        </label>
        
        <label>
          Race:
          <select name="race" required onChange={handleChange}>
            <option value="" disabled selected>Select your race</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="coloured">Coloured</option>
            <option value="indian">Indian</option>
            <option value="asian">Asian</option>
          </select>
        </label>
        
        <label>
          Province:
          <select name="province" required onChange={handleChange}>
            <option value="" disabled selected>Select your province</option>
            <option value="gauteng">Gauteng</option>
            <option value="western-cape">Western Cape</option>
            <option value="kwazulu-natal">KwaZulu-Natal</option>
            <option value="limpopo">Limpopo</option>
            <option value="northern-cape">Northern Cape</option>
          </select>
        </label>
        
        <label>
          Industry:
          <input type="text" name="industry" required onChange={handleChange} />
        </label>

        <label>
          <input type="checkbox" name="needFunding" onChange={handleChange} />
          Need funding
        </label>
        
        <label>
          Financial background:
          <input type="text" name="financialBackground" onChange={handleChange} />
        </label>
        
        <button type="submit">Submit</button>
      </form>

      {showLinks && (
        <div className="funding-links">
          <h2>Funding Links for {formData.industry}</h2>
          <ul>
            {getFundingLinks().map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Programs;
