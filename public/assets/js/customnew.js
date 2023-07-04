var currentUrl = $('.urlpath:first-child').text();
function initAutocompletes() {
    if ($('#map').length > 0){
       siteMaps(40.6971494, -73.9712);
    }
}

function siteMaps(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        //center: latlng,
        zoom: 13,
        mapTypeId: 'roadmap',
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false
    });

    var marker = new google.maps.Marker({
        position: latlng,
        title:""
    });
    
    // To add the marker to the map, call setMap();
    marker.setMap(map);

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
            return;
        }
        $('.preloadesd').show();
        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];
        
        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        console.log();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            saveSearchNew(place);

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: normalIcon(),
                title: place.name,
                position: place.geometry.location
            }));

           
            var newlatitude = place.geometry.location.lat();
            var newlongitude = place.geometry.location.lng();  
            marker.setPosition( new google.maps.LatLng( newlatitude, newlongitude ) );
            map.panTo( new google.maps.LatLng( newlatitude, newlongitude ) );

            document.getElementById('pac-input').value = "";
            //markers.setMap(map);
           
           // marker.setPosition( new google.maps.LatLng( newlatitude, newlongitude ) );
           /* map.panToBounds(bounds);
            
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }*/

        });
        
        //map.fitBounds(bounds);
        //marker.setPosition( new google.maps.LatLng( 0, 0 ) );
        //map.panTo( new google.maps.LatLng( 0, 0 ) );
    });
}

function pageredirectionlogin(){
    $('body').on('click', '.li-data a.page-redirection', function () {
        var latitude = parseFloat($(this).attr('lat'));
        var longitude = parseFloat($(this).attr('lng'));
        var addressId = parseFloat($(this).attr('address-id'));
        console.log('latitude'+latitude+'longitude'+longitude+'addressId'+addressId);
        var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 12,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false
        });
        var markers = [];
        var infowindow = new google.maps.InfoWindow();
        var i;
        markers.push(
                new google.maps.Marker({
                    position: new google.maps.LatLng(latitude, longitude),
                    title: 'test',
                    map: map,
                    icon: normalIcon()
                })
                );
        console.log('closest '+$(this).closest('.page-redirection').html());
        if ($(this).closest('.page-redirection').attr('href') == 'javascript:void(0)')
        {
            $('.appintment_detail_delete').remove();
            $('.page-redirection').attr('href', 'javascript:void(0)');
            /* $(this).closest('.page-redirection').attr('href','{{url("search-professional")}}/'+addressId);
             $(this).find('.appintment_detail').after('<div class="appintment_detail_delete"> <span class="appointment_delete"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </div>');
             return false; */
            console.log(addressId);
            $.ajaxSetup({
                headers: {
                    "X-Requested-With": "XMLHttpRequest", 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });           
            $(".preloades").css("top","100px");
            $('.preloades').show();
            $('html, body').animate({
                scrollTop: eval($('.main-wrap-append').offset().top - 100)
            }, 2000);
            var currentUrl = $('.urlpath:first-child').text();
            $.ajax({
                type: "POST",               
                url: "/searchprofessionalnews",
                data: {'addressId': addressId},
                dataType: 'json',
                success: function (result) {
                    console.log(result);
                    window.location.href = "https://bigtoe.yoga/booking/session";
                    $('.main-wrap-append').html(result.html);
                    $(".main-wrap-append").scrollTop(100);
                    //window.location.href = result;
                    //$('.li-data').html(result);

                }, complete: function (xhr, textStatus) {
                    console.log(xhr.status);
                    setTimeout(function () {
                        $('.preloades').hide();
                    }, 1000);
                    if (xhr.status == '500') {
                        window.location.href = "https://bigtoe.yoga/studentlogout";
                    }
                }
            });

        }
    });
}

