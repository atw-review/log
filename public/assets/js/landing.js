$(document).on("scroll",function(){$(document).scrollTop()>600?$(".main-nav").addClass("nav-sticky-top"):$(".main-nav").removeClass("nav-sticky-top")}),jQuery(document).ready(function(a){AOS.init({duration:600,easing:"ease-in-out-sine",delay:100,disable:"mobile"}),a(".navbar-collapse").on("show.bs.collapse",function(){a(".navbar").addClass("nav-bg-dark")}).on("hidden.bs.collapse",function(){a(".navbar").removeClass("nav-bg-dark")}),a(".navbar-nav>li>a").on("click",function(){a(".navbar-collapse").collapse("hide")});var n=new google.maps.LatLng(25.051094,121.5928083),o={zoom:17,center:n},e=new google.maps.Map(document.getElementById("map"),o);new google.maps.Marker({position:n,title:"CHILLSPACE"}).setMap(e)});