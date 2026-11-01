export const metadata = { title: "Status" };

export default function StatusPage() {
  return (
    <div className="page-shell narrow-page">
      <div className="page-hero">
        <h1>Status</h1>
        <p>Nothing is reporting yet.</p>
      </div>
      <section className="status-panel">
        <h2>Monitoring isn't connected.</h2>
        <p>When the bot can report in, incidents will show up here. Until then there is no uptime number, because a made-up one would be a lie.</p>
        <div className="status-service"><span>Discord bot</span><span className="service-pending">Not reporting</span></div>
        <div className="status-service"><span>Website</span><span className="service-pending">Not reporting</span></div>
      </section>
    </div>
  );
}
