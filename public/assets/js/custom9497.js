$(document).ready(function(){
    $('.region_name').change(function(){
        var regionId = $(this).val();
        var long = $('option:selected', this).attr('long');
        var lat = $('option:selected', this).attr('lat');
        markers = [];
        getMap(lat,long,regionId);
        $('#search-studio').val('');
        $.ajax({
                url: site_url+'/get-classes/'+regionId,
                type: 'GET',
                success: function(JSONDATA) {
                    $('#clickstudio').click();
                    $('.tab-content').html(JSONDATA);   
					$("#content-d").mCustomScrollbar({
						theme: "dark"
					});
                    $("#content-d1").mCustomScrollbar({
                        theme: "dark"
                    });
                },
        });
    });

    $('.class-filter').change(function(){
        var styleName = $(this).val();
        var url = $('.pathname').val();
        if(styleName=='all')
        {
            window.location = url;
        }else{
            window.location = url+'/classes/'+styleName;
        }
    });

    $('.class-info').click(function(){
        var styleName = $(this).attr('data-value');
        var url = $('.pathname').val();
        window.location = url+'/classes/'+styleName;
    });

    $('.cl-right-btn, .cl-left-btn').on('click',function(){
        var date = $(this).attr('date');
        var current = $(this);
        var locationId = $('option:selected', '.class-filter').attr('location');
        var styleId = $('option:selected', '.class-filter').attr('styleid');
        $.ajax({
                url: site_url+'/get-studio-classes-dete-wise/'+date+'/'+styleId+'/'+locationId,
                type: 'GET',
                success: function(JSONDATA) {
                    $('.class-filter-data').html(JSONDATA);
                },
        });
    });

    $('.cl-right-btn1, .cl-left-btn1').on('click',function(){
        var date = $(this).attr('date');
        var current = $(this);
        var regionId = $('option:selected', '.region_name').val();
        $.ajax({
                url: site_url+'/get-studio-classes-date-wise/'+date+'/'+regionId,
                type: 'GET',
                success: function(JSONDATA) {
                    $('#classes').html(JSONDATA);
                    $("#content-d1").mCustomScrollbar({
                        theme: "dark"
                    });
                },
        });
    });

    $('#search-studio').on('keyup',function(){
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("search-studio");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        var scount=0;
        for (i = 0; i < li.length; i++) {
            a = li[i];
            txtValue = a.text || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                scount++;
            } else {
                li[i].style.display = "none";
            }
        }
        if(scount==0)
        {
            $('#myUL').append('<li class="slide-view"> <div class="img-view"></div> <div class="studio-info"> <p style="padding: 50 0 0 0; color: red;">No studio found!</p> </div> </li>');
        }
    });
   
});