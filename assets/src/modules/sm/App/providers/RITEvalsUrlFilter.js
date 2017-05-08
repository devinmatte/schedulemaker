//For now, not a service
angular.module('sm').filter('RITEvalsURL', function () {
    return function (input) {
        if (input && input != "TBA") {
            var splitName = input.split(" ");
            var RITEvalsURL = 'https://openevals.rit.edu/professor/' + encodeURIComponent(splitName[splitName.length - 1]) + '/' + encodeURIComponent(splitName[0]);

            return '<a target="_blank" href="' + RITEvalsURL + '" onclick="alert();"><img src="http://sites.sg.rit.edu/sgrochester/wp-content/uploads/sites/97/2016/04/Services_logos_2-11.png" width="auto" height="15"></a>';
        }
    }
});