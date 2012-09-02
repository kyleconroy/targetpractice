/**
@name Target Practice
@description Add pull request information to page
@author Kyle Conroy
@email kyle@kyleconroy.com
@version 0.0.1
@foo bar
*/

function pullTarget() {
  var targetInfo = $(".pull-description > p > span").last();
  var user = targetInfo.children('span').first().text();
  var branch = targetInfo.children('span').last().text();
  var repo = $("a.js-current-repository").text();
  return "https://github.com/" + user + "/" + repo ".git " + branch;
}

console.log(pullTarget());
