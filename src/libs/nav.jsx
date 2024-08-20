import '../styles/nav.scss'


function Nav() {
  return (
    <>
      <nav>
        <div className='nav-content'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='https://github.com/ljn16' target='_blank'>
            <img src='src/assets/logos/github-logo.png'></img>
          </a>
          <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank'>
            <img src='src/assets/logos/linkedin-logo.png'></img>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Nav;