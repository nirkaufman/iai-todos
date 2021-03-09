import {useState, useEffect, useContext} from 'react';
import ListContext from './providers/list-provider'

function Footer () {
  const {items} = useContext(ListContext);

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{items.length}</strong> left</span>
      <button className="clear-completed">Clear completed
      </button>
    </footer>
  )
}

export default Footer;