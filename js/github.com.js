/**
@name Target Practice
@description Add pull request information to page
@author Kyle Conroy
@email kyle@kyleconroy.com
@version 0.0.1
@foo bar
*/

function pullTarget() {
  var targetInfo = jQuery(".pull-description > p > span").last();
  var user = targetInfo.children('span').first().text();
  var branch = targetInfo.children('span').last().text();
  var repo = jQuery("a.js-current-repository").text();
  if (repo == "" || user == "" || branch == "") {
    return false;
  }
  return "https://github.com/" + user + "/" + repo + ".git " + branch;
}

var target = pullTarget();

if (target) {
  jQuery(".pull-description > p > span").on("click", function() {
    window.prompt ("Copy to clipboard: Ctrl+C, Enter", target);
  });
}
