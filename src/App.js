import './App.css';
import Todos  from "./components/todos";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos />
      </div>
    </Provider>

  );
}

export default App;
