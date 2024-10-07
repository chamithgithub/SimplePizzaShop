import React from 'react'
import logo from '../assets/images/img3.jpg';

const About = () => {
    return (
        <div style={styles.container}>
            <div className="header">

                <h1 style={styles.header}>About Us</h1>
            </div>
            <div className="aboutcontainer flex">
                <div className="aboutimg">
                    <img style={styles.img} src={logo} alt="Logo" />
                </div>
                <div className="aboutcontaint">
                    <p style={styles.paragraph}>
                        Welcome to our website! We are dedicated to providing the best services and products to our customers. Our team is committed to excellence and innovation in every aspect of our business. With years of experience, we ensure that our customers receive top-notch support and solutions.
                    </p>
                </div>
            </div>

            <p style={styles.paragraph}>
                Feel free to explore our website to learn more about what we offer. If you have any questions, don't hesitate to reach out to us.
            </p>
        </div>
    );
};

// Inline styles for simplicity, but you can use CSS/SCSS files instead
const styles = {
    container: {
        padding: '20px',
        maxWidth: '1400px',
        backgroundColor: 'yellow',
        margin: '0 auto',
        textAlign: 'center',
    },

    header: {
        fontSize: '2.5rem',
        color: '#333',
        backgroundColor:"#989444",
        marginTop:"10px",
        marginBottom:"10px",

    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#555',
        marginTop: '20px',
    },
    img: {
        height:"70vh",
        width:"130vh",
    },
};

export default About


