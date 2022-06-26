import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data: joke, loading, error, refetch } = useFetch(
    "https://api.givebacks.com/services/core/causes/search"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
      <h1>
        {joke.name}
      </h1>

      <button onClick={refetch}> Refetch</button>
    </div>
  );
}

export default App;
