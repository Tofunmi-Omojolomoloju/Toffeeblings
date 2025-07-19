import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ToffeeBlings</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/gallery" style={styles.link}>Gallery</Link>
        <Link to="/booking" style={styles.link}>Booking</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fddde6',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#d63384',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
  }
};

export default Navbar;
