$(document).on('click','.validatezip', function(){
    //e.preventDefault();

    var zipc1 = $("#zipcode1").val();
    var zipc2 = $("#zipcode2").val();
    var zipc3 = $("#zipcode3").val();
    var zipc4 = $("#zipcode4").val();
    var zipc5 = $("#zipcode5").val();
    var browser_token = $('meta[name="_token"]').attr('content');
    if(zipc1 == '')
    {
        alert("Please enter valid zipcode.");
        return false;
    }
    if(zipc2 == '')
    {
        alert("Please enter valid zipcode.");
        return false;
    } 
    if(zipc3 == '')
    {
        alert("Please enter valid zipcode.");
        return false;
    } 
    if(zipc4 == '')
    {
        alert("Please enter valid zipcode.");
        return false;
    } 
    if(zipc5 == '' )
    {
        alert("Please enter valid zipcode.");
        return false;
    }

    jQuery.ajax({
        url: base_url+ "/booking/session/validate/zip",
        method: 'post',
        dataType:'json',
        data: {
            zipcode1 : zipc1,
            zipcode2 : zipc2,
            zipcode3 : zipc3,
            zipcode4 : zipc4,
            zipcode5 : zipc5,
            _token : browser_token,
        },
        success: function(result)
        {
            if(result && result.ResponseCode == 0)
            {
               $(".zipresponse").addClass('red');
               $(".zipresponse").text(result.message);
            }
            if(result && result.ResponseCode == 1)
            {
               $(".zipresponse").addClass('green');
               $(".zipresponse").text(result.message);
               window.location.href = result.redirect_url;
            } 
        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);

            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
                return false;
            }
        }
    });



});


/* Rating Screen */
$(document).on('click','#skip_rating,#close_rsting_icon', function(e){

    if (confirm('Are you sure you would like to skip the rating?')) {
        rating_submit('skip');
    } else {
        return false;
    }
});
 function hide_rating_form() {
    $("#rating_provider_section").hide();
    $("#close_rsting_icon").hide();
    $("#service_type_section").show();

    //rating_submit();
 }

$(document).on('click','#review_submit', function(){
    //e.preventDefault();
    if (confirm('Are you sure you`d like to submit the rating?')) {
        rating_submit('submit');
    } else {
        return false;
    }
});

function rating_submit(click_type) {
    
    var browser_token = $('meta[name="_token"]').attr('content');
    if(click_type == "submit") {
        var rating_val = $('#rating_val').attr('class');
        var tip =  $("#tip_redio .active input").val();
        //var qualities =  $("#qualities_redio .active input").val();
        var qualities_array = [];
        $("#qualities_redio .active input").each(function(i){
            qualities_array.push($(this).val()) 
        });  
        var review =  $("#review").val();
        
        if(!rating_val) {
            alert("Please select rating.");
            return false;
            //rating_val = 0;
        }
    } else {
        var rating_val = 0;
        var qualities_array = [];
        var tip = null;
        var review = null;
    }

    jQuery.ajax({
        url: base_url+ "/booking/session/save_rating",
        method: 'post',
        data: { 
            _token : browser_token,
            rating :rating_val,
            additional_tip :tip,
            qualities :qualities_array,
            review:review
        },
        success: function(result)
        {
            console.log("save_rating",result);
            //hide_rating_form();
            location.reload();
        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            //console.log("ajax call went wrong:" + res.response.ResponseCode);

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
        }
    }); 
}


// Service Type Select Part : STEP 1
$(document).on('click','.parent-service', function(e){
    e.preventDefault();
    $("#people_block").hide();
    $("#service_main_block .child-service").addClass("hide");
    //$(".title h2").text('Booking Preferences');
    $(".parent-service").removeClass("selected");
    $(this).addClass("selected");   
    var cat_id =  $(this).data('cat');
    $('.back-btn').removeClass('hide');
    $("#service_main_block #parent"+cat_id).removeClass("hide");
    $("#category_id").val(cat_id);
    $("#request_main_block").attr('data-prev','address_main_block');
    $('#is_couple_gender').val('0');
    if(cat_id == "7")
    {
        $("#request_main_block").attr('data-prev','people_block');
        $(".is_massge_btn").removeClass('hide');
        $(".is_not_massge_btn").addClass('hide');
    }
    else
    {
        $(".is_not_massge_btn").removeClass('hide');
        $(".is_massge_btn").addClass('hide');

        $("#request_main_block").attr('data-prev','address_main_block');
    }
    sectionShowHide('address_main_block','service_type_section');
});


// Select Address From List : STEP 2
$(document).on('click','.add-area',function(){
    $(".add-area").removeClass("active_add_list");
    $(this).addClass("active_add_list");   
    $('.add-next-btn').show();
    $('.add-next-btn').attr('disabled',false);
});

// This acction whn clcik from add list from add new add
$(document).on('click','#addnew-add-link',function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    var panelH = '100px';

    $('.back-btn').addClass('hide');

    $("#add_list").hide();
    $("#add_address_from").show();
    $('.add-next-btn').hide();
    $('#close_add_address_form').show(); //cross button link
    $(".title h2").text('Add Address');
});

 // THIS CALL WHEN Save NEW ADDRESS Action CALL 
 $(document).on('click','.saveadd',function(){
    var curStep = $('#add_address_from'),
    curInputs = curStep.find("input[type='text'],input[type='email'],select,input[type='url']"),
    isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
    }        
    if(isValid == true)
    {
        address_details(); 
    }
});

// Get Latest Address List
function address_list()
{
    var new_token     = $("#new_token").val();
    var student_id     = $("#address_student_id").val();
    var browser_token = $('meta[name="_token"]').attr('content');

    jQuery.ajax({
        url: base_url+ "/booking/session/address/lists",
        method: 'get',
        dataType:'json',
        data: { 
            _token : browser_token,
            student_id :student_id,
            new_token :new_token
        },
        success: function(result)
        {
            $("#render_add_list").html(result.address_list_html);
            $('.back-btn').removeClass('hide');
            $('.add-next-btn').show();
            $('#close_add_address_form').hide();
            $('[data-toggle="tooltip"]').tooltip();
        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
        }
    }); 
}


