import {useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
 
function Header (props) {  
  const dispatch = useDispatch();
  const inputRef = useRef(); 
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleKeyEvent(event) {
    if(event.key === 'Enter') {
      dispatch({type:'ADD_ITEM', payload:inputRef.current.value})
      inputRef.current.value = '';      
    }
  }

  return (
    <header className="header">
    <h1 id="title">{'todos'}</h1>
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


