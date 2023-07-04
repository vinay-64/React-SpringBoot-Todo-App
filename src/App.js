import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Project Starter</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Yes Magic Happened</p>
      <FirstComponent></FirstComponent>
    </div>
  );
}

function FirstComponent() {
  return <p>My First Component.</p>;
}
