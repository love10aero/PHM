import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al servidor
    console.log('Solicitud GET realizada'); // Agrega este mensaje de registro
    axios.get('http://localhost:3000/api/pacientes')
      .then((response) => {
        console.log('Datos recibidos:', response.data); // Agrega este mensaje de registro
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Pacientes</h1>
      <ul>
        {data.map((paciente) => (
          <li key={paciente.id}>
            <strong>Nombre:</strong> {paciente.username}<br />
            <strong>Edad:</strong> {paciente.age}<br />
            <strong>contra:</strong> {paciente.password}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
