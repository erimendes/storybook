// import 'react-app-polyfill/ie11'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from '../alurabook-ds-01/src/stories/Button' // ou 'storebook-ds'

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Meu playground</h1>
      <Button label="Clique aqui" onClick={() => alert('Botão clicado!')} />
    </div>
  );
}

export default App;