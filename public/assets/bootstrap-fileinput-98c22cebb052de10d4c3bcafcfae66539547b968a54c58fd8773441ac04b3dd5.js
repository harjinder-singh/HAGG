+function(e){"use strict";var t="Microsoft Internet Explorer"==window.navigator.appName,i=function(t,i){if(this.$element=e(t),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||i.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=e('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileinput-preview");var n=this.$preview.css("height");"inline"!=this.$preview.css("display")&&"0px"!=n&&"none"!=n&&this.$preview.css("line-height",n),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()}};i.prototype.listen=function(){this.$input.on("change.bs.fileinput",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.bs.fileinput",e.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",e.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",e.proxy(this.clear,this))},i.prototype.change=function(t){if(t.target.files===undefined&&(t.target.files=t.target&&t.target.value?[{name:t.target.value.replace(/^.+\\/,"")}]:[]),0!==t.target.files.length){this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var i=t.target.files[0];if(this.$preview.length>0&&("undefined"!=typeof i.type?i.type.match("image.*"):i.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var n=new FileReader,s=this.$preview,a=this.$element;n.onload=function(n){var l=e("<img>");l[0].src=n.target.result,t.target.files[0].result=n.target.result,a.find(".fileinput-filename").text(i.name),"none"!=s.css("max-height")&&l.css("max-height",parseInt(s.css("max-height"),10)-parseInt(s.css("padding-top"),10)-parseInt(s.css("padding-bottom"),10)-parseInt(s.css("border-top"),10)-parseInt(s.css("border-bottom"),10)),s.html(l),a.addClass("fileinput-exists").removeClass("fileinput-new"),a.trigger("change.bs.fileinput",t.target.files)},n.readAsDataURL(i)}else this.$element.find(".fileinput-filename").text(i.name),this.$preview.text(i.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")}},i.prototype.clear=function(e){if(e&&e.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),t){var i=this.$input.clone(!0);this.$input.after(i),this.$input.remove(),this.$input=i}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),!1!==e&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},i.prototype.reset=function(){this.clear(!1),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},i.prototype.trigger=function(e){this.$input.trigger("click"),e.preventDefault()},e.fn.fileinput=function(t){return this.each(function(){var n=e(this),s=n.data("fileinput");s||n.data("fileinput",s=new i(this,t)),"string"==typeof t&&s[t]()})},e.fn.fileinput.Constructor=i,e(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(t){var i=e(this);if(!i.data("fileinput")){i.fileinput(i.data());var n=e(t.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');n.length>0&&(t.preventDefault(),n.trigger("click.bs.fileinput"))}})}(window.jQuery);