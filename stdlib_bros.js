function getUrl (url, option = {}, body = null) {
	if (body != null) {
		option.body = body;
	}
	return new Promise(function (resolve, reject) {
		fetch(url, option).then(function (res) {
			resolve(res.text());
		}).catch(function (err) {
			reject(err);
		});
	})
}

export { getUrl };