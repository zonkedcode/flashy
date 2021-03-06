/*!
 * flashy.js
 * Version: 0.5.0
 *
 * With flashy flash for subscribers calmly
 * ----------------------------------------
 * Copyright 2019 Flashy.js Contributors
 *
 * @author zonkedCode <chriskuika12@gmail.com>
 */

;(function(global, flashy){
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = flashy() :
    typeof define === 'function' && define.amd ? define(flashy) :
    global.flashy = flashy();
}(this, function(){

	"use strict";

	// We check if jQuery is indefinite in the document Object 
	if(typeof window.jQuery === 'undefined' && window.$ === 'undefined') throw new Error('flashy required Jquery')

	/**
	 * @var string
	 */
	const FLASHY_OBJ = 'object';

	/**
	 * @var string
	 */
	const FLASHY_FUNCTION = 'function';

	/**
	 * @var string
	 */
	const FLASHY_STRING = 'string';


	/**
	 * @var object
	 */
	var Flashy = {};

	/**
	 * @var function
	 */
	var FlashyCallBack = function() {};

	/**
	 * @var nullable
	 */
	var AnimatedProgress = null;



	Flashy.Version = "0.5.0";

	Flashy.OPTIONS = {
		title : "Hello flashy !",
		animatedIn : "animated bounceInRight",
		animatedOut : "animated bounceOutRight",
		quitESC : true,
		icon : "<i>x</i>",
		timeout : 5000,
		type : "flashy__danger",
		addClass : null,
		stop : false
	};

	Flashy.OPTIONS_COPY = {};
	Flashy.OPTIONS_REPLACE = {};

	/**
	 * The body of the package inserted into the DOM.
	 */
	Flashy.NODE_PRESENT = function() {
		$('body').append('<div class="flashy" aria-flashy="true" id="flashy"><div class="flashy__container"><div class="flashy__body"></div><div class="flashy__icon"><button class="flashy__button"></button></div></div></div>');
	}();

	Flashy.ClassName = { 
		bodyClass : ".flashy__body",
		coreClass : ".flashy",
		iconClass : ".flashy__icon",
		hideClass : ".flashy__hide",
		display : ".flashy__show",
		btnClass : ".flashy__button",
		iconChild : ".flashy__icon i",
		activeClass : ".flashy__active",
		active : "flashy__active"
	};

	Flashy.Show = function() {
		this
			.Hide()
			.OptionPreliminary();

		$(this.ClassName.bodyClass).html(Flashy.OPTIONS_COPY.title);
		$(this.ClassName.btnClass).html(Flashy.OPTIONS_COPY.icon);

		$(this.ClassName.coreClass)

			.css({display: "inline", right : "1%"})
			.addClass(Flashy.OPTIONS_COPY.type)
			.addClass(Flashy.OPTIONS_COPY.addClass)
			.addClass(Flashy.OPTIONS_COPY.animatedIn)
			.addClass(Flashy.ClassName.active);

			Flashy.Timer();

		return this;
	}
	
	/**
	 * Latency of the package.
	 */ 
	Flashy.Timer = function() {
		if (! Flashy.OPTIONS_COPY.stop) {
			AnimatedProgress = setTimeout(function(){	 
				Flashy.Out();
				ApplyCallBack();

			}, Flashy.OPTIONS_COPY.timeout);
		}

		Flashy.OPTIONS_REPLACE = {};
	}

	function checkAnimatedProgressIsClear() {
		if (AnimatedProgress) {
			clearTimeout(AnimatedProgress);
		}
	}
	
	/**
	 * Ensure animation in the core "Out".
	 */
	Flashy.AnimatedIsOut = function() {
		$(this.ClassName.coreClass)
			.removeClass(Flashy.OPTIONS_COPY.animatedIn)

			.addClass(this.OPTIONS_COPY.animatedOut);
	}

	Flashy.AnimatedClass = {
		Animated : 'animated',
		AnimatedBounceRight : 'bounceOutRight',
		AnimatedInRight : 'bounceInRight'
	}; 

	function StringifyOptions() {
		Flashy.Hide()
		Flashy.OPTIONS_COPY = JSON.parse(JSON.stringify(Flashy.OPTIONS));
	}

	/**
	 * Add the parameters of the user by the parameters of defect.
	 */ 
	function CompactParams(params) {
		StringifyOptions();

		for (var id in params) {
			if (id in Flashy.OPTIONS) {			
				Flashy.OPTIONS_COPY[id] = params[id];
			}
		}
	}

	Flashy.OptionPreliminary = function() {
		
		// One test to check if the parameters defect are already the variable
		// "OPTIONS_COPY" if not let us add we them.
		for (var id in Flashy.OPTIONS) {
			if (typeof Flashy.OPTIONS_COPY[id] == "undefined") {
				Flashy.OPTIONS_COPY[id] = Flashy.OPTIONS[id];
			}	
		}

		for (var id in Flashy.OPTIONS_REPLACE) {
			Flashy.OPTIONS_COPY[id] = Flashy.OPTIONS_REPLACE[id];
		}
	}

	Flashy.Out = function() {
		checkAnimatedProgressIsClear();
		Flashy.AnimatedIsOut();	
	}

	Flashy.Hide = function() {

		if (this.isActive()) {
			this.Out();		

			var Core = $(Flashy.ClassName.coreClass);

				Core
				.attr("style", "")
				.removeClass(Flashy.OPTIONS_COPY.type)
				.removeClass(Flashy.OPTIONS_COPY.addClass)
				.removeClass(Flashy.OPTIONS_COPY.animatedIn)
				.removeClass(Flashy.OPTIONS_COPY.animatedOut)
				.removeClass(Flashy.ClassName.active)
				.fadeOut();	

			for(var id in Flashy.AnimatedClass) {
				if (Core
					.hasClass(Flashy.AnimatedClass[id])) {
					Core.removeClass(Flashy.AnimatedClass[id]);

				}
			}
		}

		return this;
	}

	Flashy.isActive = function() {
		return $(Flashy.ClassName.coreClass).hasClass(Flashy.ClassName.active);
	}

	// This event attent that the user types on the key 
	// escape for called the function related to this last

	Flashy.KeyUp = function() {
		$(document).on('keyup', function(e) {
			if(e.which === 27 && Flashy.OPTIONS_COPY.quitESC) {
				Flashy.Out();
			}
		});

		return this;
	}

	Flashy.Quit = function() {
		$(document).on('click', Flashy.ClassName.btnClass, function(e) {
			Flashy.Out();
		});

		return this;
	}

	function ApplyCallBack() {
		if (typeof FlashyCallBack === "function" && FlashyCallBack) {
			FlashyCallBack();
		} 
	}

	var Plugin = function (title, params, $callBack) {

		if (typeof title == "undefined" && typeof params == "undefined" && typeof $callBack == "undefined") {
			throw new Error("you must specify at least a parameter");
		}

		/*
		| We want to return below the "Plugin" elegant allowing a facility of use 
		| this is why all the conditions allow to check to them various parameters which 
		| the user can transmit to the package. since the "Javascript" manage not the optional  
		| parameters, it is thus we are to counter to make all these probabilities of checking. 
		*/

		if (typeof title == FLASHY_STRING) {
			Flashy.OPTIONS_REPLACE['title'] = title;
		} else 
		if (typeof title == FLASHY_OBJ) {
			CompactParams(title);
		} 
		if (typeof params == FLASHY_OBJ) {
			CompactParams(params);
		} else 
		if (typeof params == FLASHY_FUNCTION) {
			FlashyCallBack = params;
		}   
		if (typeof $callBack == FLASHY_FUNCTION) {
			FlashyCallBack = $callBack;
		}

		Flashy
			.Show()
			.KeyUp()
			.Quit();	
	}

	return Plugin;

}));

