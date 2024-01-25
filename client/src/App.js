import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Realiza una solicitud GET al servidor
    axios.get('/api/data') // Cambia la ruta a '/api/data'
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <p>Datos desde el servidor: {data}</p>
    </div>
  );
}

export default App;
