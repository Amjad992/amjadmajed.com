import Navigation from '../../components/Navigation';

export default function Voluntary() {
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
            Voluntary Work
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              textAlign: 'center',
              fontSize: '1.2rem',
            }}
          >
            This is the Voluntary Work page. We'll build this content later.
          </p>
        </div>
      </main>
    </>
  );
}
