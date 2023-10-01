function App() {

  let array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  let listArray = array.map(animal => <li key={animal}>{animal}</li>)

  return (
    <div className="h-screen grid justify-center items-center">
      <ul className="text-2xl font-semibold list-disc">
        {listArray}
      </ul>
    </div>
  );
}

export default App;
