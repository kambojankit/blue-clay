
 

	
	
    /*
    $(document).ready(function(){
      if ($(window).width() > 1136) 
	  	{
		  alert("Computer!"); 
		}
		
      if ($(window).width() <= 1136 && $(window).height() <= 768) 
	  	{
		  alert("Landscape!"); 
		}	
			
      if ($(window).width() <= 768 && $(window).height() <= 1136) 
	  	{
		  alert("Portrait!"); 
		}		
	  
    });
    
	
	*/
	
function scrollTo(hash) {



 
		 $(".work-full").fadeOut(100);
        $(".work-navigation").animate({
            top: "-60px"
       });
        setTimeout(function(){
            $(".work-full-load").empty();
          $("html, body").animate({
                scrollTop: work_before_scroll + "px"
           }, "fast", "easeOutExpo");
        }, 100);
       setTimeout(function(){
           $(".page").fadeIn(100);
       }, 100);
        
     work_opened = $(".work-opened");
    work_opened.removeClass("work-opened");
	
	
		setTimeout(function(){
                location.hash = "#" + hash;
				},1000);
             
	
}

(function($){
    "use strict";
    
    
    // Page loader
    //---------------------------------------------
    
    $(window).load(function(){
        $(".page-loader b").stop(true).delay(100).fadeOut();
        $(".page-loader").stop(true).delay(400).fadeOut("slow");
    });
    
    
    
    // Logo height fix
    //---------------------------------------------
    
    function height_line(height_object, height_donor){
        height_object.height(height_donor.height());
        height_object.css({
            "line-height": height_donor.height() + "px"
        });
    }
    
    $(document).ready(function(){
        height_line($(".nav-logo-wrap .logo"), $(".main-nav"));
    });
    
    
    
    // Parallax
    //---------------------------------------------
    
    $(document).ready(function(){
        if ($(window).width() >= 768) {
            $(".parallax-1").parallax("50%", 0.1);
            $(".parallax-2").parallax("50%", 0.2);
            $(".parallax-3").parallax("50%", 0.3);
        }
    });
   
    
    // Home section height 100%
    //---------------------------------------------
    
    $(document).ready(function(){
        $(".js-height-full").height($(window).height());
    });
    
    $(window).resize(function(){
        $(".js-height-full").height($(window).height());
    });
    
    
    
    // Fittext (responsive text)
    //---------------------------------------------
    
    function fitTextInit(){
        $(".headings").fitText(2.43, {
            minFontSize: '24px',
            maxFontSize: '150px'
        });
        $(".slider-fittext").fitText(8.65, {
            minFontSize: '13px',
            maxFontSize: '30px'
        });
        
        $(".home-description").fitText(3.0, {
            minFontSize: '13px',
            maxFontSize: '20px'
        });
        
        $(".home-description.large").fitText(2.0, {
            minFontSize: '13px',
            maxFontSize: '30px'
        });
        
        $(".phone-number").fitText(1.07655, {
            minFontSize: '22px',
            maxFontSize: '80px'
        });
    }
    
    $(document).ready(function(){
        fitTextInit();
    });
    
    
    
    // Home section slider
    //---------------------------------------------
    
    $(document).ready(function(){
    
        $(".js-word-sliding").bxSlider({
            adaptiveHeight: true,
            mode: "fade",
            pager: false,
            controls: false,
            auto: false,
            speed: 0,
            pause: 5000
        });
        
        //Image slider
        $(".home-image-slider").bxSlider({
            adaptiveHeight: true,
            mode: "horizontal",
            pager: false,
			touchEnabled: false,
            controls: true,
			preventDefaultSwipeY:false,
            auto: false,
            easing: "easeInOutExpo",
            speed: 800,
            pause: 6500,
            video: false,
            useCSS: false
        });
        
    });
    
    
    
    // Tooltips (bootstrap plugin activated)
    //---------------------------------------------
    
    $(document).ready(function(){
    
        $(".nav-social-links a").tooltip({
            placement: "bottom"
        });
        
        $(".social-links a").tooltip({
            placement: "top"
        });
        
    });
    
    
    
    // Scroll navigation
    //---------------------------------------------
    
    $(document).ready(function(){
    

        $(".scroll-nav, .home-call-action, .logo-wrap, .nav-logo-wrap, .banner-button").localScroll({
            target: "body",
            hash: true,
            duration: 1400,
            easing: "easeInOutExpo"
        });
        
        var sections = $(".home-section, .page-section");
        var menu_links = $(".scroll-nav li a");
        
        $(window).scroll(function(){
        
		
            sections.filter(":in-viewport:first").each(function(){
                var active_section = $(this);
                var active_link = $('.scroll-nav li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
				
				
				var xxx = ".inner-nav ul > li > a";
	  setTimeout(function(){   	
	  
	  
		
				// HOME
		 if (($(".clearlist.scroll-nav li:nth-child(4) .active")[0])){ 
			 if ($(window).width() < 1025) {} else { 
		 menu_links.removeClass("gray");
		 menu_links.addClass("white");
		 $(".main-nav").css("background", "rgba(0,0,0,0)");  }
	
		}
		
		// ABOUT
		  if (($(".clearlist.scroll-nav li:nth-child(2) .active")[0])){
		
		 if ($(window).width() < 1025) {} else { 
		 
		   menu_links.removeClass("white");
	 menu_links.addClass("gray");
	 
	$(".main-nav").css("background", "rgba(255,255,255,0.9)"); }
            
			
		}
		
		// SERVICES
		  if (($(".clearlist.scroll-nav li:nth-child(3) .active")[0])){
		
		
		 if ($(window).width() < 1025) {} else { 
		
		menu_links.removeClass("gray");
		menu_links.addClass("white");
		 $(".main-nav").css("background", "rgba(0,0,0,0)"); }
	
		}
		

			// WORK
		  if (($(".clearlist.scroll-nav li:nth-child(5) .active")[0]) ){
		if ($(window).width() < 1025) {} else {  
menu_links.removeClass("white");
	menu_links.addClass("gray");
 $(".main-nav").css("background", "rgba(255,255,255,0.9)"); }
	

		}
		
		
	
		// Check if Contact page is currently being viewed
		  if (($(".clearlist.scroll-nav li:nth-child(6) .active")[0])){
	if ($(window).width() < 1025) {} else {  
  	menu_links.removeClass("white");
	 	menu_links.addClass("gray");
	 	$(".main-nav").css("background", "rgba(255,255,255,0.9)"); }

		}
	
		
		// Check if Testimonials page is currently being viewed
		  if (($(".clearlist.scroll-nav #drop ul li:nth-child(3) .active")[0])){
		if ($(window).width() < 1025) {} else {  
	menu_links.removeClass("gray");
	 	menu_links.addClass("white");

	$(".main-nav").css("background", "rgba(0,0,0,0)"); }
		}
		
		// Check if Team page is currently being viewed
		   if (($(".clearlist.scroll-nav #drop ul li:nth-child(1) .active")[0]) ){
		if ($(window).width() < 1025) {} else {  
	 	menu_links.removeClass("gray");
		menu_links.addClass("white"); 
		$(".main-nav").css("background", "rgba(0,0,0,0)");
		}
	

		}
		
			// Check if Process page is currently being viewed
		  if (($(".clearlist.scroll-nav #drop ul li:nth-child(2) .active")[0]) ){
if ($(window).width() < 1025) {} else {  
  menu_links.removeClass("gray");
		 
	menu_links.addClass("white");
	$(".main-nav").css("background", "rgba(0,0,0,0)");
}

	
		}
		
	
				}, 200);	
		
	
	
	
	
	
            });
            
        });
        $(window).trigger('scroll');
		
	
        
    });
    
    
    
    // Responsive menu
    //---------------------------------------------
    
    $(document).ready(function(){
    
        // Navbar sticky
        
        $(".main-nav").sticky({
            topSpacing: 20
        });
        
        
        var mobile_nav = $(".mobile-nav");
        var desktop_nav = $(".desktop-nav");
        
        height_line($(".inner-nav ul > li > a"), $(".main-nav"));
        height_line(mobile_nav, $(".main-nav"));
        
        mobile_nav.css({
            "width": $(".main-nav").height() + "px"
        });
        
        
        // Mobile menu style on
        
		
		// MOBILE
		
        $(window).resize(function(){
            if ($(window).width() < 1025) {
				
                $(".main-nav").addClass("mobile-on");
				
				
				$("#process-d").removeClass("showing");
				$("#services-d").removeClass("showing");

				$("#process-m").addClass("showing");
				$("#services-m").addClass("showing");
				
				$(".section-heading-medium").addClass("showing");
				$(".section-heading-medium-center").addClass("showing");
				
				$("#awwwards").addClass("hiding");
            }
			
			
			// DESKTOP 
           else 
             if ($(window).width() > 1025) {
                 $(".main-nav").removeClass("mobile-on");
			
				$("#process-d").addClass("showing");
				$("#services-d").addClass("showing");
				
				$("#process-m").removeClass("showing");
				$("#services-m").removeClass("showing");
				
				$(".section-heading-medium").removeClass("showing");
				$(".section-heading-medium-center").removeClass("showing");
				
                    desktop_nav.show();
                }
        });
        $(window).trigger("resize");
        
        
        // Mobile menu toggle
        
        mobile_nav.click(function(){
        
            if (desktop_nav.hasClass("js-opened")) {
                desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                $(this).removeClass("active");
            }
            else {
                desktop_nav.slideDown("slow", "easeOutExpo").addClass("js-opened");
                $(this).addClass("active");
            }
            
        });
        
        desktop_nav.find("a").click(function(){
            if (mobile_nav.hasClass("active")) {
                desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                mobile_nav.removeClass("active");
            }
        });
        
    });
    
    
    
    // Some facts section
    //---------------------------------------------
    
    $(document).ready(function(){
        $(".count-number").appear(function(){
        
            var count = $(this);
            
            count.countTo({
                from: 0,
                to: count.html(),
                speed: 1300,
                refreshInterval: 60,
            });
            
        });
    });
    
    
    
    // Team section
    //---------------------------------------------
    
    $(document).ready(function(){
    
        var team_grid = $(".team-grid");
        var team_item = $(".team-item");
        var team_opened_cont = $(".team-opened-wrap");
        
        team_opened_cont.animate({
            opacity: 0
        });
        
        // Open
        
		
		if ($(window).width() < 769) { 
		
		}
		
		else {
			
        team_item.filter(".js-clickable").click(function(){
        
            team_grid.animate({
                opacity: 0
            }, 400);
            team_grid.slideUp(100, "easeOutExpo");
            $(this).addClass("js-opened");
            
            team_opened_cont.html('<div class="team-opened"><div class="team-close-link"><i class="fa fa-times"></i></div>' + $(this).html() + '</div>');
            
            setTimeout(function(){
                team_opened_cont.slideDown(250, "easeOutExpo");
                team_opened_cont.animate({
                    opacity: 1
                }, 380);
                
				
	
            }, 200);
			
		
            
        });
		
	}
        
        // Close
        
        $("body").on("click", ".team-close-link", function(){
        
            team_opened_cont.animate({
                opacity: 0
            }, 380);
			 
     			team_opened_cont.slideUp(250, "easeOutExpo");
            
            setTimeout(function(){
                team_grid.slideDown(100, "easeOutExpo");
                team_grid.animate({
                    opacity: 1
                }, 380);
                team_item.removeClass("js-opened");
                
                team_opened_cont.empty();
                
            }, 200);
            
        });
        
    });
    
    
    
    // Services Section
    //---------------------------------------------
    
    $(document).ready(function(){
    
        var service_item = $(".service-item");
        
        // On hover effect
        service_item.mouseenter(function(){
        
            if (!(service_item.hasClass("service-opened"))) {
                $(this).addClass("js-hovered");
                service_item.filter(":not(.js-hovered)").addClass("js-fade");
            }
            
            
        });
        service_item.mouseleave(function(){
        
            if (!(service_item.hasClass("service-opened"))) {
                $(this).removeClass("js-hovered");
                service_item.removeClass("js-fade");
            }
			
			
            
        });
        
        // Service open full description
        
        // Open
        $(".service-full").animate({
            opacity: 0
        });
        window.service_opened = 0;
        $(".service-item-inner").click(function(){
        
            if (!(service_item.hasClass("service-opened"))) {
            
                service_opened = $(this).parents(".service-item");
                service_opened.addClass("service-opened").addClass("no-animate").addClass("js-hovered");
            
				
				
                service_item.filter(":not(.js-hovered)").addClass("js-fade");
                
                $(".service-opened .service-more").fadeOut(1000, "easeInOutBack");
                service_opened.find(".service-wrap").animate({
                    paddingBottom: 70
                }, 600, "easeInOutBack");
                
                setTimeout(function(){
                    service_opened.find(".service-full").slideDown(1000, "easeInOutBack");
                    service_opened.find(".service-full").animate({
                        opacity: 1
                    }, 750, "easeInOutBack");
                }, 0);
                
                setTimeout(function(){
                    service_opened.find(".service-close-link").fadeIn(750, "easeInOutBack");
                }, 600);
				 
				  setTimeout(function(){
                     service_opened.find(".service-wrap").append('<div class="service-close-link"><span class="icon-close"></span></div>');
                }, 600); 
				  
		
            }
			
		
        });
		
		

		
        
		$("body").on("click", "#drop a:nth-child(1)", function(){
			
			$(".main-nav a").css("color","#FFF");
			
		});
		
		
		

		
		
      // Close	
        $("body").on("click", ".service-close-link", function(){
        
            $(this).fadeOut(700, "easeInOutBack");
            setTimeout(function(){
                service_opened.find(".service-full").animate({
                    opacity: 0
                }, 300, "easeOutExpo");
                service_opened.find(".service-full").slideUp(500, "easeInOutExpo");
            }, 0);
            
            service_opened.find(".service-wrap").animate({
                paddingBottom: 70
            }, 600, "easeOutExpo");
            
            setTimeout(function(){
                service_opened.find(".service-more").fadeIn(300, "easeInExpo");
            }, 500);
            
            setTimeout(function(){
                service_opened.removeClass("service-opened").removeClass("no-animate").removeClass("js-hovered");
                service_item.removeClass("js-fade");
                service_opened.find(".service-close-link").remove();
            }, 800);
            
        });
		
		
		
        
    });
    
  
	 
    
    // Portfolio Filtering
    //---------------------------------------------
    
    // Works filtering
    
    $(document).ready(function(){
    
        $("#work-grid").mixitup({
            effects: ['fade', 'scale', 'rotateY'],
            easing: 'snap'
        });
        
    });
    
    
    
    // Twitter Section
    //---------------------------------------------
    
    $(document).ready(function(){
    
        // Twitter feed
        
        var twDiv = $(".twitter-feed");
        
        var twUsername = twDiv.attr("data-username");
        
        twDiv.tweet({
            username: twUsername,
            join_text: 'auto',
            avatar_size: 0,
            count: 5,
            template: '{text} <div class="tc-author">{time}</div>'
        });
        
        $(".twitter-feed ul").addClass("tc-slider").addClass("twitter-slider");
        
	
		if ($(window).width() <= 1024 )  {        
        // Twitter slider
        $(".twitter-slider").bxSlider({
            nextSelector: "#tc-controls-1 .tc-arrow-right",
            prevSelector: "#tc-controls-1 .tc-arrow-left",
            nextText: "<i class='fa fa-angle-right'></i>",
            prevText: "<i class='fa fa-angle-left'></i>",
            pager: false,
			touchEnabled: true,
            auto: true,
            pause: 5000,
            mode: "horizontal",
			preventDefaultSwipeY: false,
            adaptiveHeight: false
        });
		
		}
		
		if ($(window).width() > 1024)  {        
        // Twitter slider
        $(".twitter-slider").bxSlider({
            nextSelector: "#tc-controls-1 .tc-arrow-right",
            prevSelector: "#tc-controls-1 .tc-arrow-left",
            nextText: "<i class='fa fa-angle-right'></i>",
            prevText: "<i class='fa fa-angle-left'></i>",
            pager: false,
			touchEnabled: false,
            auto: true,
            pause: 5000,
            mode: "fade",
			preventDefaultSwipeY: true,
            adaptiveHeight: false
        });
		
		}
		
        
    });
    
    
    
    // Clients Sectiron
    //---------------------------------------------
    
    $(document).ready(function(){
    
        // Reviews slider
        $(".clients-slider").bxSlider({
            nextSelector: "#tc-controls-2 .tc-arrow-right",
            prevSelector: "#tc-controls-2 .tc-arrow-left",
            nextText: "<i class='fa fa-angle-right'></i>",
            prevText: "<i class='fa fa-angle-left'></i>",
            pager: false,
            auto: true,
            pause: 1000,
            mode: "fade",
            adaptiveHeight: true
        });
        
    });
    
    
    
    // Contact form
    //---------------------------------------------
    
    $(function(){
        $("#form").submit(function(e){
        
            // Stop the form actually posting
            e.preventDefault();
            
            // Send the request
            $.post("contact.php", {
                name: $("#name").val(),
                email: $("#email").val(),
                text: $("#text").val(),
				captcha: $("#captcha").val()
            }, function(d){
                console.log(d);
                // Here we handle the response from the script
                // We are just going to alert the result for now
                
                $(".contact-form-wrap").height($(".contact-form").height());
                
                $("#form").slideUp(300, "easeInExpo");
                
                setTimeout(function(){
                    service_opened
                    $(".form-success").html(d).slideDown(300, "easeOutExpo");
                }, 450);
                
            });
        });
    });
    
    
})(jQuery);


function initWorkSlider(){

    (function($){
        "use strict";
        
        $(".work-full-slider").bxSlider({
            adaptiveHeight: false,
            pager: false,
            controls: true,
            auto: true,
            speed: 1000,
            pause: 5000,
            video: true,
            useCSS: false
        });
        $(".work-full-media").fitVids();
        
    })(jQuery);
    
};

// Works expander
//---------------------------------------------

$(window).load(function(){

    (function($){
        "use strict";
        
        // Works slider
        initWorkSlider()
        
        //Top panel sticky
        $(".work-navigation").sticky({
            topSpacing: 1
        });
		
    })(jQuery);
    
    
    // Hash change function
    function hash_change(url){
        (function($){
         "use strict";
            var hash_url = "#/" + url.replace(" .work-wrapper", "");
            window.location.hash = hash_url;
        })(jQuery);
    }
	
	
    // Open work
	(function($){
    "use strict";
    window.work_before_scroll = $("#works").scrollTop();
    $(".work-item-link").click(function(){
        work_before_scroll = $(window).scrollTop();
        $(this).addClass("work-opened");
        
		/*
        $(".main-nav").animate({
            top: -100
        });
		*/
		
        $(".page").fadeOut(400);
        setTimeout(function(){
            $(".work-full").fadeIn(500);
            
            initWorkSlider();
            
            if (work_before_scroll != 0) {
                $("html, body").animate({
                    scrollTop: 0
                }, "fast", "easeOutExpo");
            }
            
        }, 550);
        
        var work_url = $(this).attr("href") + ' ' + '.work-wrapper';
        
        $(".work-full-load").load(work_url, function(){
        
            $(".work-loader").delay(700).fadeOut(500);
            $(".work-navigation").animate({
                top: 0
            }, 900, "easeOutCirc");
            
        });
        hash_change(work_url);
        
        return false;
    });
	
	})(jQuery);
	
    // All works (close work)	
    function close_work(){
        $(".work-full").fadeOut(100);
        $(".work-navigation").animate({
            top: "-60px"
        });
        setTimeout(function(){
            $(".work-full-load").empty();
            $("html, body").animate({
                scrollTop: work_before_scroll + "px"
            }, "fast", "easeOutExpo");
        }, 100);
        setTimeout(function(){
            $(".page").fadeIn(100);
        }, 100);
        
        work_opened = $(".work-opened");
        work_opened.removeClass("work-opened");
    }
    
    (function($){
        "use strict";
        $(".work-all").click(function(){
            close_work();
            //Hash change
            window.location.hash = "";
        });
    })(jQuery);
    
    
    
    // Prev work
    function prev_work(){
        $(".work-loader").fadeIn(300);
        var work_prev_url = $(".work-opened").parent().prev(".work-item").find(".work-item-link").attr("href") +
        ' ' +
        '.work-wrapper';
        
        setTimeout(function(){
            $(".work-full-load").empty().load(work_prev_url, function(){
                initWorkSlider();
                $(".work-loader").delay(200).fadeOut(500);
            });
        }, 500);
        
        var work_opened = $(".work-opened").parent().prev(".work-item").find(".work-item-link");
        $(".work-item-link").removeClass("work-opened");
        work_opened.addClass("work-opened");
        
        // If left end of the links
        if ($(".work-opened").parent().is(":first")) {
            work_prev_url = $(".work-item").last().find(".work-item-link").attr("href") +
            ' ' +
            '.work-wrapper';
            
            setTimeout(function(){
                $(".work-full-load").empty().load(work_prev_url, function(){
                    initWorkSlider();
                    $(".work-loader").delay(200).fadeOut(500);
                });
            }, 500);
            work_opened = $(".work-item").last().find(".work-item-link");
            $(".work-item-link").removeClass("work-opened");
            work_opened.addClass("work-opened");
        }
        // Hash cahnge
        hash_change(work_prev_url);
    }
	
    (function($){
        "use strict";
        $(".work-prev").click(function(){
            prev_work();
        });
    })(jQuery);
    
    // Next work
    function next_work(){
        $(".work-loader").fadeIn(300);
        var work_next_url = $(".work-opened").parent().next(".work-item").find(".work-item-link").attr("href") +
        ' ' +
        '.work-wrapper';
        
        setTimeout(function(){
            $(".work-full-load").empty().load(work_next_url, function(){
                initWorkSlider();
                $(".work-loader").delay(200).fadeOut(500);
            });
        }, 500);
        
        var work_opened = $(".work-opened").parent().next(".work-item").find(".work-item-link");
        $(".work-item-link").removeClass("work-opened");
        work_opened.addClass("work-opened");
        
        // If right end of the links
        if ($(".work-opened").parent().is(":last")) {
            work_next_url = $(".work-item").first().find(".work-item-link").attr("href") +
            ' ' +
            '.work-wrapper';
            
            setTimeout(function(){
                $(".work-full-load").empty().load(work_next_url, function(){
                    initWorkSlider();
                    $(".work-loader").delay(200).fadeOut(500);
                });
            }, 500);
            work_opened = $(".work-item").first().find(".work-item-link");
            $(".work-item-link").removeClass("work-opened");
            work_opened.addClass("work-opened");
            
        }
        // Hash cahnge
        hash_change(work_next_url);
    }
	
    (function($){
        "use strict";
        $(".work-next").click(function(){
            next_work();
        });
    })(jQuery);
	
    // Hash change event
	(function($){
    "use strict";
    $(window).hashchange(function(){
        if ((location.hash.search("/works") == -1) && ($(".work-full").is(":visible"))) {
            close_work();
        }
        else {
            var hash_new = location.hash;
            var work_url = hash_new.replace("#/", "") + ' ' + '.work-wrapper';
            
            
            if ((hash_new.replace("#/", "") != $(".work-opened").attr("href")) && ($(".work-full").is(":visible"))) {
                $(".work-loader").fadeIn(300);
                
                setTimeout(function(){
                    $(".work-full-load").empty().load(work_url, function(){
                        initWorkSlider();
                        $(".work-loader").delay(200).fadeOut(500);
                    });
                }, 200);
                
                
                if (work_before_scroll != 0) {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow", "easeOutExpo");
                }
                
                var work_opened = $(".work-item-link[href = '" + work_url.replace(" .work-wrapper", "") + "']");
                $(".work-item-link").removeClass("work-opened");
                work_opened.addClass("work-opened");
            }
            
            if ((hash_new.replace("#/", "") != $(".work-opened").attr("href")) && ($(".work-full").is(":hidden")) && (location.hash.search("/works") != -1)) {
            
                $(".page").fadeOut(500);
                setTimeout(function(){
                    $(".work-full").fadeIn(500);
                }, 550);
                
                setTimeout(function(){
                    $(".work-full-load").empty().load(work_url, function(){
                        initWorkSlider();
                        $(".work-loader").delay(200).fadeOut(500);
                        $(".work-navigation").animate({
                            top: 0
                        }, 900, "easeOutCirc");
                        
                        if (work_before_scroll != 0) {
                            $("html, body").animate({
                                scrollTop: 0
                            }, "fast", "easeOutExpo");
                        }
                    });
                }, 650);
                
                var work_opened = $(".work-item-link[href = '" + work_url.replace(" .work-wrapper", "") + "']");
                $(".work-item-link").removeClass("work-opened");
                work_opened.addClass("work-opened");
            }
            
        }
    });
    $(window).trigger('hashchange');
	})(jQuery);
});



(function($){
    "use strict";
    
    // Shortcodes
    //---------------------------------------------
    
    $(document).ready(function(){
    
        // Accordion
        var allPanels = $(".accordion > dd").hide();
        allPanels.first().slideDown("easeOutExpo");
        // $(".accordion > dt > a").first().addClass("active");
        
        $(".accordion > dt > a").click(function(){
        
            var current = $(this).parent().next("dd");
            $(".accordion > dt > a").removeClass("active");
            $(this).addClass("active");
            allPanels.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");
            
            return false;
            
        });
        
        // Toggle
        var allToggles = $(".toggle > dd").hide();
        
        $(".toggle > dt > a").click(function(){
        
            if ($(this).hasClass("active")) {
            
                $(this).parent().next().slideUp("easeOutExpo");
                $(this).removeClass("active");
                
            }
            else {
                var current = $(this).parent().next("dd");
                $(this).addClass("active");
                $(this).parent().next().slideDown("easeOutExpo");
            }
            
            return false;
        });
        
        //Video
        $(".video").fitVids();
        
    });
    
    
    
    // Blog
    //---------------------------------------------
    
    $(document).ready(function(){
    
        $(".blog-slider").bxSlider({
            adaptiveHeight: true,
            pager: false,
            controls: true,
            auto: true,
            speed: 500,
            pause: 5000,
            video: true,
            useCSS: false
        });
        $(".blog-media").fitVids();
        
    });
    
    
    
    // Google maps
    //---------------------------------------------
    
    function rgb2hex(rgb){
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }
    
    $(document).ready(function(){
    
        var gmMapDiv = $("#map-canvas");
        
        var gmCenterAddress = gmMapDiv.attr("data-address");
        var gmMarkerAddress = gmMapDiv.attr("data-address");
        var gmText = gmMapDiv.attr("data-text");
        var gmColor = rgb2hex(gmMapDiv.css("background-color"));
        
        gmMapDiv.initMap({
        
            /* *****Enter Your Address Here ***** */
            center: gmCenterAddress,
            
            markers: {
                /* *****Enter Your Point Address Here ***** */
                marker_1: {
                    position: gmMarkerAddress,
                    options: {
                        icon: "images/map-mark.png"
                    },
					
                    info_window: {
                        content: gmText,
                        maxWidth: 240,
                        zIndex: 2
                    }
                }
            },
            
            type: "roadmap",
            
            // Google Maps Api Options
            options: {
                zoom: 14,
                zoomControl: false,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                },
                disableDoubleClickZoom: true,
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: false,
                streetViewControl: false,
                draggable: false,
                overviewMapControl: false,
                overviewMapControlOptions: {
                    opened: false
                },
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 70
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 10
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 70
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 70
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
						"visibility": "off"
					}, {
                        "color": gmColor
                    }, {
                        "lightness": 35
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": gmColor
                    }, {
                        "lightness": 0
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": gmColor
                    }, {
                        "lightness": 90
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 10
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 10
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": gmColor
                    }, {
                        "lightness": 10
                    }, {
                        "weight": 1.2
                    }]
                }]
            }
        });
    });

    // Some facts section
    //---------------------------------------------
    
	
	/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.5
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/

