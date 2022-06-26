import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, loading, error, refetch } = useFetch(
    "https://api.givebacks.com/services/core/causes/search"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  let names = []
  for (let i = 0; i < data.causes.length; i++) {
    names.push(data.causes[i].name);
    }

  return (
    <div className="App">
      <h1>
        {names}
      </h1>

      <button onClick={refetch}> Refetch</button>
    </div>
  );
}

export default App;
