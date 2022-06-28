import React, { useState } from 'react'

export const Registration = () => {
    const [details,setDetails] = useState({
                Name : "",
                Email : "",
                Mobile : "",
                Country : "",
                City: "",
                State : "",
                Message : ""
            });

    const handleChange = (e) => {
      const { id, value } = e.target
  
      setDetails({
        ...details,
        [id]: value,
      })
    };

    const handleSubmit = (e) => {
      setDetails({
        Name : "",
        Email : "",
        Mobile : "",
        Country : "",
        City: "",
        State : "",
        Message : ""
      })
      alert("Registered sucessfully");
  
    }
          
  return (
    <div className='container'> 
     <div className='inside'>
       <form onSubmit={handleSubmit}>
        <h1> Registration </h1>
        <label className="form-label">Name</label>
        <input type="text"
          id="Name"
          onChange={handleChange}
          placeholder="Enter your name"
          required />
        <br />

        <label className="form-label">Email</label>
        <input type="email"
          id="Email"
          onChange={handleChange}
          placeholder="Enter your email"
          required />
        <br />

        <label className="form-label">Mobile</label>
        <input type="tel"
          id="Mobile"
          onChange={handleChange}
          placeholder="Enter your mobile"
          required />
        <br />

        <label className="form-label">Country</label>
        <input type="text"
          id="Country"
          onChange={handleChange}
          placeholder="Enter your country"
          required />
        <br />

        <label className="form-label">City</label>
        <input type="text"
          id="City"
          onChange={handleChange}
          placeholder="Enter your city"
          required />
        <br />
        
        <label className="form-label">State</label>
        <input type="text"
          id="State"
          onChange={handleChange}
          placeholder="Enter your state"
          required />
        <br />

        <label className="form-label">Message</label>
        <input type="text"
          id="Message"
          onChange={handleChange}
          placeholder="Enter your message"
          required />
        <br />

        <input className="submitButton" type="submit"/>
      </form>
      </div>

    </div>
  )
}

