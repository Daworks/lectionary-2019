import './app.scss';

window.feather = require( 'feather-icons' );

window.goMonth = function ( index ) {
	let tgs = document.querySelectorAll( '.month' );
	tgs[ index ].scrollIntoView();
}

window.smoothscroll = function () {
	let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	if ( currentScroll > 0 ) {
		window.requestAnimationFrame( smoothscroll );
		window.scrollTo( 0, currentScroll - (currentScroll / 5) );
	}
};

document.addEventListener( "DOMContentLoaded", function ( event ) {
	feather.replace();
} );