/**
 * This Function call when 2nd  address_details will process before next step
 * @return boolean : TRUE,FALSE
 * @param  tab 2 all filed data 
 */
 function address_details()
 {
     var finalResponseCodeAdd = 0;

     var new_token     = $("#new_token").val();
     var student_id     = $("#address_student_id").val();
     var locationtype     = $("#address_type").val();
     var streetaddress = $("#add_address_from #street_add").val();
     var lat = $("#lat").val();
     var long = $("#long").val();
     var city = $("#city").val();
     var state = $("#state").val();
     var zipcode = $("#zipcode").val();
     var country = $("#country").val();
     var neighborhood = $("#neighborhood").val();
     var residence_type =  $("input[name='residence_type']:checked").val();
     var locationname = "";
     var hotel_id = "";
     if(lat == "" || city == "" || state == "" || zipcode == "")
     {
         alert("Please enter a valid address.");
         return false;
     }
     if(locationtype == "Office")
     {
         var locationname= $("#business_name").val();
         var unit_number  = $("#app_suite_floor").val();
     }
     if(locationtype == "hotel")
     {
        //var hotel_name_options = "other"; //$("#hotel_name_options").find(":selected").val();
        var hotel_name_options =  $("#hotel_name_options").find(":selected").val();
        if(hotel_name_options == "")
        {
        //    alert("Please select hotel option.");
        //    return false;
            hotel_name_options = "other";
        }
        if(hotel_name_options === "other")
        {
            var locationname= $("#hotel_name").val();
            var unit_number  = $("#room_number").val();
        }
        else
        {
           var locationname= $("#hotel_name_options").find(":selected").text();
           var unit_number  = $("#room_number").val();
           var hotel_id  = hotel_name_options;
        }
     }
     if(locationtype == "residence")
     {
         var unit_number  = $("#app_suite_floor").val();
     }
     var flights_stairs  = $("#flights_stairs").val();
     var parking_type    = $("#parking_type").val();
     var parking_fee = $("#parking_fee").val();
     var parking    = $("#parking").val();
     var directions = $("#directions").val();
     var cats = 0;
     var dogs = 0;
     if ($('#has_cats').is(":checked"))
     {
         cats = 1;
     }

     if ($('#has_dogs').is(":checked"))
     {
         dogs = 1;
     }
     var browser_token = $('meta[name="_token"]').attr('content');

     jQuery.ajax({
         url: base_url+ "/booking/session/address_details",
         method: 'post',
         dataType:'json',
         data: { 
         _token : browser_token,
         student_id :student_id,
         locationtype :locationtype,
         locationname :locationname,
         hotel_id :hotel_id,
         residencetype :residence_type,
         street_address :streetaddress,
         unit_number :unit_number,
         city :city,
         state :state,
         zipcode :zipcode,
         country :country,
         latitude :lat,
         longitude :long,
         new_token :new_token,
         cats :cats,
         dogs :dogs,
         parkingtype :parking_type,
         parking: parking,
         directions: directions,
         parkingfee :parking_fee,
         stairs :flights_stairs,
         neighborhood :neighborhood
         },
         success: function(result)
         {
            //const obj = JSON.parse(result);
            finalResponseCodeAdd = result.response.ResponseCode;
            console.log(finalResponseCodeAdd);
             
            if(result && finalResponseCodeAdd == 1)
            {
                address_list();
                
                $("#add_address_from").hide(10);   
                $("#add_list").show(10);
                clearAllInputs('#add_address_from');
                $(".title h2").text('Choose Location');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }            
         },
         error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
         }
     }); 
     return finalResponseCodeAdd;
 }

$(document).on('change','#address_type', function(){
    var add_type = $(this).val(); 
    if(add_type == '')
    {
        $('#display_if_location_type').addClass('hide');
        return false;
    }
    else{
        $('#display_if_location_type').removeClass('hide');
    }
    
    $('#hotel_fields_only').hide();
    $('#residence_fields_only').show();
    $('#business_fields_only').hide();
    $("#hotel_fields_only input").prop("required", false);
    $("#business_fields_only #business_name").prop("required", false);
    $("#hotel_fields_only #hotel_name_options").prop("required", false);

    if(add_type == 'hotel')
    {
        $("#hotel_fields_only input").prop("required", true);
        $("#hotel_fields_only #hotel_name_options").prop("required", true);
        
        $('#hotel_fields_only').show();
        $('#residence_fields_only').hide();
        $('#business_fields_only').hide();
    }

    if(add_type == 'Office')
    {
        $("#business_fields_only #business_name").prop("required", true);
        $("#residence_fields_only input").prop("required", false);

        $('#hotel_fields_only').hide();
        $('#residence_fields_only').hide();
        $('#business_fields_only').show();
    }
});

