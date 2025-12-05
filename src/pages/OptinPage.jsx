import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OptinPage.css';

function OptinPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="optin-page">
            <div className="optin-container">
                {/* Header Badge */}
                <div className="header-badge">
                    Business OWNERS & Entrepreneurs
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <div className="left-section">
                        <h1 className="main-headline-optin">
                            GET <span className="highlight-green">$150K+</span> IN FUNDING, GET A 700+ CREDIT SCORE & MAKE $10K/M WITH AI
                        </h1>
                        <p className="sub-headline-optin">(Even With Little to No Revenue)</p>

                        {/* Form */}
                        <div className="form-container">
                            <h2 className="form-title">Enter Email Below!</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                                <button type="submit" className="next-button">
                                    NEXT →
                                </button>
                            </form>
                        </div>

                        {/* Video Thumbnail - Bottom Left */}
                        <div className="video-thumbnail">
                            <img src="/assets/video-thumbnail.jpg" alt="Training Preview" />
                            <div className="play-button">▶</div>
                        </div>
                    </div>

                    {/* Person Image - Right Side */}
                    <div className="right-section">
                        <img src="/assets/person-image.jpg" alt="Entrepreneur" className="person-image" />
                    </div>
                </div>

                {/* Bonus Section */}
                <div className="bonus-section">
                    <h3 className="bonus-title">Also Receive A Secret Bonus!!!</h3>
                    <p className="bonus-text">
                        Sent straight to your phone <span className="bonus-value">(Value $497)</span> (only valid until 12/05/2025)
                    </p>
                </div>

                {/* Footer */}
                <footer className="optin-footer">
                    <p className="disclaimer">
                        This site is not a part of the Facebook website or Facebook Inc. Additionally, this website is not endorsed by Facebook in any way.
                        FACEBOOK is a trademark of FACEBOOK, Inc. This site is not a part of Google, YouTube or any company wholly owned by Google or YouTube.
                        Additionally this website is not endorsed by Google or Youtube in any way.
                    </p>
                    <p className="copyright">6 Figur Funding - COPYRIGHT 2025 - All Rights Reserved</p>
                    <div className="footer-links">
                        <a href="/">HOME</a> |
                        <a href="https://6figurfunding.com/private-policy">PRIVACY</a> |
                        <a href="https://6figurfunding.com/terms-of-service">TERMS</a> |
                        <span>DISCLAIMER</span> |
                        <span>CUSTOMER STORIES</span> |
                        <span>LEGAL</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default OptinPage;
