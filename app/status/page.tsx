export const metadata = { title: "Status" };

export default function StatusPage() {
  return <div className="page-shell narrow-page">
    <div className="page-hero"><div className="eyebrow">SYSTEM STATUS</div><h1>Status<span>.</span></h1><p>Updates about Villain and its services.</p></div>
    <section className="status-panel"><div className="status-panel-top"><div><span className="status-indicator status-muted" /> <strong>Live monitoring not connected</strong></div><span className="status-tag">NOT AVAILABLE</span></div><h2>We’re getting things ready.</h2><p>This page will show real-time bot availability and service incidents once monitoring is connected. We won't display made-up uptime or status information.</p><div className="status-divider" /><div className="status-service"><span>Discord bot</span><span className="service-pending">Awaiting integration</span></div><div className="status-service"><span>Website</span><span className="service-pending">Monitoring not configured</span></div></section>
    <p className="page-disclaimer">Last updated: status monitoring has not been configured yet.</p>
  </div>;
}
