import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';

function Header({title}) {
  return (
    <header className="px-2 md:px-4 lg:px-6 text-skin-inverted fixed h-24 w-full bg-skin-fill shadow-2xl flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <span>
          <FontAwesomeIcon icon={faBowlFood} size="2x" />
        </span>
        <span className="text-lg text-center font-title">{title}</span>
      </div>
      <nav>
        <ul className="flex flex-row gap-2 text-lg">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'text-red-700 underline' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'text-red-700 underline' : ''}>About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header