export const metadata = { title: "Status" };

export default function StatusPage() {
  return (
    <div className="page-shell narrow-page">
      <div className="page-hero">
        <h1>Status</h1>
        <p>Current Villain service status.</p>
      </div>
      <section className="status-panel">
        <h2>All systems go.</h2>
        <p>Villain is currently online and available on Discord.</p>
        <div className="status-service"><span>Discord bot</span><span className="service-online">Online</span></div>
        <div className="status-service"><span>Website</span><span className="service-online">Online</span></div>
      </section>
    </div>
  );
}
