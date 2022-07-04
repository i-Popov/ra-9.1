import React from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function LinkItem(props) {
  const { to, text, className } = props;
  return (
    <NavLink className={({ isActive }) => isActive ? 'menu__item menu__item-active' : className} exact="true" to={to}>{ text }</NavLink>
  )
}

LinkItem.propTypes = {
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}