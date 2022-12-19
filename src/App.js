import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import data from "./data.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {data.map((element) => {
          return (
            <Movie
              Title={element.Title}
              Year={element.Year}
              img={element.Poster}
              Runtime={element.Runtime}
            />
          );
        }
      )}

      </div>
    </div>
  );
};

export default App;
