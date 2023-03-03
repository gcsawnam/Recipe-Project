<?php
if ( ! function_exists( 'recipes_support' ) ) :
	function recipes_support()  {

		// Adding support for core block visual styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );
	}
	add_action( 'after_setup_theme', 'recipes_support' );
endif;

/**
 * Enqueue scripts and styles.
 */
function recipes_scripts() {
	// Enqueue theme stylesheet.
	wp_enqueue_style( 'recipes-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get( 'Version' ) );

	
	wp_enqueue_style( 'my-style', get_template_directory_uri() . '/assets/scss/index.css', false, '1.0', 'all' ); // Inside a parent theme
	wp_enqueue_style( 'my-style', get_stylesheet_directory_uri() . '/assets/scss/index.css', false, '1.0', 'all' ); // Inside a child theme
	wp_enqueue_style( 'my-style', plugins_url( '/assets/scss/index.css', __FILE__ ), false, '1.0', 'all' ); // Inside a plugin
	wp_deregister_script( 'jquery' );

    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), '3.3.1', true);


	wp_enqueue_script('pre', get_template_directory_uri(). '/assets/js/index.js','1.0.0', array('jquery'), '1.0.0', true);


}



add_action( 'wp_enqueue_scripts', 'recipes_scripts' );

if ( ! function_exists( 'recipes_fonts_url' ) ) :
	/**
	 * Register Google fonts for Recipes
	 *
	 * Create your own recipes_fonts_url() function to override in a child theme.
	 *
	 * @since 1.0
	 *
	 * @return string Google fonts URL for the theme.
	 */
	function recipes_fonts_url() {
		$fonts_url = '';

		/* Translators: If there are characters in your language that are not
		* supported by Poppins, translate this to 'off'. Do not translate
		* into your own language.
		*/
		$font_families = array( 'Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600&display=swap', 'Heebo:wght@300;400;500;600;700;800;900&display=swap','Inter:wght@100;200;300;400;500&family=Poppins:wght@100;200;400&display=swap' );

		if ( ! empty( $font_families  ) ) {

			$query_args = array(
				'family' => implode( '&family=', $font_families ), //urlencode( implode( '|', $font_families ) ),
				// 'subset' => urlencode( 'latin,latin-ext' ),
				'display' => 'swap',
			);

			$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css2' );
		}

		if ( ! class_exists( 'WPTT_WebFont_Loader' ) ) {
			// Load Google fonts from Local.
			require_once get_theme_file_path( 'inc/lib/wptt-webfont-loader.php' );
		}

		return esc_url( wptt_get_webfont_url( $fonts_url ) );
	}
endif;