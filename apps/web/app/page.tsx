export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      background: "#0a0a0a",
      color: "#fff",
      fontFamily: "system-ui, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Villain
      </h1>
      <p style={{ color: "#a1a1aa", marginBottom: "2rem" }}>
        Discord Selfbot Hosting Platform
      </p>
      <div style={{ 
        padding: "0.75rem 1.5rem", 
        border: "1px solid #27272a", 
        borderRadius: "8px",
        color: "#a1a1aa",
        fontSize: "0.875rem"
      }}>
        Foundation ready • Dashboard coming next
      </div>
    </main>
  );
}
