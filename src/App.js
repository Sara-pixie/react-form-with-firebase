import Table from "./Table";
import Form from "./Form";
import "./style/App.css";

export default function App() {
  return (
    <div className="App">
      <h1>This is a simple React form with Firebase as database</h1>
      <Form />
      <Table />
    </div>
  );
}

