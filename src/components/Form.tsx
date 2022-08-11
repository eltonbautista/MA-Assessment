import React, { FormEvent } from 'react';
import styled from 'styled-components';

// Create a Submission Form where employees can include information in the following fields:
// - Identification information (name, ID, department, employment status, email)
// Accommodation requests
// - File upload (for documentation)
// - Store the Submission Form information in a database
// - Create a lookup form to allow Human Resources to review and filter by the Submission Form fields

const StyledGridWrap = styled.div`
  display: grid;
  padding: 1.25em;
  height: 100%;
  align-items: center;

  @media screen and (min-height: 1000px) and (min-height: 768px) {
    height: 75%;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    max-height: 80%;
  }

> h1, h3 {
  font-weight: 600;
  text-align: center;
}

h3 {
  padding-bottom: 1em;
}

  input, textarea, #submit-button {
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 0.5em 0 0.5em 1em;
    font-size: var(--font-size-sm);
    background-color: var(--bg-color-v1);
  }

  fieldset {
    border: none;
  }

  .employment-status-fieldset {
    display: grid;
  }
  .employment-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .file-wrapper {
    margin-top: 1em;
  }


`;

export default function Form() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      iD: "",
      departmentName: "",
      email: "",
      accommodations: "",
      employment: "",
    }
  );

  function handleChange(event: any) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <div className="main-wrapper">
      <form onSubmit={handleSubmit} method="post" action="/">
        <StyledGridWrap className="grid-wrap">
          <h1>Magnify Access Form</h1>
          <div className="input-wrapper first-name">
            <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
            />
          </div>
          <div className="input-wrapper last-name">
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
            />
          </div>
          <div className="input-wrapper identification">
            <input
              type="text"
              placeholder="ID"
              onChange={handleChange}
              name="iD"
              value={formData.iD}
            />
          </div>
          <div className="input-wrapper department-name">
            <input
              type="text"
              placeholder="Department Name"
              onChange={handleChange}
              name="departmentName"
              value={formData.departmentName}
            />
          </div>
          <div className="input-wrapper email">
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>
          <textarea
            value={formData.accommodations}
            placeholder="Accommodations"
            onChange={(e) => handleChange(e)}
            name="accommodations"
            className='input-wrapper accommodations'
          />
          <div className='employment-status-fieldset'>
            <h3>Current employment status</h3>
            <div className="input-wrapper employment-wrapper ">
              <label htmlFor="unemployed">Unemployed</label>
              <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper employment-wrapper">
              <label htmlFor="part-time">Part-time</label>
              <input
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                checked={formData.employment === "part-time"}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper employment-wrapper">
              <label htmlFor="full-time">Full-time</label>
              <input
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                checked={formData.employment === "full-time"}
                onChange={handleChange}
              />
            </div>
            <div className="file-wrapper">
              <label htmlFor="formFile" className="form-label">Add Image</label>
              <input className="form-control" type="file" id="formFile" name="file" accept="image/*" />
            </div>
          </div>
          <button type='submit' id='submit-button'>Submit</button>
        </StyledGridWrap>
      </form>
    </div>
  );
}
