import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, setFilter }) =>
  (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      style={{ cursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link
