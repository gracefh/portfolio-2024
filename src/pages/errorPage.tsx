import { Link } from "react-router-dom";
import "./pages.css";
export const ErrorPage = () => {
  return (
    <div className="App">
      <main className="error-page-wrapper">
          <h1 className="header-lg">oops!</h1>
          <p>You found an invalid page</p>
          <div>
            <Link to="/" className="text-link">
              go back home
            </Link>
          </div>
      </main>
    </div>
  );
};