$(document).ready(function () {
    $('body').on('click', '.li-data a.page-redirection', function () {
        
        var latitude = parseFloat($(this).attr('lat'));
        var longitude = parseFloat($(this).attr('lng'));
        var addressId = parseFloat($(this).attr('address-id'));
        console.log('latitude'+latitude+'longitude'+longitude+'addressId'+addressId);
        var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 12,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false
        });
        var markers = [];
        var infowindow = new google.maps.InfoWindow();
        var i;
        markers.push(
                new google.maps.Marker({
                    position: new google.maps.LatLng(latitude, longitude),
                    title: 'test',
                    map: map,
                    icon: normalIcon()
                })
                );
        console.log('closest '+$(this).closest('.page-redirection').html());
        if ($(this).closest('.page-redirection').attr('href') == 'javascript:void(0)')
        {
            $('.appintment_detail_delete').remove();
            $('.page-redirection').attr('href', 'javascript:void(0)');
            /* $(this).closest('.page-redirection').attr('href','{{url("search-professional")}}/'+addressId);
             $(this).find('.appintment_detail').after('<div class="appintment_detail_delete"> <span class="appointment_delete"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </div>');
             return false; */
            console.log(addressId);
            $.ajaxSetup({
                headers: {
                    "X-Requested-With": "XMLHttpRequest", 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });           
            $(".preloades").css("top","100px");
            $('.preloades').show();
            $('html, body').animate({
                scrollTop: eval($('.main-wrap-append').offset().top - 100)
            }, 2000);
            var currentUrl = $('.urlpath:first-child').text();
            $.ajax({
                type: "POST",               
                url: "/searchprofessionalnews",
                data: {'addressId': addressId},
                dataType: 'json',
                success: function (result) {
                    console.log(result);
                    window.location.href = "https://bigtoe.yoga/booking/session";
                    $('.main-wrap-append').html(result.html);
                    $(".main-wrap-append").scrollTop(100);
                    //window.location.href = result;
                    //$('.li-data').html(result);

                }, complete: function (xhr, textStatus) {
                    console.log(xhr.status);
                    setTimeout(function () {
                        $('.preloades').hide();
                    }, 1000);
                    if (xhr.status == '500') {
                        window.location.href = "https://bigtoe.yoga/studentlogout";
                    }
                }
            });

        }
    });
});

function normalIcon() {
    return {
        /* url: "{{asset('public/assets/images/map10.png')}}" */
        url: "https://bigtoe.yoga/public/assets/images/map10.png"
    };
}

