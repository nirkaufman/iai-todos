import './app.css';
import { createElement, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';

function App() {
  const [list, setList] = useState([]);

  function addItem(item) {
    setList([...list, { title: item }]);
  }

  function removeItem() {

  }

  return (
    <section className="todoapp">
      <Header title="TodoApp" onAddItem={addItem} />
      <List items={list} />
      <Footer />
    </section>
  );
}

export default App;
