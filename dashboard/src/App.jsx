import { useState } from 'react'

import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [login, setLogin] = useState(false)
  const [error, setError] = useState("")

  if (error) console.log(error)
  return (
    <div className='App mb-2'>
      {!login && <LoginForm setLogin={setLogin} setError={setError} />}

      {login &&
        <main>
          <header className="App-header">
            <div>
              <h2>Responsive Search Bar</h2>
              <p>Resize the browser window to see the responsive effect.</p>
            </div>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
          </header>
          &&
          <footer className='App-footer'>
            <p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              {' | '}
              <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </a>
            </p>
          </footer>
        </main>}
      <NavBar />
    </div>
  )
}

export default App
