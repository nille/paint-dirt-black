var issues = require("page-mod");
var data = require("self").data;

issues.PageMod({
    include: '*',
    contentScriptFile: [data.url("jquery.min.js"),data.url("match.js"), data.url("content.js")],
    contentScriptWhen:"ready",
    contentStyle: "@font-face { font-family: 'BLOKKRegular'; src: url('"+data.url('BLOKKRegular.eot')+"');}@font-face {font-family: 'BLOKKRegular';src: url('"+data.url('BLOKKRegular.woff')+"') format('woff');} "
});