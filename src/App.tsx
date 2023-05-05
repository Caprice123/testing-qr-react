import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QrReader } from 'react-qr-reader';

function App() {
  const [data, setData] = useState("")

  return (
    <div className="App">
        <QrReader
            constraints={{ facingMode: 'environment' }}
            onResult={(result, error) => {
            if (result) {
                setData(result.getText())
                console.log(result)
            }

            if (!error) {
                console.info(error);
            }
        }}
        />

        <p>Data:</p>
        <p>{data}</p>
    </div>
  );
}

export default App;
