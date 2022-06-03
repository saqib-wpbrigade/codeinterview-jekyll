/**
 * custom code to play video and 
 * enable checkboxes on for pricing sections
 */

// const ModalVideo = require("./modalvideo")
document.addEventListener('DOMContentLoaded', function(){
	new ModalVideo(".video-btn");
	if(document.querySelectorAll('.bc__checkbox input[type="checkbox"]').length>0){
		document.querySelector('.bc__checkbox input[type="checkbox"]').addEventListener('change',function(){
			var check = this.getAttribute('data-check'),
			uncheck = this.getAttribute('data-uncheck');
			document.querySelectorAll('.bc__text').forEach(function(div, i){
				div.classList.remove('active');
			});
			if(this.checked == true){
				document.querySelector('.'+uncheck).classList.add('active');
				document.querySelector('.pricing-box:nth-child(2) .price').innerHTML = '$55';
				document.querySelector('.pricing-box:nth-child(2) .price-btm ul li:first-child').innerHTML = '20 interviews / month';
			}else{
				document.querySelector('.'+check).classList.add('active');
				document.querySelector('.pricing-box:nth-child(2) .price').innerHTML = '$49';
				document.querySelector('.pricing-box:nth-child(2) .price-btm ul li:first-child').innerHTML = '240 interviews / year';
			}
		});
	}
	document.getElementsByClassName('menu-btn')[0].addEventListener('click',function(){
		this.classList.toggle('menu-active');
		document.querySelector('.menu_wrapper').classList.toggle('menu-in');
		document.querySelector('html').classList.toggle('menuIn');
	});
	if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1){
		document.querySelector('html').classList.add('ie');
	}

	if (localStorage.email){
		document.querySelector('.nav-logged-out').classList.toggle('hidden')
		document.querySelector('.nav-logged-in').classList.toggle('hidden')
		document.querySelectorAll('.btn-logged-out').forEach((e)=> e.classList.toggle('hidden'))
		document.querySelectorAll('.btn-logged-in').forEach((e)=> e.classList.toggle('hidden'))
	}

	if (!localStorage.cookie_accepted){
		document.querySelector('.cookie_header').classList.add('active')
	}
	Array.from(document.getElementsByClassName('btn-intercom-enterprise')).forEach((e)=>e.addEventListener('click',function(e){
		e.preventDefault()
		if (!!document.querySelector("#intercom-frame")){
				Intercom('showNewMessage', 'Hi, I would like to discuss custom pricing for us. My number is: ');
		}
		else{
				window.location.href = "mailto:support@codeinterview.io"
		}
	})
	)
	
}, false);

function cookie_accept(){
	document.querySelector('.cookie_header').classList.remove('active')
	localStorage.cookie_accepted = true
}

$(document).ready(function () {
	$(".down-angle").on("click", function () {
        $(this)
            .parent()
            .toggleClass("active")
            .children(".sub-menu")
            .slideToggle();
    });

	if ($(".date-footer").length) {
        const dateYear = document.querySelector(".date-footer");

        let date1 = new Date();
        let yearFull = date1.getFullYear();
        dateYear.innerHTML = yearFull;
    }

	var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); 

        if (scrollTop > stickyNavTop) {
         
            $('.header_wraper').addClass('sticky');
        } else {
            $('.header_wraper').removeClass('sticky'); 
        } 
    };
    var stickyNavTop = $('.header_wraper').offset().top;
    $(window).scroll(function(){
        stickyNav();
       
    })

if ($(".qoutes-section").length) {
	$(".quote-container").addClass("swiper");
	$(".quote-container > div").addClass("swiper-wrapper");
	$(".quote-container > div > div").addClass("swiper-slide");
	$(".quote-container").append("<div class='qc-button-prev'></div>");
	$(".quote-container").append("<div class='qc-button-next'></div>");

	const qc_swiper = new Swiper(".quote-container", {
		// watchOverflow: true,
		slidesPerView: 1,
		loop: true,
		spaceBetween: 20,

		navigation: {
			nextEl: ".qc-button-next",
			prevEl: ".qc-button-prev",
		},

		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			1230: {
				slidesPerView: 1,
				spaceBetween: 26,
			},
		},
	});
}



});

const formkeepEmbed = document.querySelector('#formkeep-embed')

formkeepEmbed.addEventListener('formkeep-embed:submitting', _event => {
  console.log('Submitting form...')
})

formkeepEmbed.addEventListener('formkeep-embed:submitted', _event => {
  console.log('Submitted form...')
})