// Close add Form and back to Address List
$(document).on('click','#close_add_address_form',function(){
    $("#add_address_from").hide(10);   
    $("#add_list").show(10);
    $('.add-next-btn').show();
    $(".title h2").text('Choose Location');
    $('.back-btn').removeClass('hide');
    $(this).hide();
    // $('#add_address_from').find('input').val('');
    // $('#add_address_from').find('input:checkbox').attr('checked',false);
    // $('#add_address_from').find('input:radio').attr('checked',false);
    // $('#add_address_from').find('select').val('');
    clearAllInputs('#add_address_from');
    $("#display_if_location_type").addClass('hide');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
/** END ADDRESS RELATED PART ***/

// From Addresa  LIST TO Booking Preferences
$(document).on('click','#go_to_request_step',function(e){
    e.preventDefault();
    var selectedAddress = $('.add-area.active_add_list').data('id');
    if( jQuery.type(selectedAddress) === 'undefined') 
    { 
        alert('Please Select Address.'); 
        return false; 
    }
    
    var service_category_id =  $('.parent-service.selected').data('cat');
    
    // If selected service is massage then add new screen
    if(service_category_id == 7)
    {
        $("#if_private_yoga").addClass('hide');
        clearAllInputs('#ppl_list');
        $(".guest-list").removeClass("selected");
        $(".people-list").removeClass("selected");
        sectionShowHide('people_block','address_main_block');
    }
    else
    {
        $("#if_private_yoga").removeClass('hide');

        $("#request_main_block #student_address_id").val(selectedAddress);
        booking_fields();
        $("#sub_cat").val('');
        clearAllInputs('#request_details');
        sectionShowHide('request_main_block','address_main_block');
        $('.back-btn').removeClass('hide');
        $(".child-service").removeClass("selected");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return 1;
    }
});

/**
 * This Method use when service type == massage >> before booking prefrence and after address list
 */
 $(document).on('click','#add_new_ppl',function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    var panelH = '100px';

    $('.back-btn').addClass('hide');

    $("#ppl_list").hide();
    $("#add_ppl_from").show();
    $('.ppl-next-btn').hide();
    $('#close_pp_icon').show(); //cross button link
    $(".title h2").text('Add New Person');
});

$(document).on('click','#close_pp_icon',function(){
    $("#add_ppl_from").hide(10);   
    $("#ppl_list").show(10);    
    $('.ppl-next-btn').show();
    $(".title h2").text('Select People');
    $('.back-btn').removeClass('hide');
    $(this).hide();
    clearAllInputs('#add_ppl_from');
    $("#gender_redio label").removeClass("active");
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Save New Person
 $(document).on('click','.saveppl',function(){
    var curStep = $('#add_ppl_from'),
    curInputs = curStep.find("input[type='text'],select,input[type='radio']"),
    isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
    }
    if($("#gender_redio label").hasClass("active") == false)
    {
        isValid = false;
        alert("Please select gender.");
        return false;
    } 
    if(isValid == true)
    {
        $("#close_pp_icon").hide(10);
        people_lists(); 
    }
});

function people_lists()
{
    var post_first_name =  $('#first_name').val();
    var post_last_name =  $('#last_name').val();
    var post_phone_number =  $('#phone_number').val();
    var post_age =  $('#age option:selected').val();
    var post_gender = $("#gender_redio .active input").val();
    var browser_token = $('meta[name="_token"]').attr('content');

    var fromData = {    
        first_name : post_first_name,
        last_name : post_last_name,
        phone_no : post_phone_number,
        age : post_age,
        gender : post_gender
    };
console.log(fromData);
    $.ajax({
        dataType:'json',
        url: base_url+ "/booking/session/people_list",
        method: 'post',
        dataType:'html',
        data: fromData,
        beforeSend: function( xhr ) {
            //xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        },
        success: function(result)
        {
            const res =  jQuery.parseJSON(result);
            if(res.status == 200)
            {
                $("#render_ppl_list").html(res.people_list_html);
                $("#add_ppl_from").hide(10);   
                $("#ppl_list").show(10);
                $('.ppl-next-btn').show();
                $(".title h2").text('Select People');
                $('.back-btn').removeClass('hide');
                $(this).hide();
                clearAllInputs('#add_ppl_from');
                $("#gender_redio label").removeClass("active");

                $("#two_people_headline").html(res.two_people_headline);
                $("#back_to_back_text").html(res.back_to_back_text);
                $("#couple_text").html(res.couple_text);
                $("#multiple_people_headline").html(res.multiple_people_headline);
                $("#multiple_people_text").html(res.multiple_people_text);
                $("#allow_max_people").val(res.max_people_allow);
                $('[data-toggle="tooltip"]').tooltip();
                //$("#max_people_allow").val(res.max_people_allow);
                //$("#people_block").data("max_people_allow",res.max_people_allow);

            }
        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);
            console.log("ajax call went status:" + status);

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
        }
    });
}



$(document).on('change','.people-list input:checkbox,.guest-list input:checkbox',function(){

    var selectedCheck = $('.ppllistrow.selected input.pplcheck:checked');
    var max_people = $("#allow_max_people").val();
    //var max_people = $("#people_block").attr("data-max_people_allow");

    console.log("max_people :: "+max_people+" len ::: "+selectedCheck.length);
    if(selectedCheck.length == max_people)
    {
        alert("You can select only "+max_people+" people in list");
        $(this).prop("checked",false);
        return false;
    }
    else
    {
        if($(this).is(":checked")) {
            $(this).parent().parent().addClass("selected");
        } else {
            $(this).parent().parent().removeClass("selected");
        }
        loadCheck();
        $('#is_client_included').val('0');
        if($('.people-list').hasClass('selected') == true )
        {
            $('#is_client_included').val('1');
        }
    }

});
function loadCheck() {
    $('#client_list').val('');
    $('#coupleConfirmation').modal('hide'); 
    $('#couple3').modal('hide'); 

    var checkboxes = $('#ppl_list .selected input.pplcheck:checked');
    var data = [];
    var len = checkboxes.length;
    var loggedInUser = $('.people-list.selected').data('id');
    console.log(" loggedInUser ::: " + loggedInUser);
    
    for (var i=0; i<len; i++) {
        data[i] = checkboxes[i].value;
    }
    $('#client_list').val(data);
    $('#number_of_people').val(len);
}

// This is only when massge category select
$(document).on('click','.is_massge_btn',function(e){
    var checkboxes = $('#ppl_list .selected input.pplcheck:checked');
    var len = checkboxes.length;
    console.log("Selected ppl length ::: " + len);
    $('#is_couple').val('0');
    $('#is_couple_gender').val('0');
    if(len == 0)
    {
        alert('Please make a selection'); 
        return false;  
    }
    if(len == 1)
    {
       $('#go_to_request_from_ppl').trigger('click');
    }
    if(len == 2)
    {
        $('#coupleConfirmation').modal('show');
        $('#is_couple_gender').val('1');
    }
    else if(len >= 3)
    {
        $('#couple3').modal('show'); 
    }

});
$(document).on('click','.couple_btn',function(e){
    e.preventDefault();
    if ($("input:radio[name='Couple']").is(":checked")) {
        $('#is_couple').val('0');
        $('#is_couple_gender').val('0');
        if($("#couple_text").is(":checked"))
        {
            $('#is_couple').val('1');
            $('#is_couple_gender').val('1');
        }

        go_to_request_from_ppl();
    }
    else
    {
        alert("Please select any option");
    }    
});

$(document).on('click','.multiple_people_btn',function(e){
    e.preventDefault();
    go_to_request_from_ppl();
});

$(document).on('click','#go_to_request_from_ppl',function(e){
    e.preventDefault();
    go_to_request_from_ppl();
});

// This is make common code for massgae and private yoga
function go_to_request_from_ppl()
{
    var selectedAddress = $('.add-area.active_add_list').data('id');
    if( jQuery.type(selectedAddress) === 'undefined') 
    { 
        alert('Please Select Address.'); 
        return false; 
    }
    
    // var selectedPeopleCount = $('#number_of_people').val();
    // var isClientIncludedCount = $('#is_client_included').val();
    // var totlCnt = isClientIncludedCount+selectedPeopleCount;
    // console.log("totlCnt ::: "+totlCnt);
    // if( totlCnt == 0) 
    // { 
    //     alert('Please make a selection'); 
    //     return false; 
    // }
    
    $("#request_main_block #student_address_id").val(selectedAddress);
    booking_fields();
    $("#sub_cat").val('');
    clearAllInputs('#request_details');
    sectionShowHide('request_main_block','people_block');
    sectionShowHide('request_main_block','address_main_block');
    $('.back-btn').removeClass('hide');
    $(".child-service").removeClass("selected");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return 1;
}

/**
 * This Function call when 2nd  booking_fields will process before next step
 * @return boolean : TRUE,FALSE
 * @param  tab 2 all filed data 
 */
function booking_fields()
{
    $("#booking_loader").removeClass('hide');

    var finalResponseCode = 0; 
    
    var student_id     = $("#address_student_id").val();
    var service_category_id =  $('.parent-service.selected').data('cat');
    var service_category_name = $('.parent-service.selected').data('cat-name');
    var address_id    = $("#student_address_id").val();

    var is_couple = $('#is_couple').val();
    var is_couple_gender = $('#is_couple_gender').val();
    var number_of_people = 1;
    var is_client_included = 1;
    var client_list = 0;
    
    if(service_category_id == 1)
    {
        number_of_people = $("#no_of_people").val();
    }
    
    if(service_category_id == 7)
    {
        number_of_people    = $("#number_of_people").val();
        is_client_included    = $("#is_client_included").val();
        client_list    = $("#client_list").val();
    }

    if(service_category_id == '')
    {
        alert("Please select category.");
        return false;
    }

    jQuery.ajax({
        dataType:'json',
        url: base_url+ "/booking/session/booking_fields",
        method: 'post',
        dataType:'html',
        data: {
            student_id : student_id,
            service_category_id : service_category_id,
            service_category_name : service_category_name,
            address_id : address_id,
            number_of_people : number_of_people,
            is_client_included : is_client_included,
            client_list : client_list,
            is_couple : is_couple,
            is_couple_gender : is_couple_gender,
        },
        beforeSend: function( xhr ) {
            //xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        },
        success: function(result)
        {
            const res =  jQuery.parseJSON(result);
            if(res.status == 200)
            {
                $("#duration_section").html(res.content.duration);
                $("#gender_section").html(res.content.gender);
                //$("#time_slot_section").html(res.content.time_slots);
                $('#display_if_service').removeClass('hide');
                $("#booking_loader").addClass('hide');
                
                
                $(".tooltip_text").addClass('hide');
                $(".tooltip_text").attr('title','');
                if(res.tooltip_text != '')
                {
                    $(".tooltip_text").removeClass('hide');
                    $(".tooltip_text").attr('title',res.tooltip_text);
                }

                $("category").text(res.category_name); 
                sectionShowHide('request_main_block','address_main_block');
            }
        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);
            console.log("ajax call went status:" + status);

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
        }
    });
}

$(document).on('click','.child-service', function(e){
    e.preventDefault();

    $(".child-service").removeClass("selected");
    $(this).addClass("selected");   
    var cat_id =  $(this).data('cat');
    var skill_id =  $(this).data('skill');
    var skill_img =  $('.child-service.selected img').attr('src');
    console.log(cat_id + ' :: ' + skill_id);
    console.log('skill_img' + ' :: ' + skill_img);
    $("#sub_cat").val(skill_id);
});

$(document).on('click','.nextToBokingPreference',function(e){
    e.preventDefault();
    $("#summary_text").addClass('hide');
    clearAllInputs('date_main_section');
    var selector = $('#slider-range');
    selector.slider("values", [0,0]);
    $("#start_time").html('');
    $("#end_time").html('');
    $("#requested_date").val('');

    $("#start_time").html('<option selected disabled> From </option>');
    $("#start_time").attr('disabled',true);

    $("#end_time").html('<option selected disabled> To </option>');
    $("#end_time").attr('disabled',true);

    getDateOptions();
    $('#slider-range').addClass('hide');
    $('.cline').removeClass('hide');
});

function getDateOptions()
{
    var student_id     = $("#address_student_id").val();
    var service_category_id =  $('.child-service.selected').data('cat');
    var service_category_name = $('.child-service.selected').data('cat-name');
    var skill_id = $(".child-service.selected").data('skill');
    var checkSkill = $("#sub_cat").val();
    var skill_name = $(".child-service.selected").data('skill-name');
    var skill_img =  $('.child-service.selected img').attr('src');
    var address_id    = $("#student_address_id").val();
    var duration = $("#duration_section .active input").val();
    var gender_section = $("#gender_section .active input").val();
    var is_couple_gender = $("#is_couple_gender").val();
    console.log("duration :: " + duration);
    console.log("gender_section :: " + gender_section);
    
    

    var client_lists = [];
    var number_of_people = 1;
    var is_prevent = false;
    if(service_category_id == 1)
    {
        number_of_people = $("#no_of_people").val();
    }else{
        number_of_people = $("#number_of_people").val();
        if(is_couple_gender == 1)
        {
            $('.guest-gender-row').each(function (index, element) {
                //console.log($("element " + element));
                console.log("index  " + index);
                console.log(".glp"+index + " #gender_section .active input");
                var gndr = $(".glp"+index + " .custom-radio-button .active input").val();
                var questid = $(".glp"+index + " #gender_redio").data('id');
                
                if( $(".glp"+index + " .custom-radio-button label").hasClass("active") == false) 
                {
                    is_prevent = true;
                }
                else
                {
                    client_lists.push({
                        guest_id: questid, 
                        preferred_gender:  gndr
                    });
                }                
            });
        }

    }

    if(jQuery.type(duration) == 'undefined')
    {
        alert("Please select duration.");
        return false;
    }
    if($("#gender_section label").hasClass("active") == false || is_prevent == true)
    {
        alert("Please select gender.");
        return false;
    } 

    if(checkSkill == '')
    {
        alert("Please select skill.");
        return false;
    }

    jQuery.ajax({
        dataType:'json',
        url: base_url+ "/booking/session/date_options",
        method: 'post',
        dataType:'html',
        data: {
            student_id : student_id,
            service_category_id : service_category_id,
            service_category_name : service_category_name,
            skill_id : skill_id,
            skill_name : skill_name,
            skill_img : skill_img,
            address_id : address_id,
            duration : duration,
            gender : gender_section,
            number_of_people : number_of_people,
            client_list : client_lists
        },
        beforeSend: function( xhr ) {
            //xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        },
        success: function(result)
        {
            const res =  jQuery.parseJSON(result);
            //console.log(res);
            console.log(res.status);
            if(res.status == 200)
            {
                $("#date_slide_view").html('');
                $("#start_time").html('');
                $("#end_time").html('');

                $("#date_slide_view").html(res.content.date_slider);
                $("#start_time").html('<option selected disabled> From </option>' + res.content.time_slots);
                //$("#start_time").attr('disabled',false);

                $("#end_time").html('<option selected disabled> To </option>' + res.content.time_slots);
                //$("#end_time").attr('disabled',false);
                $("#summary_text").attr('data-txt',res.summary_text);
                
                $(".header_information").addClass('hide');
                $(".header_information").attr('title','');
                if(res.header_information != '')
                {
                    $(".header_information").removeClass('hide');
                    $(".header_information").attr('title',res.header_information);
                }
                change_summary_text();
                sectionShowHide('date_main_section','request_main_block');

                $('#booking-slider-carousel').owlCarousel({
                    loop: false,
                    margin: 20,
                    nav: true,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: false,
                    dots: false,
                    touchDrag: true,
                    responsive: {
                        0: {
                            items:7
                        },
                        600: {
                            items: 7
                        },
                        1000: {
                            items: 7
                        }
                    }
                });
            }
        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
        }
    });
}

// ON select Date call 
$(document).on('click','.owl-stage .owl-item',function () {
    var selected = $(this).html();
    $('.ui-slider-horizontal .ui-slider-handle').css('opacity',1);
    $('#slider-range').removeClass('hide');
    $('.cline').addClass('hide');
    $('.owl-stage .owl-item').removeClass('selected');
    $('.owl-stage .owl-item .dt-bx').removeClass('active');
    $(this).addClass('selected');
    $('.owl-stage .owl-item.active.selected .dt-bx').addClass('active');
    
    var selectedDate = $('.owl-stage .owl-item.active.selected .dt-bx.active').data('date');
    $("#requested_date").val(selectedDate);
    gettimeSlote(selectedDate);
    $("#end_time").attr('disabled',true);
    //change_summary_text();
}); 


function gettimeSlote(selectedDate)
{
    $("#summary_text").addClass('hide');
    $("#summary_text").text('');
    if(selectedDate == '')
    {
        alert("Please select Date.");
        return false;
    }
    $.ajaxSetup({
        headers: {
            'X-XSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    jQuery.ajax({
        dataType:'json',
        url: base_url+ "/booking/session/get_time_slot",
        method: 'post',
        dataType:'html',
        data: {
            selected_date : selectedDate
        },
        success: function(result)
        {
            if(result)
            {
                const res =  jQuery.parseJSON(result);
                //console.log(res);
                console.log(res.status);
                if(res.status == 200)
                {
                    $("#start_time").html('');
                    $("#end_time").html('');
                    $("#start_time").html('<option selected disabled> From </option>' + res.content.time_slots_start);
                    $("#start_time").attr('disabled',false);
                    //$("#start_time").attr('data-duration',res.default_window_length/30);
                    $("#start_time").attr('data-duration',res.sessionDuration/30);
    
                    $("#end_time").html('<option selected disabled> To </option>' + res.content.time_slots_end);
                    $("#end_time").attr('disabled',false);

                    //$("#summary_text").text(res.summary_text);
                    $("#summary_text").attr('data-txt',res.summary_text);


                    var startSec = res.startSecond;
                    var endSec = res.endSecond;
                    var stepC = res.step;
                    var sessionDuration = res.sessionDuration;
                    var default_window_length = res.default_window_length;

                    $("#start_time").attr('data-start-second',startSec);
                    $("#start_time").attr('data-end-second',endSec);
                    $("#start_time").attr('data-step',stepC);
                    $("#start_time").attr('data-session-duration',sessionDuration);
                    $("#start_time").attr('data-default_window_length',default_window_length);

                    $("#slider-range").slider({
                        range: true,
                        min: startSec,
                        max: endSec,
                        step: stepC,
                        values: [0, 0],
                        slide: function (e, ui) {
                            var hours1 = Math.floor(ui.values[0] / 60);
                            var minutes1 = ui.values[0] - (hours1 * 60);
                            var tmINsec1 = ui.values[0];
                    
                            if(ui.values[1] - ui.values[0] < sessionDuration){
                                return false;
                            }

                            if (hours1.length == 1) hours1 = '0' + hours1;
                            if (minutes1.length == 1) minutes1 = '0' + minutes1;
                            if (minutes1 == 0) minutes1 = '00';
                            if (hours1 >= 12) {
                                if (hours1 == 12) {
                                    hours1 = hours1;
                                    minutes1 = minutes1 + " PM";
                                } else {
                                    hours1 = hours1 - 12;
                                    minutes1 = minutes1 + " PM";
                                }
                            } else {
                                hours1 = hours1;
                                minutes1 = minutes1 + " AM";
                            }
                            if (hours1 == 0) {
                                hours1 = 12;
                                minutes1 = minutes1;
                            }
                    
                    
                    
                            var hours2 = Math.floor(ui.values[1] / 60);
                            var minutes2 = ui.values[1] - (hours2 * 60);
                            var tmINsec2 = ui.values[1];
                            

                            if (hours2.length == 1) hours2 = '0' + hours2;
                            if (minutes2.length == 1) minutes2 = '0' + minutes2;
                            if (minutes2 == 0) minutes2 = '00';
                            
                            if (hours2 >= 12) {
                                if (hours2 == 12) {
                                    hours2 = hours2;
                                    minutes2 = minutes2 + " PM";
                                } else if (hours2 == 24) {
                                    hours2 = 11;
                                    minutes2 = "59 PM";
                                } else {
                                    hours2 = hours2 - 12;
                                    minutes2 = minutes2 + " PM";
                                }
                            } else {
                                hours2 = hours2;
                                minutes2 = minutes2 + " AM";
                            }
                    
                           
                            $('.slider-time').html(hours1 + ':' +minutes1  );
                            $("#start_time option[value='"+hours1 + ':' + minutes1+"']").prop('selected', true);
                            console.log(hours2*60 + ':-:' +minutes1 );
                            $("#end_time option[value='"+hours2 + ':' + minutes2+"']").prop('selected', true);
                            console.log(hours2 + ':-:' + minutes2);
                            change_summary_text();
                            console.log("RANG");
                            $("#summary_text").removeClass('hide');
                        }
                    });
                }
            }
        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);

            $("#start_time").html('');
            $("#end_time").html('');

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
        }
    });
}

$(document).on("change","#start_time",function(){
    
    $("#summary_text").addClass('hide');
    $("#end_time").attr('disabled',false);

    $('.ui-slider-horizontal .ui-slider-handle').css('opacity',1);
    $('#end_time option').filter((i, el) => el.value < '23:30').prop('disabled', false);
    var startTime = $('#start_time option:selected').val();
    var startLoop = parseInt($('#start_time option:selected').data('loop'));
    console.log("startTime : "+ startTime);
    console.log("startLoop : "+ startLoop);
    var duration = parseInt($(this).attr('data-duration'));

    //var estimateEndLimit = duration+startLoop;

    var default_window_length = startLoop+parseInt($(this).attr('data-default_window_length'))/30;

    var estimateEndLimit = duration+startLoop;

    //$('#end_time option').filter((i, el) => el.value <= startTime).prop('disabled', true);

    $('#end_time option').removeClass('hide');
      $('#end_time option').each(function(i, el) {
        $(this).removeClass('hide');
        var endLp =  parseInt($(this).attr('data-loop'));       
        if(endLp < estimateEndLimit){
            $(this).addClass('hide');
        }
    })

    //$('#end_time').find('[data-loop="'+estimateEndLimit+'"]').prop('selected', true);
    $('#end_time option:last').prop('selected', true);
    $('#end_time').find('[data-loop="'+default_window_length+'"]').prop('selected', true);

    var endTimeSelected = $('#end_time option:selected').val();
    console.log("endTimeSelected : "+ endTimeSelected);       
    
    var startSec = $('#start_time option:selected').attr('data-slot');
    var endSec = $("#end_time option:selected").attr('data-slot');
    var stepfull = $("#start_time").attr('data-step');

    
    var selector = $('#slider-range');
    selector.slider("values", [startSec,endSec]);
    $("#summary_text").text('');
    change_summary_text();
    console.log($("#summary_text").data('txt'));
    $("#summary_text").removeClass('hide');

});

function change_summary_text()
{
    $("#summary_text").text('');

    var startTime = $('#start_time option:selected').val();
    var finishTime = $('#end_time option:selected').val();
    //var requested_date = $('#requested_date').val();
    var requested_date = $('.owl-stage .owl-item.active.selected .dt-bx.active').data('shortdate');

    var text = $("#summary_text").attr('data-txt'); 
    console.log("text  ::::" + text);
    $("#summary_text").text(text.replace('{date}', requested_date));
    text = $("#summary_text").text();
    console.log("text 1 ::::" + text);

    $("#summary_text").text(text.replace('{start_time}', startTime));
    text = $("#summary_text").text();

    console.log("text 2 ::::" + text);

    $("#summary_text").text(text.replace('{finish_time}', finishTime));

    console.log("text  3::::" + text);

}

$(document).on("change","#end_time",function(){

    
    var startSec = $('#start_time option:selected').attr('data-slot');
    var endSec = $("#end_time option:selected").attr('data-slot');
    var stepfull = $("#start_time").attr('data-step');

    var startTime = $('#start_time option:selected').val();
    if(startTime == 'From') 
    {
        alert("Please select start time.");
        return false;
    }

    var selector = $('#slider-range');
        selector.slider("values", [startSec,endSec]);
       
    change_summary_text();

});

$(document).on('click','.nextToSummery', function(e){

    // var startLoop = $('#start_time option:selected').data('loop');
    // var endLoop = $('#end_time option:selected').data('loop');

    // var hidden_duration = (startLoop-endLoop)/2;

    // $('#end_time').find('[data-loop="'+hidden_duration+'"]').prop('selected', true);

    var requested_date  = $("#requested_date").val();
    if(requested_date == '')
    {
        alert("Please select request date.");
        return false;
    }
    var startTime = $('#start_time option:selected').val();
    console.log(" startTime :--: "+startTime);
    if(startTime == 'From') 
    {
        alert("Please select start time.");
        return false;
    }
    var endTime = $('#end_time option:selected').val();
    
    console.log(" endTime :--: "+endTime);
    if(endTime == 'To')
    {
        alert("Please select end time.");
        return false;
    }

    //jQuery.type(selectedAddress)

    summery_details();
    
});

$(function() {
    $("#slider-range").slider({
        slide: function(event, ui) {
            change_summary_text();
            console.log("RANG");
            $("#summary_text").removeClass('hide');
        }
    });
});

/**
 * This Method use when request step process
 *  "student_id": "9535",
 *  "service_category_id": "7",
 *  "skill_id": "15",
 *  "address_id": "5304",
 *  "is_rebook": "0",
 *  "number_of_people": "1",
 *  "provider_id": "",
 *  "preferred_gender": "Female",
 *  "requested_date": "2022-02-14",
 *  "duration": "120m",
 *  "add_ons_id": [ 1 ],
 *  "requested_time": "14:00",
 *  "coupon_code": "",
 */
 function summery_details()
 {
    var finalResponseCode = 0; 

    var is_rebook  = 0;
    var provider_id  = 0;

    var requested_date  = $("#requested_date").val();
    if(requested_date == '')
    {
        alert("Please select request date.");
        return false;
    }
    var requested_time = $('#start_time option:selected').val()
    if(requested_time == 'From')
    {
        alert("Please select requested time.");
        return false;
    }
    var finish_time = $('#end_time option:selected').val()
    if(finish_time == 'To')
    {
        alert("Please select finish time.");
        return false;
    }
    
     
     jQuery.ajax({
         dataType:'json',
         url: base_url+ "/booking/session/summery_details",
         method: 'post',
         dataType:'html',
         data: {
             is_rebook  : is_rebook,
             provider_id : provider_id,
             requested_date : requested_date,
             requested_time : requested_time,
             finish_time : finish_time,
         },
         beforeSend: function( xhr ) { 
         },
         success: function(result)
         {
             const res =  jQuery.parseJSON(result);
 
             finalResponseCode = res.ResponseCode;
 
             if(result && finalResponseCode == 1)
             {
                //$(".title h2").text('Booking Summary');

                $("#booking_price_section").html(res.content);
                $("#summary_name").text(res.summary_name);
                $("#skill_img").html("<img src='"+res.skill_img+"' style='width: 100%;'>");
                $("#duration").text(res.duration);
                $("#requested_date_time").text(res.requested_date + ', ' + res.requested_time +' - '+res.finish_time);
                //$("#duration").text(res.duration);
                $("#street_address").text(res.street_address);
                $("#cancellation_policy").html(res.cancellation_policy);
                if(res.is_card_saved == true)
                {
                    $("#saved_card_detail").html(res.head_text);
                }
                else
                {
                    $('#pay_button').removeClass('hide');
                }
                $('div.setup-panel div a[href="#booking_summery"]').removeAttr('disabled').trigger('click');
                window.scrollTo({ top: 0, behavior: 'smooth' });

                sectionShowHide('summery_main_block','date_main_section');

             }            
         },
         error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);
 
            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
         }
     });
     
     return finalResponseCode;
 }

$(document).on('click','#confirm_pay', function(e){ 
    e.preventDefault();

    $('#conformation').modal('hide');
    var student_id     = $("#address_student_id").val();
    var service_category_id =  $('.parent-service.selected').data('cat');
    var address_id    = $("#student_address_id").val();

    jQuery.ajax({
        url: base_url+ "/booking/session/book",
        method: 'post',
        dataType:'json',
        data: {
            student_id : student_id,
            service_category_id : service_category_id,
            address_id : address_id
        },
        success: function(result)
        {
            //const res =  jQuery.parseJSON(result);
            
            if(result.status == 200)
            {
                window.location.href = result.redirect_url;
            }
        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);

            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                alert(res.messsage);
            }
        }
    });

});

