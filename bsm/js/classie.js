/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var menuRight = document.getElementById('cbp-spmenu-s2'),
showRightPush = document.getElementById('showRightPush'),
body = document.body;

showRightPush.onclick = function() {
    classie.toggle(this, 'active');
    classie.toggle(body, 'cbp-spmenu-push-toleft');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    disableOther('showRightPush');
    $('.pages-menu').removeClass('hidden');
};

$('.showRightPush').click(function () {
  $(this).toggleClass('active');
  classie.toggle(body, 'cbp-spmenu-push-toleft');
  classie.toggle(menuRight, 'cbp-spmenu-open');
  disableOther('showRightPush');
  $('.pages-menu').removeClass('hidden');
});


$('.img-globe').click(function () {
    classie.toggle(body, 'cbp-spmenu-push-toleft');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    disableOther('showRightPush');
    $('.showRightPush').removeClass('active');
    $('.worlds-menu').removeClass('hidden');
});

//clean URL
var url = window.location.href;
if(url.lastIndexOf('contato') != -1) {
  url = url.substring(0, url.lastIndexOf("."));
  window.history.pushState('obj', url);
}

addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

function disableOther(button) {
    if (button !== 'showRightPush') {
        classie.toggle(showRightPush, 'disabled');
    }
}

$('#showRightPush2').click(function () {
    $('#showRightPush').click();
    $('.showRightPush').removeClass('active');
    $('#showRightPush').removeClass('active');
    $('.pages-menu').addClass('hidden');
    $('.worlds-menu').addClass('hidden');
});

$('.js-toggle-sub').click(function() {
  var sizeScreen = $('body').width();
  if (sizeScreen < 1025) {
    $('.sub-menu-worlds').hide("slow");
    $(this).next('ul').slideToggle("slow");
  }
});

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var link = document.URL;
link.split('.html')[0];
window.history.replaceState( null, null, link );

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};



})( window );
