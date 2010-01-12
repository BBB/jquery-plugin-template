/*
 * jQuery PLUGINNAME Plugin
 * version: x.x
 * URL: URL
 * Description: DESCRIPTION
 * Requires: JQUERY_VERSION, ETC.
 * Author: AUTHOR
 * Copyright: Copyright 2009 NAME
 */

(function($) {
	$.fn.PLUGINNAME = function(settings) {
		
		settings = $.extend({
			PROPERTY: "VALUE"
		}, settings || {});

		return this.each(function() {

			var $this = $(this);

		  	// main plugin functionality
		
			function privateFunction() {
			  // private function
			}

		});
	};

	$.fn.PLUGINNAME.FUNCT = function() {
	  // public plugin function
	}
})(jQuery);
