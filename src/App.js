import List from "./components/List";

function App() {
  let list = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  return (
    <div className="grid justify-center items-center h-screen text-3xl font-medium">
      <List items={list}/>
    </div>
  );
}

export default App;
