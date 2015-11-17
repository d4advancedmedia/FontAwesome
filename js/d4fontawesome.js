jQuery(document).ready(function($) {

// ADD TO SOCIALBOX

$('.social_link li').each(function() {
	if ($(this).hasClass('socialbox_phone')) {
		$(this).find('a').prepend('<i class="fa fa-phone"></i>');
	}
	if ($(this).hasClass('socialbox_addr')) {
		$(this).find('a').prepend('<i class="fa fa-map-marker"></i>');
	}
	if ($(this).hasClass('socialbox_fax')) {
		$(this).find('a').prepend('<i class="fa fa-fax"></i>');
	}
	if ($(this).hasClass('socialbox_email')) {
		$(this).find('a').prepend('<i class="fa fa-envelope"></i>');
	}
});
	

});