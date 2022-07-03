import './LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const landingPageContainerOne = (
        <div className="landing-page-container">
            <h1>
                FOR YOUR
                <em> MUSIC</em>
            </h1>
            <p>
                A streaming service for all music fans
            </p>
            <Link to="/register" className='btn'>
                Register
            </Link>
        </div>
    )

    const landingPageContainerTwo = (
        <div className='landing-page-container-two'>
            <div className='card'>
                <div className='card-table'>
                    <div>
                        <h2>Ad-Free Music</h2>
                        <p>
                            With over 100s of songs and exclusive releases, 
                            Webb brings you closer to the artists you listen to. 
                            Completely ad-free.
                        </p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-table'>
                    <div>
                        <h2>Your listening counts</h2>
                        <p>
                            With the goal of empowering artists and fans,
                            Webb givesyou more ways of supporting the artists
                            you love.
                        </p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-table'>
                    <div>
                        <h2>Handpicked Playlists</h2>
                        <p>
                            Check out original playlists hand-picked by
                            our team of experts, or stream guest playlists
                            curated by the artists you love.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

    const landingPageContainerThree = (
        <div className='landing-page-container-three'>
            <h1>FAQ</h1>
            <div className='card'>
                <div className='card-table'>
                    <div>
                        <h2>Ad-Free Music</h2>
                        <p>
                            With over 100s of songs and exclusive releases, 
                            Webb brings you closer to the artists you listen to. 
                            Completely ad-free.
                        </p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-table'>
                    <div>
                        <h2>Your listening counts</h2>
                        <p>
                            With the goal of empowering artists and fans,
                            Webb givesyou more ways of supporting the artists
                            you love.
                        </p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-table'>
                    <div>
                        <h2>Handpicked Playlists</h2>
                        <p>
                            Check out original playlists hand-picked by
                            our team of experts, or stream guest playlists
                            curated by the artists you love.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

    const landingPageContainerFour = (
        <div className='landing-page-container-four'>
            <div>
                <div className='row'>
                    <div>
                        <nav aria-label="Footer Navigation" className="row">
                            <div>
                                <span>Get Started</span>
                                <ul>
                                    <li><Link to='/soon'>Download Webb</Link></li>
                                    <li><Link to='/soon'>Pricing</Link></li>
                                    <li><Link to='/soon'>Import Playlists</Link></li>
                                    <li><Link to='/soon'>Download Webb</Link></li>
                                    <li><Link to='/soon'>Download Webb</Link></li>
                                </ul>
                            </div>
                            <div>
                                <span>Discover Webb</span>
                                <ul>
                                    <li><Link to='/soon'>About</Link></li>
                                    <li><Link to='/soon'>Explore the App</Link></li>
                                    <li><Link to='/soon'>Import Playlists</Link></li>
                                    <li><Link to='/soon'>For Artists</Link></li>
                                    <li><Link to='/soon'>For Music</Link></li>
                                </ul>
                            </div>
                            <div>
                                <span>Account</span>
                                <ul>
                                    <li><Link to='/register'>Sign Up</Link></li>
                                    <li><Link to='/soon'>Redeem Voucher</Link></li>
                                    <li><Link to='/soon'>Redeem Giftcard</Link></li>
                                    <li><Link to='/soon'>Manage Account</Link></li>
                                    <li><Link to='/soon'>Store</Link></li>
                                </ul>
                            </div>
                            <div>
                                <span>Company</span>
                                <ul>
                                    <li><Link to='/soon'>What is Webb?</Link></li>
                                    <li><Link to='/soon'>Partners</Link></li>
                                    <li><Link to='/soon'>Careers</Link></li>
                                    <li><Link to='/soon'>Press</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='row'>
                    <p>This web app was developed by Deepanshu Saini, to practice React and Node after completing courses on them.</p>
                </div>
                <hr></hr>
                <div className='links'>
                    <nav>
                        <span><Link to='/soon'>Privacy Policy</Link></span>
                        <span><Link to='/soon'>Terms and Conditions</Link></span>
                        <span><Link to='/soon'>Accessibility Statement</Link></span>
                        <span><Link to='/soon'>Contact</Link></span>
                    </nav>
                </div>
            </div>
        </div>
    )

    return <>
        {landingPageContainerOne}
        {landingPageContainerTwo}
        {landingPageContainerThree}
        {landingPageContainerFour}
    </>
}

export default LandingPage;