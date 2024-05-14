import React, { useState, useEffect } from 'react';

export const Newspaper = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem('name', newName);
  };

  return (
    <div>
      <h1>News</h1>
      <p>bla bla bla</p>
      {!name && (
        <form>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" id="name" name="name" onChange={handleNameChange} /><br/>
        </form>
      )}
    </div>
  );
};
