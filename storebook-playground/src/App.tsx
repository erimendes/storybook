import React from 'react';
// import { Button } from 'alurabook-ds-01'; // 🔗 sua biblioteca local
import { Button } from '/home/francisco/alurabooks-ds/alurabook-ds-01/src/stories/Button'; // 🔗 sua biblioteca local

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Playground - Storebook DS</h1>
      <Button label="Clique aqui" onClick={() => alert('Botão clicado!')} />
    </div>
  );
}

export default App;
