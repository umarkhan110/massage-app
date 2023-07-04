import React from 'react'

const Register = () => {
  return (
    <div class="wrapper" data-url="https://www.bigtoe.yoga/staging/booking/session" data-crt="register.html">
    <div class="main-wrap-append">
<div class="login-area-main app-view-screen">
    <div class="book-now-block">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 book-now-block-wrap">
                    <div class="title">
                        <a href="jvascript:void(0)" class="back-btn hide" ><img src="../assets/css/images/angle-left-solid.html" alt="" /></a>
                        <h2>Book In-home Session in Seconds</h2>
                    </div>
                    <div class="login-container arvind_widget_login-form">
                                                                                                                                        <p class="error_validation" style={{display:"none"}}></p>
                        <form id="loginform" class="arvind_widget_contact-form login" name="form-validation" method="POST" action="https://www.bigtoe.yoga/booking/register/process">
                        <input type="hidden" name="_token" value="8UerIPi4wBDt8X30JtkNG5F1kWnbGjubvjVwXRqQ" />
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="hidden" name="process-step" class="form-control" required value="personal_details" />
                                            <input type="hidden" name="student_id" id="student_id" class="form-control" required value="" />
                                            
                                            <label class="control-label">First Name*</label>
                                           
                                            <input type="text" name="firstname" id="personal_firstname" class="form-control" required value="" placeholder="Enter First Name" />
                                            <span class="inputError"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <label class="control-label">Last Name*</label>
                                            <input maxlength="100" type="text" name="lastname" id="personal_lastname" required="required" class="form-control" placeholder="Enter Last Name" />
                                            <span class="inputError"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <label class="control-label">Email address*</label>
                                            <input maxlength="100" type="email" name="email" id="personal_email" required="required" class="form-control" placeholder="Enter Email Address" />
                                            <span class="inputError"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <label class="control-label">Phone Number*</label>
                                            <input type="tel" name="phone_no" id="personal_phone_no"  required="required"  class="form-control" value=""  placeholder="(555) 555-5555" />
                                            <span class="inputError"></span>
                                        </div>
                                        <input type="hidden" name="country_code" id="country_code" value="1" />
                                        <input type="hidden" name="phone_no_format" id="phone_no_format" value="" />
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <label class="control-label">Your Gender*</label>
                                            <select name="gender" id="personal_gender" class="form-control" required="required">
                                                <option value="">Select Option</option> 
                                                <option value="Male">Male</option> 
                                                <option value="Female">Female</option>
                                            </select>
                                            <span class="inputError"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Your Age*</label>
                                            <select class="form-control" name="age_range"  id="personal_age_range" required>   
                                                <option value="">Select Option</option> 
                                                <option value="18-19">18-19</option> 
                                                <option value="20-29">20-29</option> 
                                                <option value="30-39">30-39</option> 
                                                <option value="40-49">40-49</option> 
                                                <option value="50-59">50-59</option> 
                                                <option value="60-69">60-69</option> 
                                                <option value="70-79">70-79</option> 
                                                <option value="80-89">80-89</option> 
                                                <option value="90+">90+</option>                                                        
                                            </select>
                                            <span class="inputError"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <label class="control-label">Choose any password*</label>
                                            <input maxlength="100" type="password" name="password" id="password" required="required" class="form-control" placeholder="Choose any password" />
                                            <span class="inputError"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-default com-btn-view arvind_widget_btn" id="btnSubmit">Continue</button>                                    
                                </div>
                                <div class="loging-bottom-txt" id="loginterms">
                                    Have account? <a href="signin"><span>Log In</span></a>
                                </div> 
                            </div>                                       
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

export default Register