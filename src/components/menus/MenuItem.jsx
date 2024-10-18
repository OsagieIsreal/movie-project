import PropTypes from 'prop-types'

function MenuItem({menu}) {
  return <li>{menu}</li>
}

MenuItem.propTypes = {
  menu: PropTypes.string,
 
}



export default MenuItem