$("#conformation").on("hidden.bs.modal", function () {
    $('#pay_button').addClass('hide');
});

$(document).on('click','#use_dif_pay', function(e){ 
    e.preventDefault();

    $('#conformation').modal('hide');
    $('#pay_button').removeClass('hide');
    $("#stripe_pay_btn").trigger('click');

});

// BASIC HELPER FUNCTION 
$(document).on('click','.back-btn', function(e){
    e.preventDefault();
    var backlink = $(".main-area-section.current-section").attr('data-prev');
    $("#"+backlink).show();
    $(".main-area-section.current-section").hide();
    $(".main-area-section").removeClass('current-section');
    $("#"+backlink).addClass('current-section');
    $("#"+backlink).addClass('current-section');
    var ttlText = $(".main-area-section.current-section").data('title');
    $(".title h2").text(ttlText);
    //$(".child-service").removeClass("selected");
    if(ttlText == "Select Service")
    {
        $('.back-btn').addClass('hide');
    }
    clearAllInputs("#coupleConfirmation");
});


function clearAllInputs(selector) {
    $(selector).find(':input').each(function() {
      if(this.type == 'submit'){
            //do nothing
        }
        else if(this.type == 'checkbox' || this.type == 'radio') {
          this.checked = false;
        }
        else if(this.type == 'file'){
          var control = $(this);
          control.replaceWith( control = control.clone( true ) );
        }
        else if(this.type == 'number'){
            $(this).val(0);
          }
        else{
          $(this).val('');
          $("#flights_stairs").val(0);
        }
     });
  }

