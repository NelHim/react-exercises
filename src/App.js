import Button from "./components/Button";

function App() {
  return (
    <div className="flex gap-5 justify-center items-center w-full h-screen font-bold ">
      <Button position={1}>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </div>
  );
}

export default App;
