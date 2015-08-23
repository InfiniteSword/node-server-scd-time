var server = require("./server"),
	router = require("./router"),
	requestHandlers = require("./requestHandlers");

// handle 保存不同请求路径对应的处理方法
var handle = {};

handle["/"] = requestHandlers.start;
handle["/pictures"] = requestHandlers.pictures;
handle["/articals"] = requestHandlers.articals;
handle["/index.js"] = requestHandlers.putJs;
handle["/style.css"] = requestHandlers.putCss;
handle["/about"] = requestHandlers.abort;

// 传入路由模块方法, 路径处理方法
server.start(router.route, handle);