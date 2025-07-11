import Navigation from '../../components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <main
        style={{
          paddingTop: '70px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="container">
          <h1
            style={{
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            About Me
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              textAlign: 'center',
              fontSize: '1.2rem',
            }}
          >
            This is the About Me page. We'll build this content later.
          </p>
        </div>
      </main>
    </>
  );
}
