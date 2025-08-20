import { client } from "@repo/db/client"

export default async function Home() {
  const user = await client.user.findFirst();
  
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#111827',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      padding: '1.5rem 1rem',
    },
    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold' as const,
      color: '#a855f7',
      margin: 0
    },
    main: {
      padding: '3rem 1rem',
    },
    mainContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center' as const
    },
    hero: {
      marginBottom: '4rem'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
      fontWeight: 'bold' as const,
      marginBottom: '1.5rem',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
      color: '#d1d5db',
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    userCard: {
      backgroundColor: '#1f2937',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      marginBottom: '3rem',
      maxWidth: '400px',
      margin: '0 auto 3rem'
    },
    userTitle: {
      fontSize: '1.125rem',
      fontWeight: '600' as const,
      marginBottom: '1rem',
      color: '#a855f7'
    },
    userInfo: {
      textAlign: 'left' as const
    },
    userField: {
      marginBottom: '0.75rem'
    },
    fieldLabel: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      display: 'block',
      marginBottom: '0.25rem'
    },
    fieldValue: {
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '1rem'
    },
    buttons: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '4rem',
      flexWrap: 'wrap' as const
    },
    primaryButton: {
      backgroundColor: '#7c3aed',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      fontWeight: '600' as const,
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      fontWeight: '600' as const,
      border: '1px solid #4b5563',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      backgroundColor: '#1f2937',
      padding: '1.5rem',
      borderRadius: '0.5rem'
    },
    featureIcon: {
      width: '3rem',
      height: '3rem',
      backgroundColor: '#7c3aed',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      fontSize: '1.5rem'
    },
    featureTitle: {
      fontSize: '1.125rem',
      fontWeight: '600' as const,
      marginBottom: '0.5rem'
    },
    featureText: {
      color: '#9ca3af',
      fontSize: '0.875rem'
    },
    footer: {
      padding: '2rem 1rem',
      borderTop: '1px solid #374151'
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center' as const
    },
    footerText: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      margin: 0
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <h1 style={styles.logo}>YourApp</h1>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.mainContainer}>
          {/* Hero Section */}
          <div style={styles.hero}>
            <h2 style={styles.heroTitle}>
              Welcome to the{' '}
              <span style={{ color: '#a855f7', display: 'block' }}>Future</span>
            </h2>
            <p style={styles.heroSubtitle}>
              Experience innovation with our modern platform designed for the next generation
            </p>
          </div>

          {/* User Info */}
          {user && (
            <div style={styles.userCard}>
              <h3 style={styles.userTitle}>User Info</h3>
              <div style={styles.userInfo}>
                <div style={styles.userField}>
                  <span style={styles.fieldLabel}>Username</span>
                  <span style={styles.fieldValue}>{user.username}</span>
                </div>
                <div>
                  <span style={styles.fieldLabel}>Password</span>
                  <span style={styles.fieldValue}>{user.password}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{
            ...styles.buttons,
            flexDirection: typeof window !== 'undefined' && window.innerWidth >= 640 ? 'row' : 'column'
          }}>
            <button style={styles.primaryButton}>
              Get Started
            </button>
            <button style={styles.secondaryButton}>
              Learn More
            </button>
          </div>

          {/* Features */}
          <div style={styles.features}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⚡</div>
              <h3 style={styles.featureTitle}>Fast</h3>
              <p style={styles.featureText}>
                Lightning-fast performance for optimal user experience
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔒</div>
              <h3 style={styles.featureTitle}>Secure</h3>
              <p style={styles.featureText}>
                Enterprise-grade security to protect your data
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>❤️</div>
              <h3 style={styles.featureTitle}>Reliable</h3>
              <p style={styles.featureText}>
                99.9% uptime with 24/7 monitoring and support
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <p style={styles.footerText}>
            &copy; 2025 YourApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
