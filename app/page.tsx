export default function Home() {
  return (
    <main style={{ padding: "var(--rand)" }}>
      <p className="display">Willkommen bei Mauro</p>
      <h1>Über mich</h1>
      <p className="lead">Aufgewachsen in Samedan, zu Hause in Luzern.</p>
      <p>Das ist normaler Lesetext in der Serifenschrift.</p>
      <a href="#" className="link">Ein Link in Weinrot</a>
    </main>
  );
}