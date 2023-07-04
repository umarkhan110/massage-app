var currentUrl = $('.urlpath:first-child').text();
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
      $('#error-email').show();
      $('#error-email').text('This email is not vaild');
      error = 1;
  } else {
      $('#error-email').hide();
      $('#error-email').text('');
      error = 0;
  }
  return true;
}

function loginbookinguser(){
    //alert('comes here');
    var email = $('#loginBookingModal').find('#loginform').find('#validation-email').val();
    var password = $('#loginBookingModal').find('#loginform').find('#validation-password').val();
    
    if (email == '') {
        $('#login_email_error').show();
        $('#login_email_error').text('This field is empty');
        return false;
    } else {
        $('#login_email_error').hide();
        $('#login_email_error').text('');
    }

    if (validateEmail(email)) {

    } else {
        $('#login_email_error').hide();
        $('#login_email_error').text('');
    }

    if (password == '') {
        $('#login_password_error').show();
        $('#login_password_error').text('This field is empty');
        return false;
    } else {
        $('#login_password_error').hide();
        $('#login_password_error').text('');
    }

    var csrf_token = $('meta[name="csrf-token"]').attr('content');
    //$('.preloade').show();

    var skill_category_name = $('#skill_category_name').val();
    var skillIDselected = $('#skillIDselected').val();
    var skillIDvalue = $('#skillIDvalue').val();
    var price1 = $('#price1').val();
    var genderpref = $('.gender_preference').val();
    var noofpeop = $('.no_of_people').val();
    var slotssel = $('#slotssel').val();
    var dateofbooking = $('.change-filter-view .current-date').text();
    var data_tax = $('.data_tax').val();
    var data_tip = $('.data_tip').val();
    //alert('skill_category_name'+skill_category_name+'skillIDvalue'+skillIDvalue+'price1'+price1+'genderpref'+genderpref);
    console.log('comes here1');
    
     $.ajax({
          type: "POST",    
          url: currentUrl + "/booking/session",
          data:{'email':email,'password':password,'guestuser':'yes','skill_category_name': skill_category_name, 'skillIDselected': skillIDselected, 'price1': price1, 'genderpref': genderpref, 'noofpeop': noofpeop, 'slotssel': slotssel, 'dateofbooking': dateofbooking, 'skillIDvalue': skillIDvalue, 'data_tax': data_tax, 'data_tip': data_tip,'_token':csrf_token},
          dataType: 'json',
          success: function (result) {
              //console.log(response);
              if (result.msg == 'success') {
                  console.log(result);
                  $('.main-wrap-append').html(result.html);
                  setTimeout(function () {
                      $('.preloades').hide();
                      $('.preloade').hide();
                      $('.modal-backdrop').remove();
                  }, 1000);

                  setTimeout(function()  {
                      if($('#phone').length > 0){
                          document.getElementById('phone').addEventListener('input', function (e) {
                              var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                              e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                          });
                      }
                  }, 2000);

                  if(result.url != ''){
                    window.location.href = currentUrl + "/"+result.url;
                  }

                  $("html, body").animate({scrollTop: 0}, "fast");
              } else {
                  if (result.msg) {
                      $('.error_validation').show();
                      $('.error_validation').html(result.msg);
                      setTimeout(function () {
                          $('.preloade').hide();
                      }, 1000);
                  }
              }
          }
      });

}

function signupuser(){

  var first_name = $('#firstname').val();
  var last_name = $('#lastname').val();
  var email = $('#email').val();
  var password = $('#password').val();
  var confirmpassword = $('#confirmpassword').val();
  if (email == '') {
          $('#error-email').show();
          $('#error-email').text('This field is empty');
          return false;
      } else {
          $('#error-email').hide();
          $('#error-email').text('');
      }

      if (validateEmail(email)) {

      } else {
          $('#error-email').hide();
          $('#error-email').text('');
      }

      if (password == '') {
          $('#reg_password_error').show();
          $('#reg_password_error').text('This field is empty');
          return false;
      } else {
          $('#reg_password_error').hide();
          $('#reg_password_error').text('');
      }

      if (password != '' && confirmpassword != '') {
          if (password != confirmpassword) {
              $('#reg_cpassword_error').show();
              $('#reg_cpassword_error').text("The two password values are not matching.");
              return false;
          } else {
              $('#reg_cpassword_error').hide();
          }
      }

      var skill_category_name = $('#skill_category_name').val();
      var skillIDselected = $('#skillIDselected').val();
      var skillIDvalue = $('#skillIDvalue').val();
      var price1 = $('#price1').val();
      var genderpref = $('.gender_preference').val();
      var noofpeop = $('.no_of_people').val();
      var slotssel = $('#slotssel').val();
      var dateofbooking = $('.change-filter-view .current-date').text();
      var data_tax = $('.data_tax').val();
      var data_tip = $('.data_tip').val();
      
      var csrf_token = $('meta[name="csrf-token"]').attr('content');

      $('.preloade').show();
      $.ajax({
          type: "POST",    
          url: currentUrl + "/registerpost",
          data:{'first_name':first_name,'last_name':last_name,'email':email,'password':password,'confirmpassword':confirmpassword,'guestuser':'yes','skill_category_name': skill_category_name, 'skillIDselected': skillIDselected, 'price1': price1, 'genderpref': genderpref, 'noofpeop': noofpeop, 'slotssel': slotssel, 'dateofbooking': dateofbooking, 'skillIDvalue': skillIDvalue, 'data_tax': data_tax, 'data_tip': data_tip,'_token':csrf_token},
          dataType: 'json',
          success: function (result) {
              //console.log(response);
              if (result.msg == 'success') {
                  console.log(result);
                  $('.main-wrap-append').html(result.html);
                  setTimeout(function () {
                      $('.preloades').hide();
                      $('.preloade').hide();
                      $('.modal-backdrop').remove();
                  }, 1000);

                  setTimeout(function()  {
                      if($('#phone').length > 0){
                          document.getElementById('phone').addEventListener('input', function (e) {
                              var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                              e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                          });
                      }
                  }, 2000);

                  if(result.url != ''){
                    window.location.href = currentUrl + "/"+result.url;
                  }

                  $("html, body").animate({scrollTop: 0}, "fast");
              } else {
                  if (result.msg) {
                      $('.error_validation').show();
                      $('.error_validation').html(result.msg);
                      setTimeout(function () {
                          $('.preloade').hide();
                      }, 1000);
                  }
              }
          }
      });

}
