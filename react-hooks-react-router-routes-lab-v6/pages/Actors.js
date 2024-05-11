import { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data))
      .catch((error) => console.error(error));
  }, []);

  const actorList = actors.map((actor) => (
    <Card key={actor.id} name={actor.name} movies={actor.movies} />
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
}

export default Actors;
