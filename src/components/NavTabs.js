import React from 'react';

const styles = {
  heading: {
  color: '#798777',
  fontSize: '30px',
  },

  header: {
    background: '#798777',
    color: '#F8EDE3',
    width: '100%',
  },

  headerH1: {
    paddingTop: '25px',
    paddingLeft: '10px',
    display: 'inline-block',
    fontFamily: 'serif',
    fontsize: '50px',
    height: '83px',
},

  headerNav: {
    float: 'right',
    fontSize: '20px',
    fontFamily: 'serif',
    background: '#798777'
},

  headerNavUl: {
    listStyleType: 'none',
    paddingTop:'40px',
},

headerNavUlLi: {
    display: 'inline-block',
},

a: {
    outline: 'none',
    textDecoration: 'none',
    color: '#F8EDE3',
    padding: '10px',
}
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.headerH1}>Shaelah Thompson</h1>
      <div style={styles.headerNav}>
        <ul className="nav nav-tabs" style={styles.headerNavUl}>
          <li className="nav-item" style={styles.headerNavUlLi}>
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
              style={styles.a}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              style={styles.a}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              style={styles.a}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              style={styles.a}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavTabs;
