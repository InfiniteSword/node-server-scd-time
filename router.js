function route(handle, pathname, request, response) {

	if (typeof handle[pathname] == "function") {
		handle[pathname](request, response);
	} else {
		console.log("No request handler found for " + pathname);
	}
}

exports.route = route;