import React, { useState } from 'react'
import LinkItem from './LinkItem'

export default function Menu() {
  const [data] = useState({
    links: [
      {
      id: 1,
      to: '/',
      text: 'Главная',
      className: 'menu__item',
      },
    {
      id: 2,
      to: '/drift',
      text: 'Дрифт-такси',
      className: 'menu__item',
    },
    {
      id: 3,
      to: '/timeattack',
      text: 'Time Attack',
      className: 'menu__item',
    },
    {
      id: 4,
      to: '/forza',
      text: 'Forza Karting',
      className: 'menu__item',
    }]
  });

  return (
    <nav className="menu">
      {data.links.map(item => <LinkItem key={item.id} {...item} />)}
    </nav>
  )
}