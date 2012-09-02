function pullTarget() {
  var targetInfo = $(".pull-description > p > span").last();
  var user = targetInfo.children('span').first().text();
  var branch = targetInfo.children('span').last().text();
  var repo = $("a.js-current-repository").text();
  return "https://github.com/" + user + "/" + repo ".git " + branch;
}
