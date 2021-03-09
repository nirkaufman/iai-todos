import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';

function App() {
  return (
    <section className="todoapp">      
      <Header title="TodoApp"/>
      <List />      
      <Footer />
    </section>
  );
}

export default App;
