import {useRef, useEffect} from 'react';

function Header (props) {  
  const inputRef = useRef(); 

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleKeyEvent(event) {
    if(event.key === 'Enter') {
      props.onAddItem(inputRef.current.value);
      inputRef.current.value = '';      
    }
  }

  return (
    <header className="header">
    <h1 id="title">{props.title}</h1>
    <input className="new-todo"
           ref={inputRef}
           id="todoInput"
           disabled={props.limitReached}
           onKeyDown={handleKeyEvent}
           placeholder="What needs to be done?" />      
    </header>
  )
}

export default Header;