function saveSearchNew(place)
{
    var city = '';
    var state = '';
    var zipcode = '';
    var country = '';
    for (var i = 0; i < place.address_components.length; i++)
    {
        var component = place.address_components[i];
        console.log(component);
        if (component.types[0] == "locality")
        {
            city = component.long_name;
        }

        if (component.types[0] == "administrative_area_level_1")
        {
            state = component.short_name;
        }

        if (component.types[0] == "postal_code")
        {
            //console.log(component.long_name);
            zipcode = component.long_name;
        }

        if (component.types[0] == "country")
        {
            country = component.short_name;
        }
    }
    var title = place.name;
    var address = place.formatted_address;
    var url = place.url;
    var latitude = place.geometry.location.lat();
    var longitude = place.geometry.location.lng();
    $.ajaxSetup({
        headers: {
            "X-Requested-With": "XMLHttpRequest", 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    var currentUrl = $('.urlpath:first-child').text();
    console.log('currentUrl'+currentUrl);
    //$('.preloadesd').show();
    $.ajax({
        type: "POST",
        /* url:"{{url('saveSearchNew')}}", */
        url: currentUrl + "/saveSearchNew",
        data: {'city': city, 'state': state, 'zipcode': zipcode, 'country': country, 'latitude': latitude, 'longitude': longitude, 'title': title, 'address': address, 'url': url},
        dataType: 'json',
        success: function (result) {
            //console.log(result);
            if(result.success == true){
                $('.main-wrap-append').find('.bigtoe-map-list-outer').html('').html(result.html)
                $(".main-wrap-append").scrollTop(100);
                setTimeout(function () {
                // siteMaps(latitude, longitude);
                    $('.preloade').hide();
                    $('.preloadesd').hide();
                    pageredirectionlogin();
                }, 1000);
                
                setTimeout(function () {
                    $('.bigtoe-map-list-outer').find('.bigtoe-map-list:first').find('a.page-redirection').trigger('click');
                },1000);
            } else {
                var mlattitude = result.matched_lattitude;
                var mlongitude = result.matched_longitude;
                $('.bigtoe-map-list-outer').find('.bigtoe-map-list').each(function(){
                var latt = $(this).find('a.page-redirection').attr('lat');
                var long = $(this).find('a.page-redirection').attr('lng');
                    if(mlattitude == latt && long == mlongitude){
                        //$(this).find('a.page-redirection').trigger('click');

                        var latitude = parseFloat($(this).find('a.page-redirection').attr('lat'));
                        var longitude = parseFloat($(this).find('a.page-redirection').attr('lng'));
                        var addressId = parseFloat($(this).find('a.page-redirection').attr('address-id'));
                        console.log('latitude'+latitude+'longitude'+longitude+'addressId'+addressId);
                        var map = new google.maps.Map(document.getElementById('map'), {
                            center: new google.maps.LatLng(latitude, longitude),
                            zoom: 12,
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false
                        });
                        var markers = [];
                        var infowindow = new google.maps.InfoWindow();
                        var i;
                        markers.push(
                                new google.maps.Marker({
                                    position: new google.maps.LatLng(latitude, longitude),
                                    title: 'test',
                                    map: map,
                                    icon: normalIcon()
                                })
                                );
                        console.log('closest '+$(this).closest('.page-redirection').html());
                        
                            $('.appintment_detail_delete').remove();
                            $(this).find('a.page-redirection').attr('href', 'javascript:void(0)');
                           
                            console.log(addressId);
                            $.ajaxSetup({
                                headers: {
                                    "X-Requested-With": "XMLHttpRequest", 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                }
                            });           
                            $(".preloades").css("top","100px");
                            $('.preloades').show();
                            $('html, body').animate({
                                scrollTop: eval($('.main-wrap-append').offset().top - 100)
                            }, 2000);
                            var currentUrl = $('.urlpath:first-child').text();
                            $.ajax({
                                type: "POST",               
                                url: "/searchprofessionalnews",
                                data: {'addressId': addressId},
                                dataType: 'json',
                                success: function (result) {
                                    console.log(result);
                                    window.location.href = "https://bigtoe.yoga/booking/session";
                                    $('.main-wrap-append').html(result.html);
                                    $(".main-wrap-append").scrollTop(100);
                                    //window.location.href = result;
                                    //$('.li-data').html(result);

                                }, complete: function (xhr, textStatus) {
                                    console.log(xhr.status);
                                    setTimeout(function () {
                                        $('.preloades').hide();
                                    }, 1000);
                                    if (xhr.status == '500') {
                                        window.location.href = "https://bigtoe.yoga/studentlogout";
                                    }
                                }
                            });


                    }
                });
            }
        }, complete: function (xhr, textStatus) {
            console.log(xhr.status);
            if (xhr.status == '500') {
                window.location.href = "https://bigtoe.yoga/studentlogout";
            }
            setTimeout(function () {
                $('.preloadesd').hide();
            }, 1000);
        }
    });
}


//Attach the event handler to any element
$(document)
        .ajaxStart(function () {          
            $('.preloades').show();
        })
        .ajaxStop(function () {           
            $('.preloades').hide();
        });

//load google map on page load
$(window).on("load", function (e) {
    setTimeout(function () {
        initAutocompletes();
    }, 2000);

    $('.navbar-nav>li>a').on('click', function(){
        //$('.navbar-collapse').collapse('hide');
    });
});

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
