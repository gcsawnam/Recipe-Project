<?php
/**
 * Recipes: Block Patterns
 *
 * @since Recipes 1.0
 */

/**
 * Registers pattern categories.
 *
 * @since Recipes 1.0
 *
 * @return void
 */
function recipes_register_pattern_category() {

	$patterns = array();

	$block_pattern_categories = array(
		'recipes' => array( 'label' => __( 'Recipes', 'recipes' ) )
	);

	$block_pattern_categories = apply_filters( 'recipes_block_pattern_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
			register_block_pattern_category( $name, $properties );
		}
	}
}
add_action( 'init', 'recipes_register_pattern_category', 9 );
