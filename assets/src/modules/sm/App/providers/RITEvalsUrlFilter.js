//For now, not a service
angular.module('sm').filter('RITEvalsURL', function () {
    return function (input) {
        if (input && input !== "TBA") {
            var splitName = input.split(" ");
            var RITEvalsURL = 'https://openevals.rit.edu/professor/' + encodeURIComponent(splitName[splitName.length - 1]) + '/' + encodeURIComponent(splitName[0]);

            return '<a target="_blank" href="' + RITEvalsURL + '">' + input + '</a>';
        } else {
            return '<a href="#">' + input + '</a>';
        }
    }
});
