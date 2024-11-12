import PropTypes from 'prop-types';

function Header({title}) {
  return (
    <div className="fixed h-24 w-full bg-skin-fill">
      <h1 className="pt-6 text-5xl text-center text-skin-inverted font-title">{title}</h1>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header