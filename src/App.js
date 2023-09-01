import './App.css';

import AddTodoItem from './components/AddTodoItem';
import TodoList from './components/TodoList';
import BeataContextProvider, { BeataContext } from './context/BeataContext';


const App = () => {

  return <BeataContextProvider>
    <BeataContext.Consumer>
      {() => {
        return <>
          <AddTodoItem />
          <TodoList />
        </>
      }}
    </BeataContext.Consumer>
  </BeataContextProvider>


}


export default App;
