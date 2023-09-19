import { Button } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Vous êtes perdu ? </p>
      <Button><a href="http://localhost:5173/">Accueil</a></Button>
    </div>
  );
}