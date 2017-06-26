// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery1.min
//= require jquery-ui.min
//=require jquery.easydropdown
//= require jquery.nivo.slider
//= require jquery.flexisel
//= jquery.jscrollpane.min
//= require bootstrap.min
//= require bootstrap-hover-dropdown.min
//= require bootstrap-fileinput
//= require megamenu
//= require css3-mediaqueries
//= require fwslider
//= require jquery.etalage.min
//= require slides.min.jquery
//= require nested_form_fields

$(document).ready(function(){

	$(".megamenu").megamenu();
	$('#slider').nivoSlider();
	
	$('#etalage').etalage({
		thumb_image_width: 360,
		thumb_image_height: 360,
		source_image_width: 900,
		source_image_height: 900,
		show_hint: true,
		click_callback: function(image_anchor, instance_id){
			alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
		}
	});

	$(".fancybox").fancybox({
		openEffect: "none",
		closeEffect: "none"
	});
	
	$(document).on('change', ".featured_product", function(){
      var variant_id = $(this).data("target");
      $.ajax({
          url: "/variants/" + variant_id + "/featured",
          type: 'get',
          data: {id: variant_id},
          success: function(data){
            alert('Preference Changed!!');
          },
          error: function(){
            alert('Request failed. Sorry, we are analyzing the cause of this problem');
          }
        });
    });
    
    $(document).on('change', ".hot_deals", function(){
      var variant_id = $(this).data("target");
      $.ajax({
          url: "/variants/" + variant_id + "/hot_deals",
          type: 'get',
          data: {id: variant_id},
          success: function(data){
            alert('Preference Changed!!');
          },
          error: function(){
            alert('Request failed. Sorry, we are analyzing the cause of this problem');
          }
        });
    });
    
    $('#myCarousel').carousel({
      interval: 5000
    });
 
        //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
             var id = $('.item.active').data('slide-number');
            $('#carousel-text').html($('#slide-content-'+id).html());
    });
    
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'UA-101220825-1', 'auto');
	  ga('send', 'pageview');
	
	setTimeout(function() {
    $('.alert_top_spacing').fadeOut('slow');
	}, 3000);
	
	$.validate({
	    lang: 'en',
	    modules : 'security'
	  });

});