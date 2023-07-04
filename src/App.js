import "./css/style.css"
import "./css/login.css"
import "./css/custom-menu.css"
import "./css/session-book.css"

function App() {
  return (
    <>
     
    <div class="preloades" style={{display:"none"}}> 
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div> 
        </div>
    </div>



    <div class="wrapper" data-url="https://www.bigtoe.yoga/booking/session" data-crt="index.html">
        <header class="header  ">
            <nav class="navbar navbar-default">
                <div class="container">
                    
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <a class="navbar-brand" href="index.html"><img src="/assets/images/logo.png" alt="Logo" /></a>
                    </div>

                    
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav menu-nav">
                            <li class="list-view ">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Massage<b class="caret"></b></a>
                                <ul class="dropdown-menu multi-level">
                                    <li><a href="in-home-massage.html">In-home Massage</a></li>
                                    <li><a href="mobile-massage.html">Mobile Massage</a></li>
									<li class="dropdown-submenu list-view">
											<a href="#" class="dropdown-toggle" data-toggle="dropdown">Massage Types</a>
											<ul class="dropdown-menu list-view">
											 <a class="dropdown-item" href="massage-types/swedish-massage.html">Swedish</a>
											<a class="dropdown-item" href="massage-types/deep-tissue-massage.html">Deep Tissue</a>
											<a class="dropdown-item" href="massage-types/prenatal-massage.html">Prenatal</a>
											<a class="dropdown-item" href="massage-types/lymphatic-massage.html">Lymphatic</a>
											<a class="dropdown-item" href="massage-types/sports-massage.html">Sports</a>
                                            <a class="dropdown-item" href="massage-types/reflexology-massage.html">Reflexology</a>
											<a class="dropdown-item" href="massage-types/couples-massage.html">Couples</a>
											   
											</ul>
                                    </li>
                                    <li class="dropdown-submenu list-view">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pricing</a>
                                        <ul class="dropdown-menu list-view">
                                            <a class="dropdown-item" href="massage-atlanta-ga.html">Atlanta</a>
                                            <a class="dropdown-item" href="massage-austin.html">Austin</a>
                                            <a class="dropdown-item" href="massage-boston-ma.html">Boston</a>
                                            <a class="dropdown-item" href="massage-chicago-il.html">Chicago</a>
                                            <a class="dropdown-item" href="massage-dallas.html">Dallas</a>
                                            <a class="dropdown-item" href="massage-detroit-mi.html">Detroit</a>
                                            <a class="dropdown-item" href="massage-houston.html">Houston</a>
                                            <a class="dropdown-item" href="massage-jacksonville-fl.html">Jacksonville</a>
                                            <a class="dropdown-item" href="massage-las-vegas.html">Las Vegas</a>
                                            <a class="dropdown-item" href="massage-los-angeles.html">Los Angeles</a>
                                            <a class="dropdown-item" href="massage-miami.html">Miami</a>
                                            <a class="dropdown-item" href="massage-new-york.html">Greater New York</a>
                                            <a class="dropdown-item" href="massage-orlando-fl.html">Orlando</a>
                                            <a class="dropdown-item" href="massage-philadelphia-pa.html">Philadelphia</a>
                                            <a class="dropdown-item" href="massage-phoenix.html">Phoenix</a>
                                            <a class="dropdown-item" href="massage-san-antonio-tx.html">San Antonio</a>
                                            <a class="dropdown-item" href="massage-san-diego.html">San Diego</a>
                                            <a class="dropdown-item" href="massage-san-francisco.html">San Francisco Bay</a>
                                            <a class="dropdown-item" href="massage-tampa-fl.html">Tampa Bay</a>
                                            <a class="dropdown-item" href="massage-washington-dc.html">Washington DC</a>
                                        </ul>
                                    </li>
									
								
									
                                </ul>
								

                            </li>
							
							
							
							<li class="list-view ">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Yoga<b class="caret"></b></a>
                                <ul class="dropdown-menu multi-level">
                                    <li><a href="private-yoga.html">Private Yoga</a></li>
 									<li class="dropdown-submenu list-view">
											<a href="#" class="dropdown-toggle" data-toggle="dropdown">Yoga Types</a>
											<ul class="dropdown-menu list-view">
											 <a class="dropdown-item" href="yoga-types/flow-yoga.html">Flow</a>
											<a class="dropdown-item" href="yoga-types/alignment-yoga.html">Alignment</a>
											<a class="dropdown-item" href="yoga-types/restorative-yoga.html">Restorative</a>
											<a class="dropdown-item" href="yoga-types/prenatal-yoga.html">Prenatal</a>
											<a class="dropdown-item" href="yoga-types/meditation.html">Meditation</a>
											   
											</ul>
                                    </li>
									<li class="dropdown-submenu list-view">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pricing</a>
                                        <ul class="dropdown-menu list-view">
                                            <a class="dropdown-item" href="private-yoga-los-angeles.html">Los Angeles</a>
                                    <a class="dropdown-item" href="private-yoga-new-york.html">Greater New York</a>
                                    <a class="dropdown-item" href="private-yoga-miami.html">Miami</a>
                                    <a class="dropdown-item" href="private-yoga-houston.html">Houston</a>
                                    <a class="dropdown-item" href="private-yoga-las-vegas.html">Las Vegas</a>
                                    <a class="dropdown-item" href="private-yoga-san-francisco.html">San Francisco Bay</a>
                                    <a class="dropdown-item" href="private-yoga-san-diego.html">San Diego</a>
                                    <a class="dropdown-item" href="private-yoga-phoenix.html">Phoenix</a>
                                    <a class="dropdown-item" href="private-yoga-dallas.html">Dallas</a>
                                    <a class="dropdown-item" href="private-yoga-austin.html">Austin</a>
                                    <a class="dropdown-item" href="private-yoga-philadelphia-pa.html">Philadelphia</a>
								    <a class="dropdown-item" href="private-yoga-chicago-il.html">Chicago</a>
                                        </ul>
                                    </li>
									
						           
									
                                </ul>
								

                            </li>
						
						
	                           		
							
                            <li>
                                <a href="LMT.html">Become a Provider</a>
                            </li>
                            <li>
                                <a href="events.html">Organize an Event</a>
                            </li>
							
							<li>
                                <a href="blog.html">Blog</a>
                            </li>
  
                            <li class=""><a href="book-session.html" class="com-btn-view bookingclass">Book Now</a></li>
                            <li class="mobile_only">
                                <a href="https://apps.apple.com/us/app/bigtoe-yoga/id1198583047" target="_blank" >
                                    <img src="/assets/images/app-store.png" />
                                </a>
                                 <a href="https://play.google.com/store/apps/details?id=fit.bigtoe.bigtoeyoga&amp;hl=en" target="_blank" >
                                    <img src="/assets/images/google-play.png" />
                                </a> 
                            </li>
                        </ul>

                    </div>
                                                      
                </div>
                
            </nav>
        </header>
                <div class="banner center-view">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xs-12 showxs">
                        <div class="content-view fadeInLeft">
                            <h1>The easiest way to book</h1>
                            <h1>
                        <span>
                             <a href="#" class="typewrite" data-period="500" data-type='["Massage on Demand","Private Yoga Classes"]'>
                                <span class="wrap"></span>
                              </a>
                        </span>
                            </h1>
                            <h1>in seconds</h1>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                        <div class="full-view-img">
                            <img src="/assets/images/hero.gif" class="fadeInLeftBo" alt="hero" />
                        </div>
                    </div>
                    <div class="col-sm-6 col-xs-12 hiddenxs">
                        <div class="content-view fadeInLeft">
                            <h1>The easiest way to book</h1>
                            <h1>
                        <span>
                             <a href="#" class="typewrite" data-period="500" data-type='["Massage on Demand","Private Yoga Classes"]'>
                                <span class="wrap"></span>
                              </a>
                        </span>
                            </h1>
                            <h1>in seconds</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pad-block-view">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title">
                            <h2>Seamless booking</h2>
                            <p>Access a network of Yoga teachers and massage therapists at affordable prices</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <div class="imagebox">
                            <div class="bg-img appointments">
                                <img src="/assets/images/100.png" alt="3" />
                            </div>
                            <div class="content-block">
                                <h3>Massage</h3>
                                <p>Book an in-home massage session in seconds.Choose from Deep Tissue, Swedish, Sports, Lymphatic, Reflexology & Prenatal.</p>
                                <a class="com-btn-view" href="in-home-massage.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                   <div class="col-sm-6 col-xs-12">
                        <div class="imagebox">
                            <div class="bg-img classes">
                                <img src="/assets/images/100.png" alt="100" />
                            </div>
                            <div class="content-block">
                                <h3>Private Yoga</h3>
                                <p>Book a private Yoga class in seconds. Choose from Flow, Alignment, Restorative, Prenatal & Meditation.</p>
                                <a class="com-btn-view" href="appointments.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pad-block-view studios">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title mr-btm">
                            <h2>All self-care professionals in one place</h2>
                            <p>We provide you the resources - be it the Yoga teachers or massage therapists - and the tools to find and book their sessions easily. An app that understands your fitness and wellness needs.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 container-split">
                        <div class="images-wrap">
                            <img src="/assets/images/try-it.png" id="w-node-bce4b176c38b-b176c381" sizes="(max-width: 479px) 42vw, (max-width: 767px) 26vw, (max-width: 991px) 27vw, 16vw" alt="Image 1" />
                            <img src="/assets/images/5c9222668f811ac981de17dc_IMG_3387.gif" id="w-node-bce4b176c38c-b176c381" sizes="(max-width: 479px) 42vw, (max-width: 767px) 26vw, (max-width: 991px) 27vw, 16vw" alt="Image 2" />
                            <img src="/assets/images/5c922507e8b0db17ce8c00eb_Webp.net-gifmaker.gif" alt="Image 3" />
                            <img src="/assets/images/5c92253017f49d17259cedc9_IMG_3383-p-5001.png" id="w-node-bce4b176c38d-b176c381" sizes="(max-width: 479px) 42vw, (max-width: 767px) 26vw, (max-width: 991px) 27vw, 16vw" alt="Image 4" />
                            <img src="/assets/images/5c9b746f94b20f95bfed865f_IMG_3381.png" alt="Image 5" />

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pad-block-view">
            <div class="testimonials">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="title mr-btm">
                                <h2>Testimonials</h2>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="owl-carousel owl-theme" id="testimonial">
                                <div class="item">
                                    <div class="clients-comment">
                                        <div class="name-rate">
                                            <h3>Casey K.</h3>
                                            <ul class="inline">
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>Absolutely love it! As an artist with part-time gigs, I find it expensive to buy memberships or class packs that expire. With affordable classes and credits that don't expire, Bigtoe was just what I needed. Now I recommend it to all my friends!</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="clients-comment">
                                        <div class="name-rate">
                                            <h3>Sam B.</h3>
                                            <ul class="inline">
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p> Imagine going to Los Angeles and getting an in-room massage and then coming back to New York and using the same app to get a great private yoga class. These guys have spoiled me big time and I'm loving it!</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="clients-comment">
                                        <div class="name-rate">
                                            <h3>Priscilla M.</h3>
                                            <ul class="inline">
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>For those looking to discover their next favorite teacher, this is THE app! I'm super picky about my classes and teachers and Bigtoe always helps me find the ones that work the best for me. And with their prices and policies, you just can't go wrong!</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="clients-comment">
                                        <div class="name-rate">
                                            <h3>Markus M.</h3>
                                            <ul class="inline">
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>I used to think that I need to "make it" with my career and stuff before focusing on self-care. Not any more. With the Bigtoe app, I'm able to finally get what I knew I needed and at prices that work for my situation. Thank you for making my life better!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pad-block">
            <div class="app-view">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="app-store-view">
                                <h2>Let's begin!</h2>
                                <div class="app-download">
                                    <a href="https://apps.apple.com/us/app/bigtoe-yoga/id1198583047">
                                        <img src="/assets/images/app-store.png" alt="app-store" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=fit.bigtoe.bigtoeyoga&amp;hl=en" target="_blank">
                                        <img src="/assets/images/google-play.png" alt="google-play" />
                                    </a>
                                </div>
                            </div>	
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="responsive-img">
                                <img src="/assets/images/app-slide.png" alt="app-slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="srick-store visible-xs">
            <a href="https://apps.apple.com/us/app/bigtoe-yoga/id1198583047">
                <img src="/assets/images/app-store.png" alt="app-store" />
            </a>
             <a href="https://play.google.com/store/apps/details?id=fit.bigtoe.bigtoeyoga&amp;hl=en" target="_blank">
                <img src="/assets/images/google-play.png" alt="google-play" />
            </a> 	
        </div>
        <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <div class="foot-link">
                                <a class="foot-logo" href="index.html"><img src="/assets/images/logo.png" alt="Logo" /></a>
                                <div class="footer-copyright">
                                    <a href="privacy.html" class="copyright-links">Privacy Policy</a>
                                    <div class="copyright-text"> | </div>
                                    
                                    <a href="contact.html" class="copyright-links">Contact</a>
                                    <div class="copyright-text">© 2022 Bigtoe Pose Inc</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="footer-nav">
                                <ul class="nav navbar-nav menu-nav">
                                <li class="list-view ">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Massage<b class="caret"></b></a>
                                    <ul class="dropdown-menu multi-level">
                                        <li><a href="in-home-massage.html">In-home Massage</a></li>
                                        <li><a href="mobile-massage.html">Mobile Massage</a></li>
                                        <li class="dropdown-submenu list-view">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Massage Types</a>
                                                <ul class="dropdown-menu list-view">
                                                <a class="dropdown-item" href="massage-types/swedish-massage.html">Swedish</a>
                                                <a class="dropdown-item" href="massage-types/deep-tissue-massage.html">Deep Tissue</a>
                                                <a class="dropdown-item" href="massage-types/prenatal-massage.html">Prenatal</a>
                                                <a class="dropdown-item" href="massage-types/lymphatic-massage.html">Lymphatic</a>
                                                <a class="dropdown-item" href="massage-types/sports-massage.html">Sports</a>
                                                <a class="dropdown-item" href="massage-types/reflexology-massage.html">Reflexology</a>
                                                <a class="dropdown-item" href="massage-types/couples-massage.html">Couples</a>
                                                
                                                </ul>
                                        </li>
                                        <li class="dropdown-submenu list-view">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pricing</a>
											 <ul class="dropdown-menu list-view">
												<a class="dropdown-item" href="massage-atlanta-ga.html">Atlanta</a>
												<a class="dropdown-item" href="massage-austin.html">Austin</a>
												<a class="dropdown-item" href="massage-boston-ma.html">Boston</a>
												<a class="dropdown-item" href="massage-chicago-il.html">Chicago</a>
												<a class="dropdown-item" href="massage-dallas.html">Dallas</a>
												<a class="dropdown-item" href="massage-detroit-mi.html">Detroit</a>
												<a class="dropdown-item" href="massage-houston.html">Houston</a>
												<a class="dropdown-item" href="massage-jacksonville-fl.html">Jacksonville</a>
												<a class="dropdown-item" href="massage-las-vegas.html">Las Vegas</a>
												<a class="dropdown-item" href="massage-los-angeles.html">Los Angeles</a>
												<a class="dropdown-item" href="massage-miami.html">Miami</a>
												<a class="dropdown-item" href="massage-new-york.html">Greater New York</a>
												<a class="dropdown-item" href="massage-orlando-fl.html">Orlando</a>
												<a class="dropdown-item" href="massage-philadelphia-pa.html">Philadelphia</a>
												<a class="dropdown-item" href="massage-phoenix.html">Phoenix</a>
												<a class="dropdown-item" href="massage-san-antonio-tx.html">San Antonio</a>
												<a class="dropdown-item" href="massage-san-diego.html">San Diego</a>
												<a class="dropdown-item" href="massage-san-francisco.html">San Francisco Bay</a>
												<a class="dropdown-item" href="massage-tampa-fl.html">Tampa Bay</a>
												<a class="dropdown-item" href="massage-washington-dc.html">Washington DC</a>
											</ul>
                                        </li>
                                    </ul>
                                </li>                               
                                
                                <li class="list-view ">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Yoga<b class="caret"></b></a>
                                    <ul class="dropdown-menu multi-level">
                                       <li><a href="private-yoga.html">Private Yoga</a></li>
                                        <li class="dropdown-submenu list-view">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Yoga Types</a>
                                                <ul class="dropdown-menu list-view">
                                                <a class="dropdown-item" href="yoga-types/flow-yoga.html">Flow</a>
                                                <a class="dropdown-item" href="yoga-types/alignment-yoga.html">Alignment</a>
                                                <a class="dropdown-item" href="yoga-types/restorative-yoga.html">Restorative</a>
                                                <a class="dropdown-item" href="yoga-types/prenatal-yoga.html">Prenatal</a>
                                                <a class="dropdown-item" href="yoga-types/meditation.html">Meditation</a>
                                                
                                                </ul>
                                        </li>
                                        <li class="dropdown-submenu list-view">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pricing</a>
                                            <ul class="dropdown-menu list-view">
                                                <a class="dropdown-item" href="private-yoga-los-angeles.html">Los Angeles</a>
                                        <a class="dropdown-item" href="private-yoga-new-york.html">Greater New York</a>
                                        <a class="dropdown-item" href="private-yoga-miami.html">Miami</a>
                                        <a class="dropdown-item" href="private-yoga-houston.html">Houston</a>
                                        <a class="dropdown-item" href="private-yoga-las-vegas.html">Las Vegas</a>
                                        <a class="dropdown-item" href="private-yoga-san-francisco.html">San Francisco Bay</a>
                                        <a class="dropdown-item" href="private-yoga-san-diego.html">San Diego</a>
                                        <a class="dropdown-item" href="private-yoga-phoenix.html">Phoenix</a>
                                        <a class="dropdown-item" href="private-yoga-dallas.html">Dallas</a>
                                        <a class="dropdown-item" href="private-yoga-austin.html">Austin</a>
                                        <a class="dropdown-item" href="private-yoga-philadelphia-pa.html">Philadelphia</a>
                                        <a class="dropdown-item" href="private-yoga-chicago-il.html">Chicago</a>
                                            </ul>
                                        </li>
                                        
                                      
                                        
                                    </ul>
                                    

                                </li>		
                                
                                <li>
                                    <a href="LMT.html">Become a Provider</a>
                                </li>
                                <li>
                                    <a href="events.html">Events</a>
                                </li>
                             <li>
                                   <a href="blog.html">Blog</a>
                                </li>
                            </ul>
                            </div>
                            <div class="social-view">
                                <ul>
                                
                                    <li>
                                        <a href="https://www.instagram.com/bigtoe.yoga/">
                                            <img src="/assets/images/instagram.svg" alt="instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
            
            <div id="private_header">
    <header class="login-header">
        <div class="back-btn-main" data-url="https://www.bigtoe.yoga/book-session">
                            <a href="jvascript:void(0)" data-back-section="address_main_block" class="back-btn hide back-link" id="add_add_show_hide"><i class="fa fa-arrow-left" style={{fontSize:"36px"}}></i></a>
                    </div>
        <div class="container">
            <div class="col-xs-12 text-center">
                <a class="logo-brand" href="index.html">
                    <img src="public/assets/images/logo.png" alt="Logo" />
                </a>
            </div>
        </div>
                <div class="right-top-main">
            <a href="booking/register.html" class="register-link hidden-sm hidden-xs" >Sign Up</a>
            <a href="booking/signin.html" class="login-link hidden-sm hidden-xs">Login</a>
            <a href="booking/register.html" class="login-link responsive visible-sm visible-xs">Sign Up</a>
        </div>
            </header>
   
  
    <div class="preloades" id="preloades" style={{display:"none"}}>
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div> 
        </div>
    </div>



    <div class="wrapper" data-url="https://www.bigtoe.yoga/staging/booking/session" data-crt="book-session.html">
        <div class="main-wrap-append">
    <div class="login-area-main app-view-screen">
        <div class="book-now-block">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 book-now-block-wrap">
                        <div class="title">
                            <a href="jvascript:void(0)" class="back-btn hide" ><img src="assets/css/images/angle-left-solid.html" alt="" /></a>
                            <h2>Where would you like us to meet you?</h2>
                        </div>
                        <div class="login-container arvind_widget_login-form">
                            <p class="error_validation" style={{display:"none"}}></p>
                            {/* <!-- <form id="loginform" class="arvind_widget_contact-form login" name="form-validation" method="POST" action="https://www.bigtoe.yoga/booking/login/process">
                                <input type="hidden" name="_token" value="8UerIPi4wBDt8X30JtkNG5F1kWnbGjubvjVwXRqQ"> --> */}
                            <div class="arvind_widget_contact-form login zipbox">
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                        <div class="text-center ziptop-text">
                                            <strong>Check provider availability in your area</strong><br/>
                                            <span> Please enter your zipcode</span>
                                        </div>
                                        <div class="form-group extrafield text-center">                                            
                                            <input inputmode="numeric" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  name="zipcode1" id="zipcode1" class="col-md-1 col-sm-2 col-xs-2 form-control" required placeholder="X" />
                                        
                                            <input inputmode="numeric" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  name="zipcode2" id="zipcode2" class="col-md-1 col-sm-2 col-xs-2 form-control" required placeholder="X" />
                                        
                                            <input inputmode="numeric" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  name="zipcode3" id="zipcode3" class="col-md-1 col-sm-2 col-xs-2 form-control" required placeholder="X" />
                                        
                                            <input inputmode="numeric" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  name="zipcode4" id="zipcode4" class="col-md-1 col-sm-2 col-xs-2 form-control" required placeholder="X" />
                                        
                                            <input inputmode="numeric" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  name="zipcode5" id="zipcode5" class="col-md-1 col-sm-2 col-xs-2 form-control" required placeholder="X" />
                                            <div class="col-sm-2 col-xs-2 zipbtn-box">
                                                <button type="button" id="find_zip" class="btn btn-default validatezip com-btn-view arvind_widget_btn">Go</button> 
                                            </div>
                                        </div>
                                        
                                        <div class="col-sm-12 col-xs-12 zipcode-res-box">
                                            <strong class="zipresponse"></strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- </form> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    </div></>
  );
}

export default App;
