$('.ux-content-expandable a').each(function(){

	var obj = jQuery(this), 
	onlyOne = false;

	// Fix list bullets being shown.
	if (obj.parent().is('li')) {
		obj.parent().css('list-style','none').addClass('expandable-list');
	}

	// Check to see if the root object has ux-only-one declaired
	if(obj.parents().is('.ux-only-one')) {
		onlyOne = true;
	}

	obj.on("click", function(e) {
		e.preventDefault();
	
		var obj = jQuery(this);

		// Check if we have a content container with ux-only-one 
		if (onlyOne) {

			// Do the extra step to make sure siblings are closed
			checkSibs(obj);

		} else {

			// Just do a normal close process
			openClose(obj);
		} 

		function checkSibs(obj) {
			openClose(obj.parent('li').siblings('li').children('.ux-expandable.expanded'))
			openClose(obj);
		}

		function openClose(obj) {

			// Expandable container
			var container = obj.next();

			// Check to make sure the next sibling is something we want to work with
			if (jQuery(container).is('ul') || jQuery(container).is('div')) {

				// Check if we need to show or hide.
				if (obj.hasClass("expanded")) {
					container.slideUp();
					obj.removeClass("expanded");
				} else {
					container.slideDown();
					obj.addClass("expanded");
				}

			}

		}

	});

});