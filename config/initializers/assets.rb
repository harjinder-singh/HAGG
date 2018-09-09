# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( jquery-ui.min.js jquery1.min.js bootstrap.min.js bootstrap-hover-dropdown.min.js bootstrap-fileinput.js jquery.jscrollpane.min.js slides.min.jquery.js
                                                  nested_form_fields.js css3-mediaqueries.js fwslider.js jquery.nivo.slider.js megamenu.js jquery.easydropdown.js jquery.flexisel.js jquery.etalage.min.js jquery.color.js jquery.Jcrop.js
                                                  bootstrap.min.css font-awesome.min.css bootstrap-fileinput.css style.css form.css megamenu.css fwslider.css nivo-slider.css default.css profile.css etalage.css jquery.Jcrop.css)
