import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page page-narrow">
      <h1>That page isn't here.</h1>
      <p className="lead">Wrong address, or it moved.</p>
      <div className="hero-actions">
        <Link className="btn" href="/">Back home</Link>
        <Link className="btn btn-ghost" href="/commands">Command list</Link>
      </div>
    </div>
  );
}
