function getUrl (url, option = {}, body = null) {
	var http = (url.StartsWith("https://")) ? require("https") : require("http");
	return new Promise(function (resolve, reject) {
		var req = http.request(url, option);
		var result = "";
		req.on("data", function (chunk) {
			result += chunk;
		})
		req.on("end", function () {
			resolve(result);
		})
		if (body != null) {
			req.write(body);
		}
		req.end();
	})
}

module.exports = {
	getUrl: getUrl
}