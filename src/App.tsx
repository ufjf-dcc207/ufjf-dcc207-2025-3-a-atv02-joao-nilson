import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Disciplina from './disciplina';

function App() {
  return (
    <>
      <h1>hello world</h1>
      <h2>oii react!</h2>
      <Disciplina codigo="DCC207" nome="Desenvolvimento web frontend" />
      <Disciplina codigo="DCC206" nome="Desenvolvimento web II" />
      <Disciplina codigo="DCC202" nome="Desenvolvimento web I" />
    </>
  );
}

export default App
