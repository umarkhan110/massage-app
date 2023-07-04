import React from 'react'

const Book = () => {
  return (
    <div id="private_header">
    <header class="login-header">
        <div class="back-btn-main" data-url="https://www.bigtoe.yoga/book-session">
                            <a href="jvascript:void(0)" data-back-section="address_main_block" class="back-btn hide back-link" id="add_add_show_hide"><i class="fa fa-arrow-left" style={{fontSize:"36px"}}></i></a>
                    </div>
        <div class="container">
            <div class="col-xs-12 text-center">
                <a class="logo-brand" href="/">
                    <img src="/assets/images/logo.png" alt="Logo" />
                </a>
            </div>
        </div>
                <div class="right-top-main">
            <a href="register" class="register-link hidden-sm hidden-xs" >Sign Up</a>
            <a href="/signin" class="login-link hidden-sm hidden-xs">Login</a>
            <a href="register" class="login-link responsive visible-sm visible-xs">Sign Up</a>
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
    </div>
  )
}

export default Book