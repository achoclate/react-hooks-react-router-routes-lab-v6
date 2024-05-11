import { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.error(error));
  }, []);

  const directorList = directors.map((director) => (
    <Card key={director.id} name={director.name} movies={director.movies} />
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
}

export default Directors;