(function(d){function r(e,c,l,b,a){function f(){n.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");c&&x(c,l,b,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];v.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||v.css({display:"none",opacity:"0"});n.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+
(a.resizeContainer?"height":""));"list"==a.layoutMode?(p.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(p.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){v.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;a.filter=e;if("function"==typeof a.onMixStart){var g=a.onMixStart.call(this,
a);a=g?g:a}for(var k=a.transitionSpeed,g=0;2>g;g++){var h=0==g?h=a.prefix:"";a.transition[h+"transition"]="all "+k+"ms linear";a.transition[h+"transform"]=h+"translate3d(0,0,0)";a.perspective[h+"perspective"]=a.perspectiveDistance+"px";a.perspective[h+"perspective-origin"]=a.perspectiveOrigin}var w=a.targetSelector,v=b.find(w);v.each(function(){this.data={}});var n=v.parent();n.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");
"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");g="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<g.indexOf("fade")?"0":"",a.scale=-1<g.indexOf("scale")?"scale(.01)":"",a.rotateZ=
-1<g.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<g.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<g.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<g.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<g.indexOf("grayscale")?"grayscale(100%)":"");var p=d(),s=d(),t=[],r=!1;"string"===typeof e?t=z(e):(r=!0,d.each(e,function(a){t[a]=z(this)}));"or"==a.filterLogic?(""==t[0]&&t.shift(),1>t.length?s=s.add(b.find(w+":visible")):v.each(function(){var a=d(this);if(r){var b=0;d.each(t,function(d){this.length?
a.is("."+this.join(", ."))&&b++:0<b&&b++});b==t.length?p=p.add(a):s=s.add(a)}else a.is("."+t.join(", ."))?p=p.add(a):s=s.add(a)})):(p=p.add(n.find(w+"."+t.join("."))),s=s.add(n.find(w+":not(."+t.join(".")+"):visible")));e=p.length;var u=d(),q=d(),m=d();s.each(function(){var a=d(this);"none"!=a.css("display")&&(u=u.add(a),m=m.add(a))});if(p.filter(":visible").length==e&&!u.length&&!c){if(a.origLayout==a.layoutMode)return f(),!1;if(1==p.length)return"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),
m.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),m.css("display",a.targetDisplayGrid)),f(),!1}a.origHeight=n.height();if(p.length){b.removeClass(a.failClass);p.each(function(){var a=d(this);"none"==a.css("display")?q=q.add(a):m=m.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),m.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),
m.css("display",a.targetDisplayGrid)),f(),!1;if(!window.atob)return f(),!1;v.css(a.clean);m.each(function(){this.data.origPos=d(this).offset()});"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),q.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),q.css("display",a.targetDisplayGrid));q.each(function(){this.data.showInterPos=d(this).offset()});u.each(function(){this.data.hideInterPos=d(this).offset()});m.each(function(){this.data.preInterPos=
d(this).offset()});"list"==a.layoutMode?m.css("display",a.targetDisplayList):m.css("display",a.targetDisplayGrid);c&&x(c,l,b,a);if(c&&A(a.origSort,a.checkSort))return f(),!1;u.hide();q.each(function(a){this.data.finalPos=d(this).offset()});m.each(function(){this.data.finalPrePos=d(this).offset()});a.newHeight=n.height();c&&x("reset",null,b,a);q.hide();m.css("display",a.origDisplay);"block"==a.origDisplay?(b.addClass(a.listClass),q.css("display",a.targetDisplayList)):(b.removeClass(a.listClass),q.css("display",
a.targetDisplayGrid));a.resizeContainer&&n.css("height",a.origHeight+"px");e={};for(g=0;2>g;g++)h=0==g?h=a.prefix:"",e[h+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,e[h+"filter"]=a.blur+" "+a.grayscale;q.css(e);m.each(function(){var b=this.data,c=d(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var e={},k=0;2>k;k++){var h=
0==k?h=a.prefix:"";e[h+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(e)});"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass)):(b.addClass(a.gridClass),b.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var e=0==c?e=a.prefix:"";b[e+"transition"]="all "+k+"ms ease-in-out";b.height=a.newHeight+"px"}n.css(b)}u.css("opacity",a.fade);q.css("opacity",1);q.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;
b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},e=0;2>e;e++){var h=0==e?h=a.prefix:"";c[h+"transition-property"]=h+"transform, "+h+"filter, opacity";c[h+"transition-timing-function"]=a.easing+", linear, linear";c[h+"transition-duration"]=k+"ms";c[h+"transition-delay"]="0";c[h+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[h+"filter"]="none"}d(this).css("-webkit-transition","all "+k+"ms "+a.easingFallback).css(c)});m.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-
b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},e=0;2>e;e++){var h=0==e?h=a.prefix:"";c[h+"transition"]="all "+k+"ms "+a.easing;c[h+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}d(this).css("-webkit-transition","all "+k+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)e=0==c?e=a.prefix:"",b[e+"transition"]="all "+k+"ms "+a.easing+", "+e+"filter "+k+"ms linear, opacity "+k+"ms linear",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+
a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;u.css(b);n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(a){if(-1<a.originalEvent.propertyName.indexOf("transform")||-1<a.originalEvent.propertyName.indexOf("opacity"))-1<w.indexOf(".")?d(a.target).hasClass(w.replace(".",""))&&f():d(a.target).is(w)&&f()})},10);a.failsafe=setTimeout(function(){a.mixing&&f()},k+400)}else{a.resizeContainer&&n.css("height",a.origHeight+"px");if(!window.atob)return f(),!1;
u=s;setTimeout(function(){n.css(a.perspective);if(a.resizeContainer){for(var c={},e=0;2>e;e++){var d=0==e?d=a.prefix:"";c[d+"transition"]="height "+k+"ms ease-in-out";c.height=a.minHeight+"px"}n.css(c)}v.css(a.transition);if(s.length){c={};for(e=0;2>e;e++)d=0==e?d=a.prefix:"",c[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,c[d+"filter"]=a.blur+" "+a.grayscale,c.opacity=a.fade;u.css(c);n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(c){if(-1<c.originalEvent.propertyName.indexOf("transform")||
-1<c.originalEvent.propertyName.indexOf("opacity"))b.addClass(a.failClass),f()})}else a.mixing=!1},10)}}function x(e,c,l,b){function a(a,b){var c=isNaN(1*a.attr(e))?a.attr(e).toLowerCase():1*a.attr(e),d=isNaN(1*b.attr(e))?b.attr(e).toLowerCase():1*b.attr(e);return c<d?-1:c>d?1:0}function f(a){"asc"==c?k.prepend(a).prepend(" "):k.append(a).append(" ")}function g(a){a=a.slice();for(var b=a.length,c=b;c--;){var e=parseInt(Math.random()*b),d=a[c];a[c]=a[e];a[e]=d}return a}l.find(b.targetSelector).wrapAll('<div class="mix_sorter"/>');
var k=l.find(".mix_sorter");b.origSort.length||k.find(b.targetSelector+":visible").each(function(){d(this).wrap("<s/>");b.origSort.push(d(this).parent().html().replace(/\s+/g,""));d(this).unwrap()});k.empty();if("reset"==e)d.each(b.startOrder,function(){k.append(this).append(" ")});else if("default"==e)d.each(b.origOrder,function(){f(this)});else if("random"==e)b.newOrder.length||(b.newOrder=g(b.startOrder)),d.each(b.newOrder,function(){k.append(this).append(" ")});else if("custom"==e)d.each(c,function(){f(this)});
else{if("undefined"===typeof b.origOrder[0].attr(e))return console.log("No such attribute found. Terminating"),!1;b.newOrder.length||(d.each(b.origOrder,function(){b.newOrder.push(d(this))}),b.newOrder.sort(a));d.each(b.newOrder,function(){f(this)})}b.checkSort=[];k.find(b.targetSelector+":visible").each(function(a){var c=d(this);0==a&&c.attr("data-checksum","1");c.wrap("<s/>");b.checkSort.push(c.parent().html().replace(/\s+/g,""));c.unwrap()});l.find(b.targetSelector).unwrap()}function B(e){for(var c=
["Webkit","Moz","O","ms"],d=0;d<c.length;d++)if(c[d]+"Transition"in e.style)return c[d];return"transition"in e.style?"":!1}function A(e,c){if(e.length!=c.length)return!1;for(var d=0;d<c.length;d++)if(e[d].compare&&!e[d].compare(c[d])||e[d]!==c[d])return!1;return!0}function z(e){e=e.replace(/\s{2,}/g," ");var c=e.split(" ");d.each(c,function(d){"all"==this&&(c[d]="mix_all")});""==c[0]&&c.shift();return c}var y={init:function(e){return this.each(function(){var c=window.navigator.appVersion.match(/Chrome\/(\d+)\./),
c=c?parseInt(c[1],10):!1,l=function(a){a=document.getElementById(a);var b=a.parentElement,c=document.createElement("div"),d=document.createDocumentFragment();b.insertBefore(c,a);d.appendChild(a);b.replaceChild(a,c)};(c&&31==c||32==c)&&l(this.id);var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",
transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},
clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};e&&d.extend(b,e);this.config=b;d.support.touch="ontouchend"in document;d.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=d(this);var a=b.container;b.prefix=B(a[0]);b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";a.find(b.targetSelector).each(function(){b.origOrder.push(d(this))});if(b.sortOnLoad){var f;d.isArray(b.sortOnLoad)?(c=b.sortOnLoad[0],f=b.sortOnLoad[1],d(b.sortSelector+"[data-sort="+b.sortOnLoad[0]+
"][data-order="+b.sortOnLoad[1]+"]").addClass("active")):(d(b.sortSelector+"[data-sort="+b.sortOnLoad+"]").addClass("active"),c=b.sortOnLoad,b.sortOnLoad="desc");x(c,f,a,b)}for(f=0;2>f;f++)c=0==f?c=b.prefix:"",b.transition[c+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[c+"perspective"]=b.perspectiveDistance+"px",b.perspective[c+"perspective-origin"]=b.perspectiveOrigin;for(f=0;2>f;f++)c=0==f?c=b.prefix:"",b.clean[c+"transition"]="none";"list"==b.layoutMode?(a.addClass(b.listClass),
b.origDisplay=b.targetDisplayList):(a.addClass(b.gridClass),b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;f=b.showOnLoad.split(" ");d.each(f,function(){d(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});a.find(b.targetSelector).addClass("mix_all");"all"==f[0]&&(f[0]="mix_all",b.showOnLoad="mix_all");var g=d();d.each(f,function(){g=g.add(d("."+this))});g.each(function(){var a=d(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);
a.css(b.transition)});setTimeout(function(){b.mixing=!0;g.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?g.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):g.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;d(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var c=
d(this),e=c.attr("data-sort"),f=c.attr("data-order");if(!c.hasClass("active"))d(b.sortSelector).removeClass("active"),c.addClass("active");else if("random"!=e)return!1;a.find(b.targetSelector).each(function(){b.startOrder.push(d(this))});r(b.filter,e,f,a,b)}});d(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var c=d(this);if(!1==b.multiFilter)d(b.filterSelector).removeClass("active"),c.addClass("active"),b.filter=c.attr("data-filter"),d(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active");
else{var e=c.attr("data-filter");c.hasClass("active")?(c.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+e),"")):(c.addClass("active"),b.filter=b.filter+" "+e)}r(b.filter,null,null,a,b)}})})},toGrid:function(){return this.each(function(){var e=this.config;"grid"!=e.layoutMode&&(e.layoutMode="grid",r(e.filter,null,null,d(this),e))})},toList:function(){return this.each(function(){var e=this.config;"list"!=e.layoutMode&&(e.layoutMode="list",r(e.filter,null,null,d(this),e))})},filter:function(e){return this.each(function(){var c=
this.config;c.mixing||(d(c.filterSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+e+'"]').addClass("active"),r(e,null,null,d(this),c))})},sort:function(e){return this.each(function(){var c=this.config,l=d(this);if(!c.mixing){d(c.sortSelector).removeClass("active");if(d.isArray(e)){var b=e[0],a=e[1];d(c.sortSelector+'[data-sort="'+e[0]+'"][data-order="'+e[1]+'"]').addClass("active")}else d(c.sortSelector+'[data-sort="'+e+'"]').addClass("active"),b=e,a="desc";l.find(c.targetSelector).each(function(){c.startOrder.push(d(this))});
r(c.filter,b,a,l,c)}})},multimix:function(e){return this.each(function(){var c=this.config,l=d(this);multiOut={filter:c.filter,sort:null,order:"desc",layoutMode:c.layoutMode};d.extend(multiOut,e);c.mixing||(d(c.filterSelector).add(c.sortSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!==typeof multiOut.sort&&(d(c.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),l.find(c.targetSelector).each(function(){c.startOrder.push(d(this))})),
c.layoutMode=multiOut.layoutMode,r(multiOut.filter,multiOut.sort,multiOut.order,l,c))})},remix:function(e){return this.each(function(){var c=this.config,l=d(this);c.origOrder=[];l.find(c.targetSelector).each(function(){var b=d(this);b.addClass("mix_all");c.origOrder.push(b)});c.mixing||"undefined"===typeof e||(d(c.filterSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+e+'"]').addClass("active"),r(e,null,null,l,c))})}};d.fn.mixitup=function(d,c){if(y[d])return y[d].apply(this,Array.prototype.slice.call(arguments,
1));if("object"===typeof d||!d)return y.init.apply(this,arguments)};d.fn.removeStyle=function(e){return this.each(function(){var c=d(this);e=e.replace(/\s+/g,"");var l=e.split(",");d.each(l,function(){var b=RegExp(this.toString()+"[^;]+;?","g");c.attr("style",function(a,c){if(c)return c.replace(b,"")})})})}})(jQuery);




