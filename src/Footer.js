function Footer ({count}) {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{count}</strong> left</span>
      <button className="clear-completed">Clear completed
      </button>
    </footer>
  )
}

export default Footer;