import {useState, useEffect, useContext} from 'react';
import ListContext from './providers/list-provider'

function List () {
  const {items} = useContext(ListContext);

  // const [todos, setTodos] = useState([]);
  
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then( (response) => response.json() )
  //     .then( (results => setTodos(results)))
  // }, []);

  return (
    <section className="main">

    

      <input className="toggle-all"
             type="checkbox" />
      <ul id="list" className="todo-list">        

      { items.map( (item) => (
        <li key={item.id}>
          <div className="view">
            <input className="toggle"
                  type="checkbox" />
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" />
        </li>
      ))}
      </ul>
    </section>
  )
}

export default List;