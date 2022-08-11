import React, { ChangeEventHandler, FormEvent } from 'react';

// Create a Submission Form where employees can include information in the following fields:
// - Identification information (name, ID, department, employment status, email)
// Accommodation requests
// - File upload (for documentation)
// - Store the Submission Form information in a database
// - Create a lookup form to allow Human Resources to review and filter by the Submission Form fields

export default function Form() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      ID: "",
      department: "",
      employmentStatus: "",
      email: "",
      accommodations: "",
      isFriendly: true,
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
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid-wrap">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="ID"
            onChange={handleChange}
            name="iD"
            value={formData.ID}
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Department Name"
            onChange={handleChange}
            name="department"
            value={formData.department}
          />
        </div>
        <div className="input-wrapper">
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
        />
        <fieldset>
          <legend>Current employment status</legend>
          <div className="input-wrapper">
            <input
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={formData.employment === "unemployed"}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="unemployed">Unemployed</label>
          <div className="input-wrapper">
            <input
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="part-time">Part-time</label>
          <div className="input-wrapper">
            <input
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              checked={formData.employment === "full-time"}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="full-time">Full-time</label>
        </fieldset>
        <button>Submit</button>
      </div>
    </form>
  );
}
