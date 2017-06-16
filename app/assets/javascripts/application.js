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

});