import React from 'react'
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className='Home-Page-Container'>

        {/* This div below contains navbar */}
        <div className='nav-container'>

            {/* navbar logo */}
            <div className='nav-logo-div'>
                <img src="/images/nav-logo.png" alt="nav-logo" className='nav-logo'/>
                <h3 className='nav-logo-name'>Goal Keeper</h3>
            </div>

            {/* Navbar links */}
            <div className='nav-links-container'>
                <a href="#about-container" className='nav-link'>About App</a>
                <a href="/signup" className='nav-link'>Sign-Up</a>
                <a href="/login" className='nav-link'>Login</a>
            </div>
        </div>

        {/* This div below contains title image and text */}
        <div className='title-container image-overlay'>
            <div className='image-overlay'>
                <h1 className='title-text'>Track Your Goals With Goal Keeper</h1>
                <h2 className='title-sub-text'>Get around your day efficiently with this Todo-App</h2>
                <a href="/signup" className='title-btn'>Get Started!</a>
            </div>
        </div>

        {/* This div below contains Quote */}
        <div className='quote-container'>
            <h1 className='quote'>“If you really want to do something, you'll find a way. If you don't, you'll find an excuse.”</h1>
            <h2 className='quote-said-by'>Jim Rohn</h2>
        </div>

        {/* This div below contains info. about the app. */}
        <div className="about-container" id='about-container'>
            <h1 className="about-heading">About GoalKeeper</h1>
            <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aut voluptatem eius, debitis voluptatibus
                 dignissimos iste quam architecto laborum ipsam quibusdam. Soluta fuga quis dignissimos! Laborum dicta neque 
                 labore! Id voluptatum similique tempore dolore atque quaerat modi? Voluptate laborum omnis, voluptatum iusto 
                 facere sapiente beatae, repellat, debitis aspernatur earum saepe vel tenetur voluptatem dignissimos expedita! 
                 Tempora, sequi impedit omnis nemo perspiciatis dignissimos cupiditate, inventore soluta harum doloribus illo, 
                 voluptas enim. Commodi molestias cumque sequi. Totam aperiam, laudantium eos in laboriosam facilis ratione 
                 voluptatum quaerat quam, ipsum esse ea ad! Explicabo neque consectetur distinctio odio dolorem eaque perspiciatis 
                 mollitia, alias molestiae minus officia omnis magni porro, ipsa aspernatur, nostrum perferendis ratione tenetur 
                 natus assumenda velit sunt tempora? Est ex, similique itaque doloremque temporibus vero molestiae asperiores sit quis
                 dolore tempora. Doloremque aspernatur perferendis aperiam a ipsum assumenda in corrupti sapiente nesciunt soluta id 
                 modi quisquam, ea reiciendis esse omnis vitae voluptatem?
            </p>
        </div>

        {/* This div below conatins user reviews. */}
        <div className="reviews-container">
            <h1 className="review-heading">They've said it!!!!!</h1>

            {/* review cards */}
            <div className="review-cards">

                {/* card 1 */}
                <div className="review-card">
                    <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cupiditate recusandae
                        libero tempore numquam inventore ducimus iusto, beatae, facere aut nobis eaque soluta sequi pariatur delectus ipsa 
                        sed illum possimus.
                    </div>
                    <div className="card-footer">
                        <img src="/images/alexander-hipp.jpg" alt="alexander-hipp.jpg" className='user-image'/> 
                        <p className="username">Alexander Hipp</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="review-card">
                    <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cupiditate recusandae
                        libero tempore numquam inventore ducimus iusto, beatae, facere aut nobis eaque soluta sequi pariatur delectus ipsa 
                        sed illum possimus.
                    </div>
                    <div className="card-footer">
                        <img src="/images/sigmund.jpg" alt="sigmund.jpg" className='user-image'/>
                        <p className="username">Sigmund Frey</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="review-card">
                    <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cupiditate recusandae
                        libero tempore numquam inventore ducimus iusto, beatae, facere aut nobis eaque soluta sequi pariatur delectus ipsa 
                        sed illum possimus.
                    </div>
                    <div className="card-footer">
                        <img src="/images/joseph-gonzalez.jpg" alt="jospeh-gonzalez.jpg" className='user-image'/>
                        <p className="username">Joseph Gonzalez</p>
                    </div>
                </div>

               </div>
            </div>

            {/* Footer Begins Here */}
            <div className="footer">

                {/* this div below contains logo and social media icons */}
                <div className="footer-logo">
                    <h1 className="footer-heading">Goal Keeper</h1>
                    <div className="social-icons">
                        <img src="/images/facebook.svg" alt="facebook.svg" className='social-icon'/>
                        <img src="/images/instagram.svg" alt="instagram.svg" className='social-icon'/>
                        <img src="/images/twitter.svg" alt="twitter.svg" className='social-icon'/>
                        <img src="/images/linkedin.svg" alt="linkedin.svg" className='social-icon'/>
                    </div>
                </div>

                {/* this div below contains copyright */}
                <div className="copyright-div">
                    <p className='copyright'>Made with love by Varun Gupta</p>
                </div>
            </div>
        </div>
  )
}

export default HomePage