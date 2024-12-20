<?php
if (class_exists('WPBakeryShortCodesContainer')) {
    class WPBakeryShortCode_tek_appgallery extends WPBakeryShortCodesContainer {
    }
}

if (class_exists('WPBakeryShortCode')) {
    class WPBakeryShortCode_tek_appgallery_single extends WPBakeryShortCode {
    }
}

if (!class_exists('tek_appgallery')) {
    class tek_appgallery extends KEYDESIGN_ADDON_CLASS
    {
        function __construct() {
            add_action('init', array($this, 'kd_appgallery_init'));
            add_shortcode('tek_appgallery', array($this, 'kd_appgallery_container'));
            add_shortcode('tek_appgallery_single', array($this, 'kd_appgallery_single'));
        }

        // Element configuration in admin
        function kd_appgallery_init() {
            // Container element configuration
            if (function_exists('vc_map')) {
                vc_map(array(
                    "name" => esc_html__("App gallery", "keydesign"),
                    "description" => esc_html__("Mobile app screenshots carousel.", "keydesign"),
                    "base" => "tek_appgallery",
                    "class" => "kd-outer-controls",
                    "show_settings_on_create" => true,
                    "content_element" => true,
                    "as_parent" => array('only' => 'tek_appgallery_single'),
                    "icon" => plugins_url('assets/element_icons/app-gallery.png', dirname(__FILE__)),
                    "category" => esc_html__("KeyDesign Elements", "keydesign"),
                    "js_view" => 'VcColumnView',
                    "params" => array(
                        array(
                            "type" => "textfield",
                            "class" => "",
                            "heading" => esc_html__("Section title", "keydesign"),
                            "param_name" => "ag_title",
                            "value" => "",
                            "description" => esc_html__("Enter section title here.", "keydesign"),
                        ),

                        array(
                            "type" => "textarea",
                            "class" => "",
                            "heading" => esc_html__("Section description", "keydesign"),
                            "param_name" => "ag_description",
                            "value" => "",
                            "description" => esc_html__("Enter section description here.", "keydesign"),
                        ),

                        array(
                            "type" => "dropdown",
                            "class" => "",
                            "heading" => esc_html__("Mockup image source", "keydesign"),
                            "param_name" => "ag_mockup_source",
                            "value" => array(
                                "Media library" => "media_library",
                                "External link" => "external_link",
                            ),
                            "description" => esc_html__("Select image source. Recommended image size: 325x650 px (Width x Height).", "keydesign"),
                            "save_always" => true,
                        ),

                        array(
                            "type" => "attach_image",
                            "heading" => esc_html__("Upload mockup", "keydesign"),
                            "param_name" => "ag_mockup",
                            "description" => esc_html__("Upload container mockup.", "keydesign"),
                            "dependency" =>	array(
                                "element" => "ag_mockup_source",
                                "value" => array("media_library")
                            ),
                        ),

                        array(
                            "type" => "textfield",
                            "class" => "",
                            "heading" => esc_html__("Image external link", "keydesign"),
                            "param_name" => "ag_mockup_ext",
                            "value" => "",
		                        "description" => esc_html__("Enter image external link.", "keydesign"),
                            "dependency" =>	array(
                                "element" => "ag_mockup_source",
                                "value" => array("external_link")
                            ),
                        ),

                        array(
                            "type" => "textfield",
                            "class" => "",
                            "heading" => esc_html__("Image size", "keydesign"),
                            "param_name" => "ag_mockup_size",
                            "value" => "",
		                        "description" => esc_html__("Enter image size in pixels. Recommended image size: 300x615 px (Width x Height).", "keydesign"),
                            "dependency" =>	array(
                                "element" => "ag_mockup_source",
                                "value" => array("external_link")
                            ),
                        ),

                        array(
                            "type"          =>  "dropdown",
                            "class"         =>  "",
                            "heading"       =>  esc_html__("Enable autoplay","keydesign"),
                            "param_name"    =>  "ag_autoplay",
                            "value"         =>  array(
                                    "Off"   => "auto_off",
                                    "On"   => "auto_on"
                                ),
                            "save_always" => true,
                            "description"   =>  esc_html__("Carousel autoplay settings.", "keydesign")
                        ),

                        array(
                            "type"          =>  "dropdown",
                            "class"         =>  "",
                            "heading"       =>  esc_html__("Autoplay speed","keydesign"),
                            "param_name"    =>  "ag_autoplay_speed",
                            "value"         =>  array(
                                    "10s"   => "10000",
                                    "9s"   => "9000",
                                    "8s"   => "8000",
                                    "7s"   => "7000",
                                    "6s"   => "6000",
                                    "5s"   => "5000",
                                    "4s"   => "4000",
                                    "3s"   => "3000",
                                ),
                            "save_always" => true,
                            "dependency" =>	array(
                                "element" => "ag_autoplay",
                                "value" => array("auto_on")
                            ),
                            "description"   =>  esc_html__("Carousel autoplay speed.", "keydesign")
                        ),

                        array(
                            "type"          =>  "dropdown",
                            "class"         =>  "",
                            "heading"       =>  esc_html__("Stop on hover","keydesign"),
                            "param_name"    =>  "ag_stoponhover",
                            "value"         =>  array(
                                    "Off"   => "hover_off",
                                    "On"   => "hover_on"
                                ),
                            "save_always" => true,
                            "dependency" =>	array(
                                "element" => "ag_autoplay",
                                "value" => array("auto_on")
                            ),
                            "description"   =>  esc_html__("Stop sliding carousel on mouse over.", "keydesign")
                        ),

                        array(
                            "type" => "textfield",
                            "class" => "",
                            "heading" => esc_html__("Extra class name", "keydesign"),
                            "param_name" => "ag_extra_class",
                            "value" => "",
                            "description" => esc_html__("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "keydesign"),
                            "group" => esc_html__( "Extras", "keydesign" ),
                        ),
                    )
                ));

                // Shortcode configuration
                vc_map(array(
                    "name" => esc_html__("App screenshot", "keydesign"),
                    "base" => "tek_appgallery_single",
                    "content_element" => true,
                    "as_child" => array('only' => 'tek_appgallery'),
                    "icon" => plugins_url('assets/element_icons/child-image.png', dirname(__FILE__)),
                    "params" => array(
                        array(
                            "type" => "dropdown",
                            "class" => "",
                            "heading" => esc_html__("Image source", "keydesign"),
                            "param_name" => "ag_screenshot_source",
                            "value" => array(
                                "Media library" => "media_library",
                                "External link" => "external_link",
                            ),
                            "description" => esc_html__("Select image source.", "keydesign"),
                            "save_always" => true,
                        ),
                        array(
                            "type" => "attach_image",
                            "heading" => esc_html__("Image", "keydesign"),
                            "param_name" => "ag_screenshot",
                            "admin_label" => true,
                            "description" => esc_html__("Upload mobile app screenshot.", "keydesign"),
                            "dependency" =>	array(
                                "element" => "ag_screenshot_source",
                                "value" => array("media_library")
                            ),
                        ),
                        array(
                            "type" => "textfield",
                            "class" => "",
                            "heading" => esc_html__("Image external link", "keydesign"),
                            "param_name" => "ag_screenshot_ext",
                            "value" => "",
		                        "description" => esc_html__("Enter image external link.", "keydesign"),
                            "dependency" =>	array(
                                "element" => "ag_screenshot_source",
                                "value" => array("external_link")
                            ),
                        ),
                        array(
                            "type" => "textfield",
                            "class" => "",
                            "heading" => esc_html__("Image size", "keydesign"),
                            "param_name" => "ag_screenshot_size",
                            "value" => "",
		                        "description" => esc_html__("Enter image size in pixels. Example: 280x500 (Width x Height).", "keydesign"),
                            "dependency" =>	array(
                                "element" => "ag_screenshot_source",
                                "value" => array("external_link")
                            ),
                        ),
                        array(
                            "type" => "dropdown",
                            "class" => "",
                            "heading" => esc_html__( "Enable link?", "keydesign" ),
                            "param_name" => "enable_link",
                            "value" => array(
                                "No" => "",
                                "Yes" => "link_on",
                            ),
                            "save_always" => true,
                        ),
                        array(
                            "type" => "href",
                            "class" => "",
                            "heading" => esc_html__( "Image link", "keydesign" ),
                            "param_name" => "image_link",
                            "value" => "",
                            "description" => esc_html__( "Enter URL if you want this image to have a link.", "keydesign" ),
                            "dependency" =>	array(
                                "element" => "enable_link",
                                "value" => array( "link_on" ),
                            ),
                        ),
                        array(
                  			"type" => "dropdown",
                  			"heading" => __( "Link target", "keydesign" ),
                  			"param_name" => "link_target",
                            "value" => array(
								esc_html__( 'Same window', 'keydesign' ) => '_self',
								esc_html__( 'New window', 'keydesign' ) => '_blank',
							),
                  			"dependency" => array(
                				"element" => "enable_link",
                				"value" => array( "link_on" ),
                  			),
                		),
                    )
                ));
            }
        }

        public function kd_appgallery_container($atts, $content = null) {

            extract(shortcode_atts(array(
                    'ag_title' => '',
                    'ag_description' => '',
                    'ag_mockup_source' => '',
                    'ag_mockup' => '',
                    'ag_mockup_ext' => '',
                    'ag_mockup_size' => '',
                    'ag_autoplay' => '',
                    'ag_autoplay_speed' => '',
                    'ag_stoponhover' => '',
                    'ag_extra_class' => ''
                ), $atts));

            $output = $wrapper_class = $mockup_image = $ag_no_desc = $kd_appgallery_id = '';

            $mockup_image = wpb_getImageBySize($params = array(
                'post_id' => NULL,
                'attach_id' => $ag_mockup,
                'thumb_size' => 'full',
                'class' => ""
            ));

            if ('' == $ag_title && '' == $ag_description) {
              $ag_no_desc = 'ag-no-desc-section';
            }

            $kd_appgallery_id = "kd-appgal-".uniqid();

            $wrapper_class = implode(' ', array('app-gallery', 'ag-parent', $kd_appgallery_id, $ag_no_desc, $ag_extra_class));

            $output = '<div class="'.trim($wrapper_class).'">';
                if ($ag_title != '' || $ag_description != '') {
                  $output .= '<div class="ag-section-desc">
                      <h2>'.$ag_title.'</h2>
                      <h6>'.$ag_description.'</h6>
                  </div>';
                }
                if ($ag_mockup_source == 'external_link' && $ag_mockup_ext != '') {
                  $dimensions = vc_extract_dimensions( $ag_mockup_size );
              		$hwstring = $dimensions ? image_hwstring( $dimensions[0], $dimensions[1] ) : '';

              		$output .= '<div class="ag-mockup"><img src="'.$ag_mockup_ext.'" alt="" '.$hwstring.' /></div>';
                } elseif ($ag_mockup_source == 'media_library' && $ag_mockup != '') {
                  $output .= '<div class="ag-mockup">'.$mockup_image['thumbnail'].'</div>';
                }
                $output .= '<div class="ag-slider-wrapper">
                  <div class="ag-slider">'.do_shortcode($content).'</div>
                </div>
            </div>';

            $output .= '<script>
              jQuery(document).ready(function($){
                if ($(".app-gallery.'.$kd_appgallery_id.' .ag-slider").length) {
                  $(".app-gallery.'.$kd_appgallery_id.' .ag-slider").owlCarousel({
                    stageClass: "owl-wrapper",
                    stageOuterClass: "owl-wrapper-outer",
                    loadedClass: "owl-carousel",
                    margin: 50,';
                    if ($ag_no_desc) {
                      $output .= 'responsive:{
                          0:{
                              items:1,
                          },
                          768:{
                              items:2,
                          },
                          1024:{
                              items:3,
                          }
                      },';
                    } else {
                      $output .= 'items: 1,';
                    }
                    if ( ! vc_is_inline() ) {
                      $output .= 'loop: true,dots: true,';
                    }
                    else {
                        $output .= 'loop: false,dots: false,';
                    }
                    $output .= '
                    dotsEach: true,
                    dotsSpeed: 500,
                    nav: false,';

                    if($ag_autoplay == "auto_on") {
                      $output .= 'autoplay: true,';
                    }

                    if($ag_autoplay_speed !== "") {
                      $output .= 'autoplayTimeout: '.$ag_autoplay_speed.',';
                    }

                    if($ag_autoplay == "auto_on" && $ag_stoponhover == "hover_on") {
                      $output .= 'autoplayHoverPause: true,';
                    }

                    $output .= '
                  });
                }
              });
            </script>';

            return $output;
        }



        public function kd_appgallery_single( $atts, $content = null ) {
            extract( shortcode_atts( array(
                'ag_screenshot_source' => '',
                'ag_screenshot' => '',
                'ag_screenshot_ext' => '',
                'ag_screenshot_size' => '',
                'enable_link' => '',
                'image_link' => '',
                'link_target' => '',
            ), $atts ) );

            $output = $ss_image = $default_src = $dimensions = $hwstring = '';

            $ss_image = wpb_getImageBySize($params = array(
                'post_id' => NULL,
                'attach_id' => $ag_screenshot,
                'thumb_size' => 'full',
                'class' => ""
            ));

            $default_src = vc_asset_url( 'vc/no_image.png' );

            $output = '<div class="ag-slider-child">';
            if ( $enable_link && $image_link !== '' ) {
                $output .= '<a href="' . $image_link . '" target="' . $link_target . '">';
            }
            if ( $ag_screenshot_source == 'external_link' ) {
                $dimensions = vc_extract_dimensions( $ag_screenshot_size );
                $hwstring = $dimensions ? image_hwstring( $dimensions[0], $dimensions[1] ) : '';

                $ag_screenshot_ext = $ag_screenshot_ext ? esc_attr( $ag_screenshot_ext ) : $default_src;
                $output .= '<img src="'.$ag_screenshot_ext.'" alt="" '.$hwstring.' />';
            } else {
                if ( !$ss_image ) {
                    $output .= '<img src="'.$default_src.'" alt="" class="vc_img-placeholder" />';
                } else {
                    $output .= $ss_image['thumbnail'];
                }
            }
            if ( $enable_link && $image_link !== '' ) {
                $output .= '</a>';
            }
            $output .= '</div>';

            return $output;
        }
    }
}

if ( class_exists( 'tek_appgallery' ) ) {
    $tek_appgallery = new tek_appgallery;
}

?>