(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);




/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function(e){e.fn.appear=function(t,n){var r=e.extend({data:undefined,one:true,accX:0,accY:0},n);return this.each(function(){var n=e(this);n.appeared=false;if(!t){n.trigger("appear",r.data);return}var i=e(window);var s=function(){if(!n.is(":visible")){n.appeared=false;return}var e=i.scrollLeft();var t=i.scrollTop();var s=n.offset();var o=s.left;var u=s.top;var a=r.accX;var f=r.accY;var l=n.height();var c=i.height();var h=n.width();var p=i.width();if(u+l+f>=t&&u<=t+c+f&&o+h+a>=e&&o<=e+p+a){if(!n.appeared)n.trigger("appear",r.data)}else{n.appeared=false}};var o=function(){n.appeared=true;if(r.one){i.unbind("scroll",s);var o=e.inArray(s,e.fn.appear.checks);if(o>=0)e.fn.appear.checks.splice(o,1)}t.apply(this,arguments)};if(r.one)n.one("appear",r.data,o);else n.bind("appear",r.data,o);i.scroll(s);e.fn.appear.checks.push(s);s()})};e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=e.fn.appear.checks.length;if(t>0)while(t--)e.fn.appear.checks[t]()},run:function(){if(e.fn.appear.timeout)clearTimeout(e.fn.appear.timeout);e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}});e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,n){var r=e.fn[n];if(r){e.fn[n]=function(){var t=r.apply(this,arguments);e.fn.appear.run();return t}}})})(jQuery);(function(e){e.fn.countTo=function(t){t=e.extend({},e.fn.countTo.defaults,t||{});var n=Math.ceil(t.speed/t.refreshInterval),r=(t.to-t.from)/n;return e(this).each(function(){function a(){o+=r;s++;e(i).html(o.toFixed(t.decimals));if(typeof t.onUpdate=="function"){t.onUpdate.call(i,o)}if(s>=n){clearInterval(u);o=t.to;if(typeof t.onComplete=="function"){t.onComplete.call(i,o)}}}var i=this,s=0,o=t.from,u=setInterval(a,t.refreshInterval)})};e.fn.countTo.defaults={from:0,to:100,speed:1e3,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null}})(jQuery)




jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});


/*! Google Maps jQuery plugin - v1.0.6 - 2013-06-23
* http://jeromesmadja.github.io/initmapjs/ 
* 2013 Jerome Smadja; Licensed MIT */
!function(a){"use strict";function b(){var b,c=this;c.marker_collection=[],c.init=function(d){var e=this[0],f={options:{center:new g(0,0).get(),zoom:2,mapTypeId:(new i).get("hybrid")}};void 0!==d&&d.controls&&a.extend(f.options,new p(d.controls));var h=a.extend(!0,f,d);return b=c.initMap(e,f.options),h.geolocation&&(c.marker_collection.geolocation_marker={deferred:a.Deferred()},new n(b,h.geolocation,c.marker_collection.geolocation_marker,h.center).init()),h.center&&q.center(b,h.center),h.type&&b.setMapTypeId((new i).get(h.type)),h.markers&&c.markers.add(h.markers),c},c.initMap=function(a,b){return new o.Map(a,b)},c.getMap=function(){return b},c.markers={get:function(a,b){c.markers.exists(a)&&c.marker_collection[a].deferred.done(function(){b.call(this,c.marker_collection[a].marker)})},remove:function(a){c.markers.exists(a)&&c.marker_collection[a].deferred.done(function(){var b=c.marker_collection[a].marker;b.setMap(null),delete c.marker_collection[a]})},all:function(b){var d=q.getKeys(c.marker_collection),e={},f=[];a.map(d,function(a){f.push(c.marker_collection[a].deferred)}),a.when.apply(c,f).done(function(){a.map(d,function(a){void 0!==c.marker_collection[a]&&(e[a]=c.marker_collection[a].marker)}),b.call(c,e)})},add:function(g){a.map(g,function(g,i){c.marker_collection[i]={deferred:a.Deferred()};var j=new d(b,i,g,new e(b,new h),new f).place(c.marker_collection[i].deferred);j.done(function(a){c.marker_collection[i]={deferred:j,marker:a}})})},exists:function(b){return void 0===c.marker_collection[b]?a.error('Marker id "'+b+'" does not exist'):!0}}}function c(a){this.gGeocoder=o.Geocoder,this.position=a}function d(a,b,c,d,e){this.id=b,"undefined"!=typeof c&&(this.map=a,this.options=void 0!==c.options?c.options:{},this.position=c.position,this.title=c.title,this.info_window=c.info_window,this.animation=c.animation),this.GMarker=o.Marker,this.Infowindow=d,this.Animation=e,void 0!==this.animation&&(this.options.animation=this.animate())}function e(a,b){this.GInfoWindow=o.InfoWindow,this.gEvent=b,this.map=a}function f(){this.GAnimation=o.Animation}function g(a,b,c){this.GLatLng=o.LatLng,this.lat=a,this.lng=b,this.nowrap=c}function h(){return o.event}function i(){this.map_type_id=o.MapTypeId}function j(b,c,d,e){var f={};return void 0!==b.position&&(f=d.get(b.position)),void 0!==b.type&&("object"==typeof b.type&&(a.map(b.type,function(a,d){b.type[d]=c.get(b.type[d])}),f.mapTypeIds=b.type),"string"==typeof b.type&&(f.mapTypeIds=[c.get(b.type)])),void 0!==b.style&&(f.style=e.get(b.style)),f}function k(){this.control_position=o.ControlPosition}function l(){this.control_style=o.MapTypeControlStyle}function m(){this.zoom_control_style=o.ZoomControlStyle}function n(a,b,c,i){this.map=a;var j=this;j.init=function(){if(j.has()){var a={};"object"==typeof b.options&&(a=b.options),navigator.geolocation.getCurrentPosition(j.set,j.error,a)}else"function"==typeof b.unsupported&&b.unsupported.call(j.map)},j.has=function(){return"undefined"!=typeof navigator.geolocation},j.set=function(a){var i=new g(a.coords.latitude,a.coords.longitude).get();if(b.center&&q.setCenter(j.map,i),b.marker){var k={};"object"==typeof b.marker&&(k=b.marker),c.marker=new d(j.map,"geolocation_marker",k,new e(j.map,new h),new f).createMarker(i),c.deferred.resolve(c.marker)}j.success(a)},j.error=function(a){q.center(j.map,i),"function"==typeof b.error&&b.error.call(j.map,a)},j.success=function(a){"function"==typeof b.success&&b.success.call(j.map,a)}}var o=google.maps;a.fn.initMap=function(){this.length||a.error('There is no element "'+this.selector+'"');var c=arguments,d=[];return this.each(function(){d.push((new b).init.apply(a(this),c))}),1===d.length&&(d[0].length=1,d=d[0]),d},c.prototype.getGeocode=function(){var b=a.Deferred();return(new this.gGeocoder).geocode({address:this.position},function(a,c){"OK"===c?b.resolve(a):b.reject(c)}),b.promise()},d.prototype={animate:function(){return this.Animation.start(this.animation)},infowindow:function(b,c){var d=this.Infowindow.add(b),e="click";"string"==typeof b.showOn&&(e=b.showOn),this.Infowindow.attachMarker(c,e,d),"string"==typeof b.hideOn&&("click"===b.hideOn&&a.error('"click" event can not be used for closing infowindow'),this.Infowindow.close(c,b.hideOn,d))},place:function(b){if("object"==typeof this.position){var d=new g(this.position[0],this.position[1]).get(),e=new this.GMarker(a.extend(this.options,{map:this.map,position:d}));b.resolve(e),this.setOptions(e)}if("string"==typeof this.position){var f=this;new c(f.position).getGeocode().done(function(c){var d=c[0].geometry.location,e=new f.GMarker(a.extend(f.options,{map:f.map,position:d}));b.resolve(e),f.setOptions(e)}).fail(function(a){b.reject(a)})}return b},createMarker:function(b){var c=new this.GMarker(a.extend(this.options,{map:this.map,position:b}));return this.setOptions(c),c},setOptions:function(a){void 0!==this.info_window&&this.infowindow(this.info_window,a)}},e.prototype={add:function(a){if(void 0!==a){var b=new this.GInfoWindow(a);return"function"==typeof a.closeclick&&this.attachEvent(b,"closeclick",a),"function"==typeof a.content_changed&&this.attachEvent(b,"content_changed",a),"function"==typeof a.domready&&this.attachEvent(b,"domready",a),"function"==typeof a.position_changed&&this.attachEvent(b,"position_changed",a),"function"==typeof a.zindex_changed&&this.attachEvent(b,"zindex_changed",a),b}},attachEvent:function(a,b,c){var d=this.map;return this.gEvent.addListener(a,b,function(){c[b].call(a,d)}),a},attachMarker:function(a,b,c){var d=this.map;return this.gEvent.addListener(a,b,function(){c.open(d,a)}),a},close:function(a,b,c){this.gEvent.addListener(a,b,function(){c.close()})}},f.prototype={start:function(a){return"bounce"===a?this.GAnimation.BOUNCE:"drop"===a?this.GAnimation.DROP:!1},stop:function(a){a.setAnimation(null)}},g.prototype.get=function(){return new this.GLatLng(this.lat,this.lng,this.nowrap)},i.prototype.get=function(a){return"hybrid"===a?this.map_type_id.HYBRID:"satellite"===a?this.map_type_id.SATELLITE:"roadmap"===a?this.map_type_id.ROADMAP:this.map_type_id.TERRAIN};var p=function(a){var b={};return a.map_type&&("boolean"==typeof a.map_type&&(b.mapTypeControl=a.map_type),"object"==typeof a.map_type&&(b.mapTypeControlOptions=new j(a.map_type,new i,new k,new l))),void 0!==a.overview&&("boolean"==typeof a.overview&&(b.overviewMapControl=a.overview),"object"==typeof a.overview&&(b.overviewMapControl=!0,b.overviewMapControlOptions={opened:a.overview.opened})),void 0!==a.pan&&("boolean"==typeof a.pan&&(b.panControl=a.pan),"object"==typeof a.pan&&(b.panControlOptions=(new k).get(a.pan.position))),void 0!==a.rotate&&("boolean"==typeof a.rotate&&(b.rotateControl=a.rotate),"object"==typeof a.rotate&&(b.rotateControlOptions=(new k).get(a.rotate.position))),void 0!==a.scale&&("boolean"==typeof a.scale&&(b.scaleControl=a.scale),"object"==typeof a.scale&&(b.scaleControlOptions=(new k).get(a.scale.position))),void 0!==a.street_view&&("boolean"==typeof a.street_view&&(b.streetViewControl=a.street_view),"object"==typeof a.street_view&&(b.streetViewControlOptions=(new k).get(a.street_view.position))),void 0!==a.zoom&&("boolean"==typeof a.zoom&&(b.zoomControl=a.zoom),"object"==typeof a.zoom&&(b.zoomControlOptions=(new k).get(a.zoom.position),void 0!==a.zoom.style&&(b.zoomControlOptions.style=(new m).get(a.zoom.style)))),b};k.prototype.get=function(a){return"bottom_center"===a?{position:this.control_position.BOTTOM_CENTER}:"bottom_left"===a?{position:this.control_position.BOTTOM_LEFT}:"bottom_right"===a?{position:this.control_position.BOTTOM_RIGHT}:"left_bottom"===a?{position:this.control_position.LEFT_BOTTOM}:"left_center"===a?{position:this.control_position.LEFT_CENTER}:"left_top"===a?{position:this.control_position.LEFT_TOP}:"right_bottom"===a?{position:this.control_position.RIGHT_BOTTOM}:"right_center"===a?{position:this.control_position.RIGHT_CENTER}:"right_top"===a?{position:this.control_position.RIGHT_TOP}:"top_center"===a?{position:this.control_position.TOP_CENTER}:"top_right"===a?{position:this.control_position.TOP_RIGHT}:{position:this.control_position.TOP_LEFT}},l.prototype.get=function(a){return"dropdown_menu"===a?this.control_style.DROPDOWN_MENU:"horizontal_bar"===a?this.control_style.HORIZONTAL_BAR:this.control_style.DEFAULT},m.prototype.get=function(a){return"large"===a?this.zoom_control_style.LARGE:"small"===a?this.zoom_control_style.SMALL:this.zoom_control_style.DEFAULT};var q={center:function(a,b,d){"string"==typeof b&&new c(b).getGeocode().done(function(b){q.setCenter(a,b[0].geometry.location,d)}),"object"==typeof b&&q.setCenter(a,new g(b[0],b[1]).get(),d)},setCenter:function(a,b,c){void 0!==c&&c===!0?a.setCenter(b):a.panTo(b)},getKeys:function(a){var b=[];for(var c in a)b.push(c);return b}}}(jQuery);


