function List ({items}) {
  return (
    <section className="main">
      <input className="toggle-all"
             type="checkbox" />
      <ul id="list" className="todo-list">        

      { items.map( (item, index) => (
        <li>
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