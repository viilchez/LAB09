import React from 'react';

const Aside = () => {
  return (
    <aside>
      <div style={{ width: '400px', padding: '20px', backgroundColor: 'white', color: '#000000' }}> 
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ color: '#000000' }}>Name:</label>
            <input type="text" id="name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #1877F2' }} /> 
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ color: '#000000' }}>Email:</label> 
            <input type="email" id="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #1877F2' }} /> 
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ color: '#000000' }}>Password:</label> 
            <input type="password" id="password" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #1877F2' }} /> 
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#00B2FF', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button> 
        </form>
      </div>
    </aside>
  );
};

export default Aside;
