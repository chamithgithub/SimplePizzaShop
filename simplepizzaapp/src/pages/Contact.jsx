import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can add form submission logic here
    };

    return (
        <div style={styles.contactPage}>
            <div style={styles.contactInfo}>
                <h1 style={styles.heading}>Contact Us</h1>
                <p><strong>Address:</strong> 123 Pizza Street, Flavor Town, USA</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> contact@pizzashop.com</p>
                <p><strong>Operating Hours:</strong></p>
                <p>Mon-Fri: 10:00 AM - 10:00 PM</p>
                <p>Sat-Sun: 11:00 AM - 11:00 PM</p>
            </div>

            <div style={styles.contactForm}>
                <h2 style={styles.heading}>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                        style={styles.input}
                    />
                    
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        style={styles.input}
                    />
                    
                    <label htmlFor="message" style={styles.label}>Message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        required 
                        style={styles.textarea}
                    ></textarea>

                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    contactPage: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        maxWidth: '1200px',
        margin: 'auto',
    },
    contactInfo: {
        flex: 1,
        padding: '20px',
    },
    contactForm: {
        flex: 1,
        padding: '20px',
    },
    heading: {
        color: '#e74c3c',
    },
    label: {
        display: 'block',
        margin: '10px 0 5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        height: '100px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    buttonHover: {
        backgroundColor: '#c0392b',
    },
};

export default ContactUs;
