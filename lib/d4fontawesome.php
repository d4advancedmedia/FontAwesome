<?php

// D4 FontAwesome

// Register style sheet and scripts.
add_action( 'wp_enqueue_scripts', 'register_plugin_elements' );

/**
 * Register style sheet.
 */
function register_plugin_elements() {
	wp_register_style( 'd4fontawesome', plugins_url( '/css/font-awesome.min.css' , __DIR__ ) );
	wp_enqueue_style( 'd4fontawesome' );
	wp_register_script( 'd4fontawesome', plugins_url( '/js/d4fontawesome.js' , __DIR__ ), array( 'jquery' ), 'v20131005', true );
	wp_enqueue_script('d4fontawesome');
}
