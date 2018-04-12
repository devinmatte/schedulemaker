angular.module('sm').directive('instructorDetailPopover', function($http, $filter) {
	var RMPUrl = $filter('RMPUrl');
    return {
		restrict: 'A',
		scope: {
			sectionId: '=instructorDetailPopover'
		},
		link: function(scope, elm) {
			if(scope.sectionId != '') {
				var loaded = false,
					opened = false,
					$body = $("body");

				function hidePopoverOnBodyClick() {
					setTimeout(function() {

						$body.off('click.hidepopovers');
						$body.on('click.hidepopovers', function () {
							elm.popover('destroy');
							loaded = false;
							$body.off('click.hidepopovers');
							opened = false;
						});
					}, 100);
				}

				elm.on('click', function() {
					if(!loaded) {
						loaded = true;
						$http.post('/entity/courseForSection',
							$.param({
								id: scope.sectionId
							})
						).success(function(data) {
							elm.popover({
								html:true,
								trigger:'click',

								title: data.courseNum,
								content: '<span class="label label-default popover-white">' + RMPUrl(data.instructor) + '</span>',
								container: '#container'
							});
							elm.popover('show');
							opened = true;
							hidePopoverOnBodyClick();
						}).error(function() {
								loaded = false;
							});
					} else {
						//elm.popover('toggle');
						opened = !opened;
						if(opened) {
							//hidePopoverOnBodyClick();
						}
					}
				});
			}
		}
	};
});
