
function Header (props) {  

  function handleKeyEvent(event) {
    if(event.key === 'Enter') {
      props.onAddItem(event.target.value)
    }
  }

  return (
    <header className="header">
    <h1 id="title">{props.title}</h1>
    <input className="new-todo"
           id="todoInput"
           onKeyDown={handleKeyEvent}
           placeholder="What needs to be done?" />      
    </header>
  )
}

export default Header;


