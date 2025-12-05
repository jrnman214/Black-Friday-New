import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import assets (assuming they are in public/assets or src/assets)
// For simplicity, we'll assume they are in public/assets and can be referenced directly by string path
// or we can import them if we move them to src/assets.
// Given the current structure, they are likely in public/assets or root assets folder.
// Vite serves public folder at root.

const Home = () => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
    const [activeFaq, setActiveFaq] = useState(null);

    // Countdown Timer
    useEffect(() => {
        // Set initial total seconds (15 minutes * 60)
        let totalSeconds = 15 * 60;

        const timer = setInterval(() => {
            totalSeconds -= 1;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            setTimeLeft({ minutes, seconds });

            if (totalSeconds <= 0) {
                clearInterval(timer);
                setTimeLeft({ minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Scroll Animations & Parallax
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        // Parallax
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.2;
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    // Tilt Effect
    useEffect(() => {
        const tiltCards = document.querySelectorAll('.pricing-card, .breakdown-item, .testimonial-card');

        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        };

        const handleMouseLeave = (e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };

        tiltCards.forEach(card => {
            card.classList.add('tilt-card');
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            tiltCards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="page-wrapper">
            {/* Parallax Background Shapes */}
            <div className="parallax-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="parallax-bg-image"></div>
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="content-container">
                    {/* Countdown Timer */}
                    <div className="countdown-container">
                        <div className="time-box">
                            <span id="minutes">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="label">Minutes</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-box">
                            <span id="seconds">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="label">Seconds</span>
                        </div>
                    </div>

                    <h1 className="main-headline animate-on-scroll fade-in-up">CYBER MONDAY EXTENDED SALE</h1>
                    <p className="sub-headline animate-on-scroll fade-in-up delay-100">Get Access To The Ultimate Credit Repair & Funding Blueprint. Limited Time Offer Ends Soon.</p>

                    <div className="video-wrapper animate-on-scroll zoom-in delay-200">
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                            <video
                                src="/assets/cyber.mp4"
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <h2 className="section-headline animate-on-scroll fade-in-up delay-300">CHOOSE YOUR PACKAGE</h2>
                    <p className="payment-note animate-on-scroll fade-in delay-300">Payment plans available at checkout</p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing-section">
                <div className="content-container">
                    <div className="pricing-grid">
                        {/* Silver Tier */}
                        <div className="pricing-card silver-disabled animate-on-scroll fade-in-up delay-100">
                            <div className="card-header">
                                <h3>Silver</h3>
                                <div className="value-tag">VALUED at $2,500</div>
                                <div className="price-tag">Today Only $550</div>
                                <div className="sub-tag">Credit Repair</div>
                            </div>
                            <div className="card-body">
                                <h4>Includes</h4>
                                <ul className="feature-list">
                                    <li>Credit Repair Using Metro 2</li>
                                    <li>Removal of All Hard Inquiries</li>
                                    <li>Removal of All Collections</li>
                                    <li>Removal of All Charge-offs</li>
                                    <li>Removal of Late Payments</li>
                                    <li>Monthly Credit Updates</li>
                                    <li>24/7 Live Portal Access</li>
                                    <li>1 Consumer Law Licensed Attorney</li>
                                    <li>16 Hour Live Chat</li>
                                    <li>Credit Rebuilding</li>
                                    <li>Credit Analysis</li>
                                    <li>Identity Protection Lock</li>
                                    <li>Pay Down Sheets</li>
                                    <li>View All Dispute Letters</li>
                                    <li>Before and After Comparison Reports</li>
                                    <li>Printing and Mailing of Letters</li>
                                    <li>6 Months of Credit Disputes</li>
                                    <li className="highlight-red">RESULTS AS FAST AS 15 DAYS</li>
                                    <li>BONUS #1 Credit History Turbo Boost (50-150 points)</li>
                                    <li>BONUS #2 Personalized Passive Income Game Plan ($10k Revenue)</li>
                                    <li>BONUS #3 Lifetime Access To AI Credit Repair Software</li>
                                </ul>
                                <Link to="/checkout?plan=silver" className="cta-btn">YES! I WANT THIS DEAL!</Link>
                            </div>
                        </div>

                        {/* Gold Tier */}
                        <div className="pricing-card gold animate-on-scroll fade-in-up delay-200">
                            <div className="card-header">
                                <h3>Gold</h3>
                                <div className="value-tag">VALUED at $4,997</div>
                                <div className="price-tag">Today Only $1,750</div>
                                <div className="sub-tag">Biz Structure<br />+Credit Repair Bundle</div>
                            </div>
                            <div className="card-body">
                                <h4>Also Includes</h4>
                                <ul className="feature-list">
                                    <li>LLC</li>
                                    <li>EIN</li>
                                    <li>Operating Agreement</li>
                                    <li>Business Banking</li>
                                    <li>Business Address</li>
                                    <li>Business Phone #</li>
                                    <li>411 & Google Listing</li>
                                    <li>Domain Name</li>
                                    <li>Professional Email Address</li>
                                    <li>Duns Number</li>
                                    <li>Business Tradelines</li>
                                    <li>Credit Repair Using Metro 2</li>
                                    <li>All Hard Inquiries</li>
                                    <li>Removal of All Collections</li>
                                    <li>Removal of All Charge-offs</li>
                                    <li>Removal of Late Payments</li>
                                    <li>Monthly Credit Updates</li>
                                    <li>24/7 Live Portal Access</li>
                                    <li>1 Consumer Law Licensed Attorney</li>
                                    <li>16 Hour Live Chat</li>
                                    <li>Credit Rebuilding</li>
                                    <li>Credit Analysis</li>
                                    <li>Identity Protection Lock</li>
                                    <li>Pay Down Sheets</li>
                                    <li>View All Dispute Letters</li>
                                    <li>Before and After Comparison Reports</li>
                                    <li>Printing and Mailing of Letters</li>
                                    <li>6 Months of Credit Disputes</li>
                                    <li className="highlight-red">RESULTS AS FAST AS 15 DAYS</li>
                                    <li>BONUS #1 Credit History Turbo Boost (50-150 points)</li>
                                    <li>BONUS #2 1 on 1 Monthly Coaching Calls (2)</li>
                                    <li>BONUS #3 Personalized Passive Income Game Plan ($10k Revenue)</li>
                                    <li>BONUS #4 Lifetime Access To AI Credit Repair Software</li>
                                </ul>
                                <Link to="/checkout?plan=gold" className="cta-btn">YES! I WANT THIS DEAL!</Link>
                            </div>
                        </div>

                        {/* Platinum Tier */}
                        <div className="pricing-card platinum animate-on-scroll fade-in-up delay-300">
                            <div className="card-header">
                                <h3>PLATINUM</h3>
                                <div className="value-tag">VALUED at $10,000</div>
                                <div className="price-tag">Today Only $2,750</div>
                                <div className="sub-tag">Biz Structure + Funding<br />+Credit Repair Bundle<br />+Digital Product Business<br />*Expedited Filing<br />No Backend Fees for Funding</div>
                            </div>
                            <div className="card-body">
                                <h4>Also Includes</h4>
                                <ul className="feature-list">
                                    <li>Expedited LLC Filing</li>
                                    <li>EIN</li>
                                    <li>Operating Agreement</li>
                                    <li>Business Banking</li>
                                    <li>Business Address</li>
                                    <li>Business Phone #</li>
                                    <li>411 & Google Listing</li>
                                    <li>Domain Name</li>
                                    <li>Professional Email Address</li>
                                    <li>Website</li>
                                    <li>Duns Number</li>
                                    <li>Business Tradelines</li>
                                    <li>Credit Repair Using Metro 2</li>
                                    <li>All Hard Inquiries</li>
                                    <li>Removal of All Collections</li>
                                    <li>Removal of All Charge-offs</li>
                                    <li>Removal of Late Payments</li>
                                    <li>Removal of Late Payments</li>
                                    <li>Monthly Credit Updates</li>
                                    <li>24/7 Live Portal Access</li>
                                    <li>1 Consumer Law Licensed Attorney</li>
                                    <li>16 Hour Live Chat</li>
                                    <li>Credit Rebuilding</li>
                                    <li>Credit Analysis</li>
                                    <li>Identity Protection Lock</li>
                                    <li>Pay Down Sheets</li>
                                    <li>View All Dispute Letters</li>
                                    <li>Before and After Comparison Reports</li>
                                    <li>Printing and Mailing of Letters</li>
                                    <li>6 Months of Credit Disputes</li>
                                    <li className="highlight-red">RESULTS AS FAST AS 15 DAYS</li>
                                    <li>BONUS #1 Credit History Turbo Boost (50-150 points)</li>
                                    <li>BONUS #2 1 on 1 Monthly Coaching Calls Via Zoom (4)</li>
                                    <li>BONUS #3 $150K in Funding Upon Completion</li>
                                    <li>BONUS #4 Personalized Passive Income Game Plan ($10k Revenue)</li>
                                    <li>BONUS #5 Lifetime Access To AI Credit Repair Software</li>
                                </ul>
                                <Link to="/checkout?plan=platinum" className="cta-btn">YES! I WANT THIS DEAL!</Link>
                            </div>
                        </div>

                        {/* Mentorship Tier */}
                        <div className="pricing-card mentorship animate-on-scroll fade-in-up delay-400">
                            <div className="card-header">
                                <h3>Mentorship</h3>
                                <div className="value-tag">VALUED at $15,000</div>
                                <div className="price-tag">Today Only $5,000</div>
                                <div className="sub-tag">1-on-1 Mentorship<br />+Everything in Platinum</div>
                            </div>
                            <div className="card-body">
                                <h4>Includes Everything in Platinum PLUS</h4>
                                <ul className="feature-list">
                                    <li>Direct Access to Me via Cell Phone</li>
                                    <li>Weekly 1-on-1 Zoom Calls for 3 Months</li>
                                    <li>Custom Business Strategy Plan</li>
                                    <li>Hands-on Funding Assistance</li>
                                    <li>Exclusive Networking Events</li>
                                    <li>Priority Support 24/7</li>
                                    <li className="highlight-red">GUARANTEED RESULTS OR MONEY BACK</li>
                                </ul>
                                <Link to="/checkout?plan=mentorship" className="cta-btn">YES! I WANT THIS DEAL!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Bonuses Section */}
            <section className="bonuses-section">
                <div className="content-container">
                    <h2 className="section-headline">+ 12 Additional Fast Action Bonuses</h2>
                    <div className="bonus-list-wrapper">
                        <ul className="bonus-list">
                            <li>NFCU Hack</li>
                            <li>2X Auto Loan Play</li>
                            <li>Secret Lenders List</li>
                            <li>Secret Credit Unions List</li>
                            <li>Secret Vendors List</li>
                            <li>0% Interest Credit Cards</li>
                            <li>Business Credit Cards That Only Use EIN</li>
                            <li>Funding Sequence Template</li>
                            <li>Hide Credit Card Utilization</li>
                            <li>The Middle Man Strategy</li>
                            <li>The Apple Card Play</li>
                            <li>Restricted Business List</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Description/Sales Copy Section */}
            <section className="copy-section">
                <div className="content-container text-left">
                    <h2 className="copy-headline">Introducing The Cyber Monday Extended Sale Mentorship For Beginner & Advanced Entrepreneurs Looking to Leverage Credit To Build a 6-7 Figure Business.</h2>

                    <h3 className="copy-subheadline">Are you tired of burning out from your 9-5 and want to finally make this whole “entrepreneur” thing work for you but do not know how?</h3>

                    <p>If the answer is yes, this is what you've been looking for.</p>
                    <p>There’s just a couple things, you need to know:</p>
                    <p>Credit repair is possible for anyone, even if you have prior bankruptcies, collections or even student loans…</p>
                    <p>These can all be removed from your credit file and trust me when that happens, it feels like a huge weight being lifted off your shoulders…</p>
                    <p>The reason why people get denied for business credit is painstakingly simple…</p>
                    <p>They simply set bad first impressions!</p>
                    <p>Just like how you need to dress to impress on a first date…</p>
                    <p>You need to dress your new business up in a way that leaves banks licking their lips, ready to offer you the credit you want...</p>
                    <p>And this is exactly why I created Credit Expunge + Business Stacking Blueprint Bundle!</p>

                    <h3 className="copy-subheadline">THE BSB that's Included it's a step-by-step system I used to generate 6+ figures online, and has helped thousands of others also find their breakthroughs in the credit game.</h3>
                    <p>If you join and follow the system, you'll take another step closer to replacing your 9-5 income and working on your terms.</p>
                    <p>And if it doesn't work for you, don't worry.</p>
                    <p>You can take advantage of my "love it or leave it" guarantee, where I'll refund all your money back within the first 30 days.</p>
                </div>
            </section>

            {/* Breakdown Section */}
            <section className="breakdown-section">
                <div className="content-container">
                    <h2 className="section-headline">Here's What You Will Get</h2>
                    <div className="breakdown-grid">
                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/credit_expunge.png" alt="Credit Expunge Mockup" className="item-mockup" />
                                <h3>Credit Expunge Administered by ME ($2500 Value)</h3>
                            </div>
                            <p>Using Metro 2, Consumer Law, Factual Disputes, CFPB, I don't just use 1 method which is usually Factual disputing which is only 65% or so effective, I combine them all and even use handwritten fonts on dispute letters so that they are not automatically denied from the credit bureaus. Avoiding the Issue of having to send out STALL letters. This makes credit repair 98% effective and speeds up results by 3x.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mindset.svg" alt="Mindset Book Mockup" className="item-mockup" />
                                <h3>Mindset ($97 Value)</h3>
                            </div>
                            <p>Mindset, before you start a business, in order to be successful you need to have the right mindset. It's not the same thing as just clocking into work and doing your 8 hours. Also get 30 days of mentorship in which Mindset is the first topic discussed.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/branding.png" alt="Branding Laptop Mockup" className="item-mockup" />
                                <h3>Branding Your Business ($197 Value)</h3>
                            </div>
                            <p>How to make your brand stand out from the others. Picking the correct business name is critical. Creating your Domain name so you are easily findable leads to more sales.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_start_business.jpg" alt="Start Business Mockup" className="item-mockup" />
                                <h3>How To Start A Business ($47 Value)</h3>
                            </div>
                            <p>How to create your LLC, Get your EIN#, Get your Bank Account so you can start building business credit.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_personal_credit.jpg" alt="Personal Credit Mockup" className="item-mockup" />
                                <h3>Personal Credit ($797 Value)</h3>
                            </div>
                            <p>Includes AI credit repair software and all the hacks to remove items from your credit report in as fast as 14 days. Utliize the CFPB, Consumer Law, FTC, Metro 2, and Factual Disputing to remove anything from your credit reported. Although in this package, we remove everything for you, This is good if you are looking to start a 6 Figure Funding Company or a Credit repair Business. Or worst case, if you get any negative item on your credit report, you will have access to my AI Software as well as all the training on how to remove anything from your report.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_business_credit.jpg" alt="Business Credit Mockup" className="item-mockup" />
                                <h3>Business Credit ($997 Value)</h3>
                            </div>
                            <p>The step-by-step blueprint to build business credit in less than 90 days. Learn the secret methods to getting up to $1M in Funding using credit stacking and transfer your debt from personal to business to boost credit score</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_tradelines.jpg" alt="Tradelines Mockup" className="item-mockup" />
                                <h3>Tradelines ($27 Value)</h3>
                            </div>
                            <p>If you do not have a strong credit profile, Fast track to success by using others credit cards to add to your profile to boost your score by up to 160 points within 3 days. Also how you can make money by utilizing your good credit. Backdate your rent up to 2 years.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_funding_structure.jpg" alt="Funding Structure Mockup" className="item-mockup" />
                                <h3>Funding Structure ($297 Value)</h3>
                            </div>
                            <p>How to set your business up properly so you can get access to $150K in business funding with a brand-new business. This has a sequence of banks to hit first, how to set up your business account so that you will be automatically approved.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_funding_secrets.jpg" alt="Funding Secrets Mockup" className="item-mockup" />
                                <h3>Funding Secrets ($1997 Value)</h3>
                            </div>
                            <p>Fast track to success by knowing all the secrets to getting approved the first time. Know what credit bureaus the banks pull from, exactly how to fill out the application so the system can give you an automatic approval.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_credit_2_cash.jpg" alt="Credit 2 Cash Mockup" className="item-mockup" />
                                <h3>Credit 2 Cash ($497 Value)</h3>
                            </div>
                            <p>Obtaining business credit funding is great for starting or scaling a business but it does have one drawback… You can only spend it using your business credit card. This prevents you from using it to invest in real estate as you can only put a down payment on a property using debit. But with this method, you can turn credit into cash that you can spend however you like</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_funding_business.jpg" alt="6 Figur Funding Business Mockup" className="item-mockup" />
                                <h3>6 Figur Funding Business ($4697 Value)</h3>
                            </div>
                            <p>How to generate $20,000-$50,000 a month just by getting clients business funding without doing the deals. The Funding Business in 2023 Is a hot topic, I have had mentees who made $20,000 their first month. So by Learning all the ins and outs of fixing credit, by utilizing this one skill set just 2 hours a week and you can make a 6 figur income.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_digital_product.jpg" alt="Digital Product Mastery Mockup" className="item-mockup" />
                                <h3>Digital Product Mastery ($497 Value)</h3>
                            </div>
                            <p>How to generate sleep coins. So many millionaires are being made from this business model. Grant Cardone, Known for Real Estate, Makes Millions each day from selling information. Adding digital products to get leads for your business and adding upsales and downsales to pay for ads can really help you scale your business. Imagine making a product one time and you can sell it OVER AND OVER AND OVER, No need to ever restock as it's digital. No Need to ship it, just set up an email automation and go to sleep and see your banks account, hundreds of dollars richer.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/mockup_affiliate_marketing.jpg" alt="Affiliate Marketing Mockup" className="item-mockup" />
                                <h3>Affiliate Marketing ($197 Value)</h3>
                            </div>
                            <p>You don't need to have a product of your own to sell to make money. You can sell other people's products and make up to 50% commissions just by sending a link and they purchase. In here, I show you how to find Affiliate Marketing opportunities, and different ways you can get paid from it without having to have your own products.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Bonuses Section */}
            <section className="free-bonuses-section">
                <div className="content-container">
                    <h2 className="section-headline">Your Free Bonuses Only If You Take Action Today...</h2>

                    <div className="breakdown-grid">
                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/bonus_turbo_boost.jpg" alt="Credit History Turbo Boost Mockup" className="item-mockup" />
                                <h3>BONUS#1 Credit History Turbo Boost ($297 Value)</h3>
                            </div>
                            <p>Have poor credit history/age? This will solve your problem instantly. It’s how we’re able to get 5 figures in funding for 18-year-olds who started with no credit history. No need to wait 2-3 years, Instantly Boost Scores</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/bonus_coaching.jpg" alt="1-On-1 Coaching Calls Mockup" className="item-mockup" />
                                <h3>BONUS #2 1-On-1 Coaching Calls ($397 Value)</h3>
                            </div>
                            <p>While Going through the process of credit repair, I will give you monthly coaching calls to help you make the correct decisions with your credit. I have been featured in a few podcasts where I have shed my knowledge and experience with credit, and I will assist you as well so you can be successful. Getting good credit is cool, but maintaining is where it's at. But learn how to leverage it to the maximum.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/bonus_funding.jpg" alt="$30K Funding Mockup" className="item-mockup" />
                                <h3>BONUS #3 $30K Funding ($597 Value)</h3>
                            </div>
                            <p>Receive up to $30K in Funding after completion of credit repair. Typically, scores need to be above a 680+ to receive funding. Our goal is to get you to 750+. Now while we can get clients up to $1M in Funding, that requires setting up the business, and structuring it properly. However, we give you the blueprint to successfully obtain funding up to $150K.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/bonus_passive_income.jpg" alt="Passive Income Play Mockup" className="item-mockup" />
                                <h3>BONUS #4 Passive Income Play ($1,197 Value)</h3>
                            </div>
                            <p>We not only want to fix your credit, but we want to teach you how to leverage it to make money passively. What we will do is figure out your individual goals, what your specialties are and give you a step-by-step personalized game plan so that you can quit that 9-5 job and start earning money month after month with little to no effort. Currently have a client named Jessica who I got her a $50K Approval and she purchased 20 vending massage chairs. She now makes $15K a month passively and does not have to do anything but collect a check.</p>
                        </div>

                        <div className="breakdown-item animate-on-scroll fade-in-up">
                            <div className="item-header">
                                <img src="/assets/bonus_software_access.jpg" alt="Lifetime Access ALL Courses Mockup" className="item-mockup" />
                                <h3>BONUS #5 Lifetime Access ALL Courses ($5,000 Value)</h3>
                            </div>
                            <p>If you want to make sleep coins, Money in your Sleep, you need to have digital products to sell. No Need to Create a Product, I have a full list of 600+ Digital eBooks +200 Video Courses that you can have and turn into your own. No need to pay someone a few hundred $$$ just to make 1 eBook. TAKE MY entire library. Instead of purchasing separately for $27-$297 Each eBook or Course, Included with this offer, You can have all of them for life to create an passive income of $10,000-$20,000 a month on autopilot</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="content-container">
                    <h2 className="section-headline">What Our Clients Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card animate-on-scroll zoom-in">
                            <div className="video-container">
                                <iframe src="https://player.vimeo.com/video/1111457332" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <h3>Client Success Story 1</h3>
                        </div>
                        <div className="testimonial-card animate-on-scroll zoom-in">
                            <div className="video-container">
                                <iframe src="https://player.vimeo.com/video/1111471953" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <h3>Client Success Story 2</h3>
                        </div>
                        <div className="testimonial-card animate-on-scroll zoom-in">
                            <div className="video-container">
                                <iframe src="https://player.vimeo.com/video/1111450818" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <h3>Client Success Story 3</h3>
                        </div>
                        <div className="testimonial-card animate-on-scroll zoom-in">
                            <div className="video-container">
                                <iframe src="https://player.vimeo.com/video/1111645791" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <h3>Client Success Story 4</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="content-container">
                    <h2 className="section-headline">Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {[
                            { q: "How fast will I see results?", a: "Results can vary, but many clients see initial improvements in as little as 15-30 days. The full process depends on the complexity of your credit profile, but our Metro 2 compliance strategies are designed for speed and efficiency." },
                            { q: "Do I need an LLC to get started?", a: "No, you don't need an LLC to start the personal credit repair process. However, for the business funding and structure packages (Gold, Platinum, Mentorship), we will guide you through setting up your LLC correctly to maximize your funding potential." },
                            { q: "What if I have bankruptcies or repossessions?", a: "Our advanced dispute methods, including Metro 2 and Consumer Law challenges, are effective at addressing complex negative items like bankruptcies and repossessions. We work to remove or correct these items to improve your creditworthiness." },
                            { q: "Is the software easy to use?", a: "Yes! The AI Credit Repair Software included in the bonuses is user-friendly and designed for beginners. Plus, you get lifetime access to our course library to guide you every step of the way." }
                        ].map((item, index) => (
                            <div key={index} className={`faq-item animate-on-scroll fade-in-up ${activeFaq === index ? 'active' : ''}`}>
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    <h3>{item.q}</h3>
                                    <span className="faq-toggle" style={{ transform: activeFaq === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                                </div>
                                <div className="faq-answer" style={{ maxHeight: activeFaq === index ? '200px' : '0' }}>
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
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

export default Home;
