<?php
/**
 * Add theme page
 */
function recipes_menu() {
	add_theme_page( esc_html__( 'Paloma FSE Theme', 'recipes' ), esc_html__( 'Paloma FSE Theme', 'recipes' ), 'edit_theme_options', 'recipes-info', 'recipes_theme_page_display' );
}
add_action( 'admin_menu', 'recipes_menu' );

/**
 * Display About page
 */
function recipes_theme_page_display() {
	$theme = wp_get_theme();

	if ( is_child_theme() ) {
		$theme = wp_get_theme()->parent();
	}

	include_once 'templates/theme-info.php';
}

function recipes_admin_plugin_notice() {
	$hide_notice_bar = get_user_meta( get_current_user_id(), 'recipes_hide_theme_info_noticebar', true );
	if ( '1' !== $hide_notice_bar ) {
		include 'templates/admin-plugin-notice.php';
	}
}
add_action( 'admin_notices', 'recipes_admin_plugin_notice' );


function recipes_hide_theme_info_noticebar() {
	check_ajax_referer( 'recipes-nonce', 'recipes-nonce-name' );
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		wp_die( -1 );
	}

	update_user_meta( get_current_user_id(), 'recipes_hide_theme_info_noticebar', 1 );

	wp_die( 1 );
}
add_action( 'wp_ajax_recipes_hide_theme_info_noticebar', 'recipes_hide_theme_info_noticebar' );
