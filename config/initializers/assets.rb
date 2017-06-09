# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( jquery-1.10.2.min.js jquery-ui-1.10.2.custom.min.js jquery-migrate-1.2.1.min.js jquery-ui-1.10.3.custom.min.js 
                                                  bootstrap.min.js jquery.uniform.min.js app.js bootstrap-hover-dropdown.min.js jquery.slimscroll.min.js 
                                                  nested_form_fields.js bootstrap-fileinput.js custom.css style.css bootstrap.min.css style-metronic.css style-responsive.css
                                                  font-awesome.min.css uniform.default.min.css plugins.css animate.css default.css bootstrap-fileinput.css)
