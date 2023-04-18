import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [
    "Read an article",
    "Write a blog",
    "Make a video",
    "Reply to a comment",
  ];
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>
        <input type="text"/>
        <button>Add</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
