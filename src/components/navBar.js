import './navStyle.css';
import logo from './logo.svg';

function navBar() {
  return (
    <>
      <nav className='navBar'>
        <ul className='itemContainer'>

          <li className='navItem'>
            <a href='/' className='iconContainer'>
              <img src={logo} alt='Icon' />
            </a>
          </li>

          <li className='navItem'>
            <a href='/'>Home</a>
          </li>

          <li className='navItem'>
            <a href='/'>About</a>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default navBar;