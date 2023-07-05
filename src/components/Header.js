import React from 'react'

const Header = () => {
  return (
    <header class="header  ">
            <nav class="navbar navbar-default">
                <div class="container">
                    
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <a class="navbar-brand" href="/"><img src="/assets/images/logo.png" alt="Logo" /></a>
                    </div>

                    
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav menu-nav">
                            <li class="list-view ">
                                {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Massage<b class="caret"></b></a> */}
                                <ul class="dropdown-menu multi-level">
                                    <li><a href="in-home-massage.html">In-home Massage</a></li>
                                    <li><a href="mobile-massage.html">Mobile Massage</a></li>
									<li class="dropdown-submenu list-view">
											{/* <a href="#" class="dropdown-toggle" data-toggle="dropdown">Massage Types</a> */}
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
                                        {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pricing</a> */}
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
                                {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Yoga<b class="caret"></b></a> */}
                                <ul class="dropdown-menu multi-level">
                                    <li><a href="private-yoga.html">Private Yoga</a></li>
 									<li class="dropdown-submenu list-view">
											{/* <a href="#" class="dropdown-toggle" data-toggle="dropdown">Yoga Types</a> */}
											<ul class="dropdown-menu list-view">
											 <a class="dropdown-item" href="yoga-types/flow-yoga.html">Flow</a>
											<a class="dropdown-item" href="yoga-types/alignment-yoga.html">Alignment</a>
											<a class="dropdown-item" href="yoga-types/restorative-yoga.html">Restorative</a>
											<a class="dropdown-item" href="yoga-types/prenatal-yoga.html">Prenatal</a>
											<a class="dropdown-item" href="yoga-types/meditation.html">Meditation</a>
											   
											</ul>
                                    </li>
									<li class="dropdown-submenu list-view">
                                        {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pricing</a> */}
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
                                <a href="/">Become a Provider</a>
                            </li>
                            <li>
                                <a href="/">Organize an Event</a>
                            </li>
							
							<li>
                                <a href="/">Blog</a>
                            </li>
  
                            <li class=""><a href="/book" class="com-btn-view bookingclass">Book Now</a></li>
                            {/* <li class="mobile_only">
                                <a href="https://apps.apple.com/us/app/bigtoe-yoga/id1198583047" target="_blank" >
                                    <img src="/assets/images/app-store.png" />
                                </a>
                                 <a href="https://play.google.com/store/apps/details?id=fit.bigtoe.bigtoeyoga&amp;hl=en" target="_blank" >
                                    <img src="/assets/images/google-play.png" />
                                </a> 
                            </li> */}
                        </ul>

                    </div>
                                                      
                </div>
                
            </nav>
        </header>
  )
}

export default Header