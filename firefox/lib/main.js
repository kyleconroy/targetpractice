// Import the page-mod API
var pageMod = require("page-mod");
// Import the self API
var self = require("self");
 
// Create a page mod
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "*.github.com",
  contentScriptWhen: 'ready',
  contentScriptFile: [self.data.url("jquery.js"), self.data.url("github.com.js")]
});
