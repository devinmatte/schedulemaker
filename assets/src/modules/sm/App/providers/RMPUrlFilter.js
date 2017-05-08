//For now, not a service
angular.module('sm').filter('RMPUrl', function () {
    return function (input) {
        if (input && input != "TBA") {
            var RMPSearchURL = 'http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&queryoption=HEADER&query=' + encodeURIComponent(input) + '&facetSearch=true&schoolName=rochester+institute+of+technology';

            return '<a target="_blank" href="' + RMPSearchURL + '" onclick="alert();"><img src="http://d2.alternativeto.net/dist/icons/rate-my-professor_65273.png?width=200&height=200&mode=crop&upscale=false" width="auto" height="15"></a>';
        }
    }
});