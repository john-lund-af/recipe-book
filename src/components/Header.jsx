import PropTypes from 'prop-types';

function Header({title}) {
  return (
    <header className="fixed h-24 w-full bg-skin-fill shadow-2xl">
      <h1 className="pt-6 text-5xl text-center text-skin-inverted font-title">{title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header