$(document).on('click','.btn-number',function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});

$(document).on('focusin','.input-number',function(){
    $(this).data('oldValue', $(this).val());
});

$(document).on('change','.input-number',function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
});

$(document).on('keydown',".input-number",function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) || 
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

function initialize() 
{
    var input = document.getElementById('autocomplete_search');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        // place variable will have all the information you are looking for.
        var lat = place.geometry['location'].lat();
        var long = place.geometry['location'].lng();

        $('#lat').val(place.geometry['location'].lat());
        $('#long').val(place.geometry['location'].lng());
        var strateAddress = place.name;
        
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key=AIzaSyCtzs4xUKRtUwFlJOTQOeLX8qTG8hprZIw&sensor=false";
        $.get(url, function(data) {
        var results = data.results;
            if (data.status === 'OK') {
                //console.log(results)
                console.log(results.length);

                if (results[0]) {
                    //document.getElementById('location').innerHTML = results[0].formatted_address;
                    var street_no = "";
                    var street = "";
                    var city = "";
                    var state = "";
                    var country = "";
                    var zipcode = "";
                    var neighborhood = "";
                    var address_components = results[0].address_components;                        
                    var address_components_1 = results[1].address_components;
                        
                    for (var i = 0; i < address_components.length; i++) 
                    {
                        if (address_components[i].types[0] === "street_number") {
                            street_no = address_components[i].long_name;

                        }

                        if (address_components[i].types[0] === "route") {
                            street = address_components[i].long_name;

                        }
                    
                        if (address_components[i].types[0] === "administrative_area_level_1" && address_components[i].types[1] === "political" || (address_components[i].types[0] === "political" || address_components[i].types[1] === "administrative_area_level_1")) {
                            //city = address_components[0].long_name;
                            //state = address_components[5].long_name;
                            state = address_components[i].long_name;

                            // console.log("administrative_area_level_1 state : " + state);

                        }
                        if ((address_components[i].types[0] === "locality" && address_components[i].types[1] === "political") || address_components[i].types[1] === "locality" && address_components[i].types[0] === "political") {
                            city = address_components[i].long_name;

                        }
                        else if(city == '' && address_components[i].types[0] === "political" && address_components[i].types[1] === "sublocality"  && address_components[i].types[2] === "sublocality_level_1")
                        {
                            city = address_components[i].long_name;
                        }
                        else if(city == '' && address_components[i].types[0] === "administrative_area_level_3" && address_components[i].types[1] === "political")
                        {
                            city = address_components[i].long_name;
                        }
                        
                        if (address_components[i].types[0] === "postal_code" && zipcode == "") {
                            zipcode = address_components[i].long_name;

                        }
                        if (address_components[i].types[0] === "neighborhood" && address_components[i].types[1] === "political") {
                            neighborhood = address_components[i].long_name;

                        }
                        if (address_components[i].types[0] === "country") {
                            country = address_components[i].long_name;

                        }
                    }
                    for (var i = 0; i < address_components_1.length; i++) 
                        {
                            if (street_no == "" && address_components_1[i].types[0] === "street_number") {
                                street_no = address_components_1[i].long_name;
    
                            }

                            if (street == "" && address_components_1[i].types[0] === "route") {
                                street = address_components_1[i].long_name;
    
                            }
                        }
                    var address = {
                        "street": street_no +' '+ street,
                        "city": city,
                        "state": state,
                        "country": country,
                        "zipcode": zipcode,
                        "neighborhood": neighborhood,
                    };

                    $("#city").val(city);
                    $("#state").val(state);
                    $("#country").val(country);
                    $("#zipcode").val(zipcode);
                    $("#neighborhood").val(neighborhood);
                     //$("#street_add").val(street);
                    // if(street_no != "")
                    // {
                    //     $("#street_add").val(street_no + " " + street);
                    // }
                    $("#street_add").val(strateAddress);
                    console.log(address);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + data.status);
            }
        }); 

    });
}