/**
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.2.9
 */
;
(function ($) {

    var h = location.href.replace(/#.*/, '');
	
	
    var i = $.localScroll = function (a) {
        $('body').localScroll(a)
    };
    i.defaults = {
        duration: 1000,
        axis: 'y',
        event: 'click',
        stop: true,
        target: window
    };
    i.hash = function (a) {
        if (location.hash) {
            a = $.extend({}, i.defaults, a);
            a.hash = false;
            if (a.reset) {
                var d = a.duration;
                delete a.duration;
                $(a.target).scrollTo(0, a);
                a.duration = d
            }
            scroll(0, location, a)
        }
    };
    $.fn.localScroll = function (b) {
        b = $.extend({}, i.defaults, b);
        return b.lazy ? this.bind(b.event, function (e) {
            var a = $([e.target, e.target.parentNode]).filter(filter)[0];
            if (a) scroll(e, a, b)
        }) : this.find('a,area').filter(filter).bind(b.event, function (e) {
            scroll(e, this, b)
        }).end().end();

        function filter() {
            return !!this.href && !! this.hash && this.href.replace(this.hash, '') == h && (!b.filter || $(this).is(b.filter))
        }
    };

    function scroll(e, a, b) {
        var c = a.hash.slice(1),
            elem = document.getElementById(c) || document.getElementsByName(c)[0];
        if (!elem) return;
        if (e) e.preventDefault();
        var d = $(b.target);
		
		
		
		
		
        if (b.lock && d.is(':animated') || b.onBefore && b.onBefore(e, elem, d) === false) return;
        if (b.stop) d._scrollable().stop(true);
        if (b.hash) {
            var f = b.offset;
            f = f && f.top || f || 0;
            var g = elem.id == c ? 'id' : 'name',
                $a = $('<a> </a>').attr(g, c).css({
                    position: 'absolute',
                    top: $(window).scrollTop() + f,
                    left: $(window).scrollLeft()
                });
            elem[g] = '';
            $('body').prepend($a);
            location = a.hash;
            $a.remove();
            elem[g] = c
        }
		
	
		
        d.scrollTo(elem, b).trigger('notify.serialScroll', [elem])
    }
})(jQuery);

/**
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.6
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,targ,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );



(function(e){var t={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:false,getWidthFrom:""},n=e(window),r=e(document),i=[],s=n.height(),o=function(){var t=n.scrollTop(),o=r.height(),u=o-s,a=t>u?u-t:0;for(var f=0;f<i.length;f++){var l=i[f],c=l.stickyWrapper.offset().top,h=c-l.topSpacing-a;if(t<=h){if(l.currentTop!==null){l.stickyElement.css("position","").css("top","");l.stickyElement.parent().removeClass(l.className);l.currentTop=null}}else{var p=o-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-t-a;if(p<0){p=p+l.topSpacing}else{p=l.topSpacing}if(l.currentTop!=p){l.stickyElement.css("position","fixed").css("top",p);if(typeof l.getWidthFrom!=="undefined"){l.stickyElement.css("width",e(l.getWidthFrom).width())}l.stickyElement.parent().addClass(l.className);l.currentTop=p}}}},u=function(){s=n.height()},a={init:function(n){var r=e.extend(t,n);return this.each(function(){var t=e(this);var n=t.attr("id");var s=e("<div></div>").attr("id",n+"-sticky-wrapper").addClass(r.wrapperClassName);t.wrapAll(s);if(r.center){t.parent().css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"})}if(t.css("float")=="right"){t.css({"float":"none"}).parent().css({"float":"right"})}var o=t.parent();o.css("height",t.outerHeight());i.push({topSpacing:r.topSpacing,bottomSpacing:r.bottomSpacing,stickyElement:t,currentTop:null,stickyWrapper:o,className:r.className,getWidthFrom:r.getWidthFrom})})},update:o};if(window.addEventListener){window.addEventListener("scroll",o,false);window.addEventListener("resize",u,false)}else if(window.attachEvent){window.attachEvent("onscroll",o);window.attachEvent("onresize",u)}e.fn.sticky=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.sticky")}};e(function(){setTimeout(o,0)})})(jQuery)



    $(document).ready(function(){
    
        if ($(window).width() > 1024) {
            $(".go-fade-in").animate({
                opacity: 0
            }, 10);
            
            $(".go-fade-in").appear(function(){
            
                $(this).animate({
                    opacity: 1
                }, 750, "easeInExpo");
            });
        }
    });
	
})(jQuery);

