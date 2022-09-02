import React, { useState } from 'react';
import './App.css';

function Inputs({ formValues, onChange, onClick }) {

  return(
    <div className='inputs'>
      <label>First Name: </label>
      <input
        type="text"
        name="first_name"
        value={formValues.first_name}
        onChange={onChange}
      >
      </input>
      <label>Last Name: </label>
      <input
        type="text"
        name="last_name"
        value={formValues.last_name}
        onChange={onChange}
      >
      </input>
      <label>Phone: </label>
      <input
        type="text"
        name="phone"
        value={formValues.phone}
        onChange={onChange}
      >
      </input>
      <button onClick={onClick}>Add User</button>
    </div>
  )
}

function Table({ listValues }) {
  return (
    <table>
      <thead className='form'>
        <tr>
          <th className='headings'>First Name</th>
          <th className='headings'>Last Name</th>
          <th className='headings'>Phone</th>
        </tr>
      </thead>
      <tbody>
        {listValues && listValues.map((listValue) => {
          return(
          <tr>
            <td>{listValue.first_name}</td>
            <td>{listValue.last_name}</td>
            <td>{listValue.phone}</td>
          </tr>);
        })}
      </tbody>
    </table>
  );
}

function App() {
  const initialFormValues = {
    first_name: "Coder",
    last_name: "Byte",
    phone: "8885559999"
  }

  const [formValues, setFormValues] = useState(initialFormValues);
  const [listValues, setListValues] = useState([]);

  const onChange = (e) => {
    console.log(e)
    setFormValues(value => ({...value, [e.target.name]: e.target.value}));
  }

  const onClick = () => {
    const newLine = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      phone: formValues.phone,
    };
    const newList = [
      ...listValues,
      newLine
    ];
    const orderedList = newList.sort(
            (function(a,b) {
                let aLastName = a.last_name.toLowerCase();
                let bLastName = b.last_name.toLowerCase();
                if(aLastName > bLastName){
                    return 1;
                } else if(aLastName < bLastName){
                    return -1;
                } else {
                    return 0;
                }
            })
        )
    setListValues(orderedList);
  }

  return (
    <div>
      <Inputs formValues={formValues} onChange={onChange} onClick={onClick}/>
      <Table listValues={listValues}/>
    </div>
  );
}

export default App;
