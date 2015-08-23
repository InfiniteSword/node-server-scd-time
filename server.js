// 作业: 用node创建一个http服务器 可以使用express或者koa, 也可以用原生的http fs模块. 要求能访问不同路径得到不同页面.
// 加分项: 动态页面. 页面酷炫程度. 邮件i@zeroling.com

var fs = require("fs");
var http = require("http");
var url = require('url');

exports.start = function(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

		if (!pathname.indexOf('/favicon.ico')) {
			return;
		}

		route(handle, pathname, request, response);

	}
	http.createServer(onRequest).listen(8888);
	console.log("server start...");
};