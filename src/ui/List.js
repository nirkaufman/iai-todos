import {useSelector} from 'react-redux';

function List () {
  const items = useSelector(state => state.items);

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