$(document).on('change','#autocomplete_search', function(e) {
    e.preventDefault();
    $("#city").val('');
    $("#state").val('');
    $("#country").val('');
    $("#zipcode").val('');
    $("#neighborhood").val('');
});

$(document).on('mouseenter', ".drag", function( event ) {
    //$(".detail", this).stop(true,true).delay(500).show(0);
    $(".tooltips").show(300);
}).on('mouseleave', '.drag', function( event ) {
    $(".tooltips").hide(2000);  
});

setTimeout(function() {
    $('#successMessage').fadeOut('fast');
    $('#dangerMessage').fadeOut('fast');
}, 30000); // <-- time in milliseconds





function sectionShowHide(show_section_id,hide_section_id)
{
    $(".main-area-section").removeClass('current-section');
    $('#'+show_section_id).addClass('current-section');

    var activeSection = $(".main-area-section.current-section").data('title');
    $(".title h2").text(activeSection);

    $('#'+hide_section_id).hide();
    $('#'+show_section_id).show();
}


/* FOR add Address : hotel type  */
$(document).on("change","#autocomplete_search",function(){

    

    var address_type = $("#address_type").val();

    if(address_type === "hotel")
    {
        $("#hotel_options_lists").addClass("hide");
        $("#hotel_name_txt").removeClass("hide");


        $("#hotel_name").val('');

        var options =  '<option value="">Select Hotel Name</option>';
        options +=  '<option value="other">Other</option>';

        $("#hotel_name_options").html(options);
        
        setTimeout( function() {
            var street_address = $("#street_add").val();
            // if( street_address == "")
            // {
            //     alert("Please enter address.");
            //     return false;
            // }    
            loadHotelList();
        },2000);
    }
});


