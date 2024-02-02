<?php
/**
 * The plugin page view - the "settings" page of the plugin.
 *
 * @package ocdi
 */

namespace OCDI;

$predefined_themes = $this->import_files;

if ( ! empty( $this->import_files ) && isset( $_GET['import-mode'] ) && 'manual' === $_GET['import-mode'] ) {
	$predefined_themes = array();
}
/**
 * Hook for adding the custom plugin page header
 */
do_action( 'pt-ocdi/plugin_page_header' );
?>

<?php if ( get_option( 'keydesign-verify' ) == 'no' ) : ?>
	<div class="kdadmin-activate-column kdadmin-activate-column-import">
		<h3>Sway theme is not activated! Please activate your copy from <a href="<?php echo admin_url( 'admin.php?page=sway-dashboard'); ?>">dashboard</a> and take full advantage of Sway.</h3>
	</div>
<?php endif; ?>

<?php if ( get_option( 'keydesign-verify' ) == 'yes' ) : ?>
	<div class="kdadmin-dashboard kdadmin-import wrap">
		<div class="kdadmin-welcome-box postbox">
			<?php ob_start();
				$plugin_title = ob_get_clean();

				// Display the plugin title (can be replaced with custom title text through the filter below).
				echo wp_kses_post( apply_filters( 'pt-ocdi/plugin_page_title', $plugin_title ) );

				// Display warrning if PHP safe mode is enabled, since we wont be able to change the max_execution_time.
				if ( ini_get( 'safe_mode' ) ) {
					printf(
						esc_html__( '%sWarning: your server is using %sPHP safe mode%s. This means that you might experience server timeout errors.%s', 'pt-ocdi' ),
						'<div class="notice  notice-warning  is-dismissible"><p>',
						'<strong>',
						'</strong>',
						'</p></div>'
					);
				}

				// Start output buffer for displaying the plugin intro text.
				ob_start();
			?>

			<div class="kdadmin-intro-text">
				<div class="notice notice-warning is-dismissible">
					<p><?php esc_html_e( 'Before you begin, make sure all the required plugins are activated.', 'pt-ocdi' ); ?></p>
				</div>
				<p class="about-description">
					<?php esc_html_e( 'Importing demo data (posts, pages, images, theme settings) is the easiest way to setup your theme.', 'pt-ocdi' ); ?>
					<?php esc_html_e( 'It will allow you to quickly edit everything instead of creating content from scratch.', 'pt-ocdi' ); ?>
				</p>

				<p><?php esc_html_e( 'When you import the data, the following things might happen:', 'pt-ocdi' ); ?></p>

				<ul>
					<li><?php esc_html_e( 'No existing posts, pages, categories, images, custom post types or any other data will be deleted or modified.', 'pt-ocdi' ); ?></li>
					<li><?php esc_html_e( 'Posts, pages, images, widgets, menus and other theme settings will get imported.', 'pt-ocdi' ); ?></li>
					<li><?php esc_html_e( 'Please click on the Import button only once and wait, it can take a couple of minutes.', 'pt-ocdi' ); ?></li>
				</ul>

			</div>

	</div>

	<?php if ( 1 === count( $predefined_themes ) ) : ?>

		<div class="ocdi__demo-import-notice  js-ocdi-demo-import-notice"><?php
			if ( is_array( $predefined_themes ) && ! empty( $predefined_themes[0]['import_notice'] ) ) {
				echo wp_kses_post( $predefined_themes[0]['import_notice'] );
			}
		?></div>

		<p class="ocdi__button-container">
			<button class="ocdi__button  button  button-hero  button-primary  js-ocdi-import-data"><?php esc_html_e( 'Import Demo Data', 'pt-ocdi' ); ?></button>
		</p>

	<?php else : ?>

		<!-- OCDI grid layout -->
		<div class="ocdi__gl  js-ocdi-gl">
		<?php
			// Prepare navigation data.
			$categories = Helpers::get_all_demo_import_categories( $predefined_themes );
		?>
			<?php if ( ! empty( $categories ) ) : ?>
				<div class="ocdi__gl-header  js-ocdi-gl-header">
					<nav class="ocdi__gl-navigation">
						<ul>
							<?php foreach ( $categories as $key => $name ) : ?>
								<li><a href="#<?php echo esc_attr( $key ); ?>" class="ocdi__gl-navigation-link  js-ocdi-nav-link"><?php echo esc_html( $name ); ?></a></li>
							<?php endforeach; ?>
						</ul>
					</nav>
					<div clas="ocdi__gl-search">
						<input type="search" class="ocdi__gl-search-input  js-ocdi-gl-search" name="ocdi-gl-search" value="" placeholder="<?php esc_html_e( 'Search...', 'pt-ocdi' ); ?>">
					</div>
				</div>
			<?php endif; ?>
			<div class="ocdi__gl-item-container  wp-clearfix  js-ocdi-gl-item-container">
				<?php foreach ( $predefined_themes as $index => $import_file ) : ?>
					<?php
						// Prepare import item display data.
						$img_src = isset( $import_file['import_preview_image_url'] ) ? $import_file['import_preview_image_url'] : '';
						// Default to the theme screenshot, if a custom preview image is not defined.
						if ( empty( $img_src ) ) {
							$theme = wp_get_theme();
							$img_src = $theme->get_screenshot();
						}

					?>
					<div class="ocdi__gl-item js-ocdi-gl-item" data-categories="<?php echo esc_attr( Helpers::get_demo_import_item_categories( $import_file ) ); ?>" data-name="<?php echo esc_attr( strtolower( $import_file['import_file_name'] ) ); ?>">
						<div class="ocdi__gl-item-image-container">
							<?php if ( ! empty( $img_src ) ) : ?>
								<img class="ocdi__gl-item-image" src="<?php echo esc_url( $img_src ) ?>">
							<?php else : ?>
								<div class="ocdi__gl-item-image  ocdi__gl-item-image--no-image"><?php esc_html_e( 'No preview image.', 'pt-ocdi' ); ?></div>
							<?php endif; ?>
						</div>
						<div class="ocdi__gl-item-footer<?php echo ! empty( $import_file['preview_url'] ) ? '  ocdi__gl-item-footer--with-preview' : ''; ?>">
							<h4 class="ocdi__gl-item-title" title="<?php echo esc_attr( $import_file['import_file_name'] ); ?>"><?php echo esc_html( $import_file['import_file_name'] ); ?></h4>
							<button class="ocdi__gl-item-button  button  button-primary  js-ocdi-gl-import-data" value="<?php echo esc_attr( $index ); ?>"><?php esc_html_e( 'Import', 'pt-ocdi' ); ?></button>
							<?php if ( ! empty( $import_file['preview_url'] ) ) : ?>
								<a class="ocdi__gl-item-button  button" href="<?php echo esc_url( $import_file['preview_url'] ); ?>" target="_blank"><?php esc_html_e( 'Preview', 'pt-ocdi' ); ?></a>
							<?php endif; ?>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<div id="js-ocdi-modal-content"></div>

	<?php endif; ?>

	<p class="ocdi__ajax-loader  js-ocdi-ajax-loader">
		<span class="spinner"></span> <?php esc_html_e( 'Importing, please wait!', 'pt-ocdi' ); ?>
	</p>

	<div class="ocdi__response  js-ocdi-ajax-response"></div>

</div>
<?php endif; ?>

<?php
/**
 * Hook for adding the custom admin page footer
 */
do_action( 'pt-ocdi/plugin_page_footer' );
