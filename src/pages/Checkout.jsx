import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Checkout = () => {
    const [searchParams] = useSearchParams();
    const plan = searchParams.get('plan') || 'selected';

    return (
        <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Parallax Background Shapes */}
            <div className="parallax-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <section className="hero-section" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="content-container">
                    <h1 className="main-headline animate-on-scroll fade-in-up">CHECKOUT</h1>
                    <p className="sub-headline animate-on-scroll fade-in-up delay-100">You selected the <span style={{ color: '#ff0000', textTransform: 'uppercase' }}>{plan}</span> package.</p>

                    <div className="pricing-card" style={{ maxWidth: '600px', margin: '40px auto', padding: '40px' }}>
                        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Complete Your Purchase</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <input type="text" placeholder="Full Name" style={{ padding: '15px', background: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px' }} />
                            <input type="email" placeholder="Email Address" style={{ padding: '15px', background: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px' }} />
                            <input type="text" placeholder="Card Number" style={{ padding: '15px', background: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px' }} />
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <input type="text" placeholder="MM/YY" style={{ flex: 1, padding: '15px', background: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px' }} />
                                <input type="text" placeholder="CVC" style={{ flex: 1, padding: '15px', background: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px' }} />
                            </div>
                            <button type="submit" className="cta-btn" style={{ width: '100%', marginTop: '20px' }}>PAY NOW</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer>
                <div className="content-container">
                    <p>&copy; 2025 6 Figur Funding. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Checkout;
