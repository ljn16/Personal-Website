import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.scss'
import Nav from './libs/nav.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <h1 id='salutation'>Hello world{/* , I&apos;m <strong id='name'>Logan</strong> */}</h1>
    <div className='logo-banner-wrapper'>
      <div className='logo-banner'>
        <img src='src/assets/logos/html5-logo-transparent.png'></img>
        <img src='src/assets/logos/css3-logo-transparent.png'></img>
        <img src='src/assets/logos/react-logo-transparent.png'></img>
        <img src='src/assets/logos/sass-logo.png'></img>
        <img src='src/assets/logos/typescript-logo.png'></img>
        <img src='src/assets/logos/redux-logo.png'></img>
        <img src='src/assets/logos/express-logo.png'></img>
        <img src='src/assets/logos/nodejs-logo.png'></img>
        <img src='src/assets/logos/mongodb-logo.svg'></img>
        <img src='src/assets/logos/python-logo.png'></img>
      </div>
      <div className='logo-banner'>
        <img src='src/assets/logos/html5-logo-transparent.png'></img>
        <img src='src/assets/logos/css3-logo-transparent.png'></img>
        <img src='src/assets/logos/react-logo-transparent.png'></img>
        <img src='src/assets/logos/sass-logo.png'></img>
        <img src='src/assets/logos/typescript-logo.png'></img>
        <img src='src/assets/logos/redux-logo.png'></img>
        <img src='src/assets/logos/express-logo.png'></img>
        <img src='src/assets/logos/nodejs-logo.png'></img>
        <img src='src/assets/logos/mongodb-logo.svg'></img>
        <img src='src/assets/logos/python-logo.png'></img>
      </div>
    </div>
      {/* <p>hello world</p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
