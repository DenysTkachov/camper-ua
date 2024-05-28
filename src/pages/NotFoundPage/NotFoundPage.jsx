import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section>
      <div>Not Found Page</div>
      <p>
        Click to return to <Link to="/">home</Link>
      </p>
    </section>
  );
}

// export default NotFoundPage;