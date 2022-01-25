import React, { useState } from 'react';


export default function App() {
  const [name, setname] = useState('');
  const [dob, setdob] = useState('');
  const [mail, setmail] = useState('');
  const [mob, setmob] = useState('');
  const [street, setstreet] = useState('');
  const [line2, setline2] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [zipcode, setzipcode] = useState('');
  const [country, setcountry] = useState('');
  const [radio, setradio] = useState('');
  const [check, setcheck] = useState([]);
  let buttonClicked = () => {
    let newLine = '\r\n';
    alert(
      ` Name : ${name}${newLine} D.O.B : ${dob}${newLine} Email : ${mail}${newLine} Mobile : ${mob}${newLine} Address : ${street}, ${line2}, ${city}, ${state}, ${zipcode} - ${country}${newLine} What would you use the library for : ${radio}${newLine} Which sections of the library would you like access to : ${check}`
    );
  };

  return (
    <div>
      <form onSubmit={buttonClicked}>
        <h1> Library Membership Registration</h1>
        <label>Name : </label>
        <input
          placeholder=""
          type="text"
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <br />
        <label>D.O.B : </label>
        <input type="date" onChange={(e) => setdob(e.target.value)} />
        <br />
        <br />
        <label>Email : </label>
        <input type="text" onChange={(e) => setmail(e.target.value)} /> <br />
        <br />
        <label>Mobile : </label>
        <input type="Number" onChange={(e) => setmob(e.target.value)} />
        <br />
        <br />
        <label>Address : </label>
        <br />
        <input
          type="text"
          placeholder="Street Address"
          onChange={(e) => setstreet(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Address Line 2"
          onChange={(e) => setline2(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setcity(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="State/Region"
          onChange={(e) => setstate(e.target.value)}
        />
        <br />
        <input
          type="Number"
          placeholder="Postal / Zip Code"
          onChange={(e) => setzipcode(e.target.value)}
        />
        <br />
        <label>Country : </label>
        <select value={country} onChange={(e) => setcountry(e.target.value)}>
          <option value="">--select--</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="China">China</option>
        </select>
        <br />
        <br />
        <label>What would you use the library for? </label>
        <br />
        <input
          type="radio"
          name="radio"
          value="Reference"
          onChange={(e) => setradio(e.target.value)}
        />
        <label>Reference </label>
        <br />
        <input
          type="radio"
          name="radio"
          value="In-house reading"
          onChange={(e) => setradio(e.target.value)}
        />
        <label>In-house reading </label>
        <br />
        <input
          type="radio"
          name="radio"
          value="Borrowing"
          onChange={(e) => setradio(e.target.value)}
        />
        <label>Borrowing </label>
        <br />
        <br />
        <label>
          Which sections of the library would you like access to?{' '}
        </label>{' '}
        <br />
        <input
          type="checkbox"
          name="check"
          value=" Magazines"
          onChange={(e) => {
            setcheck((arr) => [...arr, e.target.value]);
          }}
        />
        <label>Magazines </label> <br />
        <input
          type="checkbox"
          name="check"
          value=" Fiction"
          onChange={(e) => {
            setcheck((arr) => [...arr, e.target.value]);
          }}
        />
        <label>Fiction </label> <br />
        <input
          type="checkbox"
          name="check"
          value=" Non-Fiction"
          onChange={(e) => {
            setcheck((arr) => [...arr, e.target.value]);
          }}
        />
        <label>Non-Fiction </label> <br />
        <input
          type="checkbox"
          name="check"
          value=" Electronic"
          onChange={(e) => {
            setcheck((arr) => [...arr, e.target.value]);
          }}
        />
        <label>Electronic </label> <br />
        <input
          type="checkbox"
          name="check"
          value=" Research & Reference"
          onChange={(e) => {
            setcheck((arr) => [...arr, e.target.value]);
          }}
        />
        <label>Research & Reference </label> <br />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