$(document).on("change","#hotel_name_options",function(){
    var address_type = $("#address_type").val();

    if(address_type === "hotel")
    {

        var selected_hotel_options = $("#hotel_name_options").find(":selected").val();
        console.log("selected_hotel_options",selected_hotel_options);
        $("#hotel_name_txt").addClass("hide");
        var street_address = $("#street_add").val();
        if( street_address == "")
        {
            alert("Please enter address.");
            return false;
        }

        if(selected_hotel_options === "other")
        {
            $("#hotel_name").val('');
            $("#hotel_name_txt").removeClass("hide");
        }
        else
        {
            var selectedOptions = $("#hotel_name_options").find(":selected").text();
            if(selected_hotel_options != "Select Hotel Name")
            {
                $("#hotel_name").val(selectedOptions);
            }
        }
    }
});

function loadHotelList()
{
    $("#hotel_fields_only #hotel_name_options").prop("required", true);

    var client_id = $("#address_student_id").val(), 
    new_token = $("#new_token").val(), 
    street_address = $("#street_add").val(), 
    city =  $("#city").val(), 
    state =  $("#state").val(), 
    zipcode =  $("#zipcode").val(), 
    latitude =  $("#lat").val(), 
    longitude =  $("#long").val(), 
    neighborhood =  $("#neighborhood").val(),
    browser_token = $('meta[name="_token"]').attr('content');

    jQuery.ajax({
        url: base_url+ "/booking/session/hotel/list",
        method: 'get',
        dataType:'json',
        data: { 
            _token : browser_token,
            client_id :client_id,
            street_address :street_address,
            city :city,
            state :state,
            zipcode :zipcode,
            latitude :latitude,
            longitude :longitude,
            neighborhood :neighborhood,
            new_token :new_token
        },
        success: function(result)
        {
            console.log("result",result);
            var ress = result.response;
            console.log("length",ress.length);
            if(ress.length > 0)
            {
                $("#hotel_options_lists").removeClass("hide");
                $("#hotel_name_txt").addClass("hide");
                var options =  '<option value="">Select Hotel Name</option>';
                $.each(ress, function(index, object) {
                    options += '<option value="' + object.id + '">' + object.name + '</option>';
                });
                options +=  '<option value="other">Other</option>';
    
                $("#hotel_name_options").html(options);
            }
            else
            {
                $("#hotel_options_lists").addClass("hide");
                $("#hotel_name_txt").removeClass("hide");
                $("#hotel_fields_only #hotel_name_options").prop("required", false);
                $('#hotel_name_options [value=other]').attr('selected', true);
            }


        },
        error: function (request, status, error) {
            const res =  jQuery.parseJSON(request.responseText);
            console.log(res);
            console.log("ajax call went wrong:" + request.responseText);
            console.log("ajax call went wrong:" +  res.messsage);
            console.log("ajax call went wrong:" + res.response.ResponseCode);

            if(res.messsage == "Token Mismatch")
            {
                window.location.href = base_url+ "/booking/session/logout?do=token";
                return false;
            }
            if(res.response.ResponseCode == 0)
            {
                console.log(res.messsage);
            }
        }
    }); 
}