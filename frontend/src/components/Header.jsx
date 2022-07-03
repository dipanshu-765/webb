import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header' style={{'tabIndex': '-1'}}>
      <div className='logo'>
        <Link to='/'>WEBB</Link>
      </div>
      <nav>
        <span style={{'tabIndex': '0'}}>About</span>
        <span style={{'tabIndex': '0'}}>Support</span>
      </nav>
      <div>
          <Link to='/login'>
            <i style={{'position': 'relative', 'top':'0.16em', 'marginRight': '0.5em'}}>
              <FaSignInAlt/> 
            </i>
            Login
          </Link>
      </div>
      <div>
          <Link to='/register'>
            <i style={{'position': 'relative', 'top':'0.16em', 'marginRight': '0.5em'}}>
              <FaUser style={{'position': 'relative'}}/> 
            </i>
            Register
          </Link>
      </div>
    </div>
  )
}

export default Header