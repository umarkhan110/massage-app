import React from 'react'

const Login = () => {
  return (
    <div className="wrapper" data-url="https://www.bigtoe.yoga/booking/session" data-crt="login.html">
    <div className="main-wrap-append">
    <div className="arvind_widget_banner app-view-screen">
    <div className="">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="arvind_widget_contact-view arvind_widget_login-form">
                        <div className="row arvind_widget_fb_btn">
                            <script async defer crossorigin="anonymous" src="../../connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1534419386710031&autoLogAppEvents=1"></script>
                            <button type="button" className="arvind_widget_facebookLoginBtn" onclick="fb_login();">
                                <svg className="arvind_widget_fb_svg" width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.98499 10.6409H6.3155V20.6602H2.27099V10.6409H0.347412V7.11973H2.27099V4.84113C2.27099 3.21169 3.0265 0.660156 6.3515 0.660156L9.34741 0.672997V4.09089H7.17368C6.81713 4.09089 6.31577 4.2734 6.31577 5.05069V7.12301H9.33835L8.98499 10.6409Z" fill="white"/>
                                </svg>
                                &nbsp;
                                <span> Log In With Facebook</span>
                            </button>
                            <div id="fb-root"></div>

                        </div>
                        <div className="arvind_widget_textalign">
                            <span><p>or</p></span>
                        </div>
                                                                                <p className="error_validation" style={{display:"none"}}></p>
                        <form id="loginform" className="arvind_widget_contact-form login" name="form-validation" method="POST" action="https://www.bigtoe.yoga/booking/session">
                            <input type="hidden" name="_token" value="8UerIPi4wBDt8X30JtkNG5F1kWnbGjubvjVwXRqQ" />
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input id="validation-email" type="email" name="email" className="form-control" required="" placeholder="Email" data-validation="[EMAIL]" />

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input id="validation-password" type="password" name="password" className="form-control" required="" placeholder="Password" data-validation="[L>=6]" data-validation-message="$ must be at least 6 characters" />

                                    </div>
                                </div>
                            </div>
                            <div className="arvind_widget_forgot-password">
                                <a href="forgotpassword.html">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-default com-btn-view arvind_widget_btn">Login</button>                                    
                            </div>
                            <br />
                                <div className="arvind_widget_termsConditions">
                                    By signing up, you agree to our <a href="../termsofuse.html"><span>terms of use</span></a> and <a href="../privacy.html"><span>privacy policy</span></a>
                                </div>
                                <br />
                                    <br />
                                        </form>

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

export default Login