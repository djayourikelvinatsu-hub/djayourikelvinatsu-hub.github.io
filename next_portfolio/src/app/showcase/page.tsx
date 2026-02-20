import { LiveEditor } from "@/components/LiveEditor";

const initialButtonCode = `
// Welcome to the dark-themed sandbox!
// Try editing the component instantly.
() => {
  const [count, setCount] = React.useState(0);
  
  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h3 style={{ marginBottom: "1.5rem", color: "var(--foreground)" }}>
        Interactive Stateful Button
      </h3>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: "12px 24px",
          background: "var(--primary)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "1rem",
          boxShadow: "0 4px 14px 0 rgba(0,0,0,0.3)"
        }}
      >
        Clicks: {count}
      </button>
      <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
        Rendered natively in the browser via React-Live.
      </p>
    </div>
  );
}
`.trim();

export default function ShowcasePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Code Playground</h1>
                <p className="text-xl text-muted-foreground">
                    Explore native React components interacting seamlessly with our <strong className="text-foreground">True Black</strong> design token system.
                </p>
            </div>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-4">Zero-Compile Environment</h2>
                <p className="text-muted-foreground mb-6">
                    This integration enables live editing of React code directly within the UI. Use the editor on the left; the output on the right will react to changes in real-time.
                </p>
                <LiveEditor initialCode={initialButtonCode} />
            </section>
        </div>
    );
}
