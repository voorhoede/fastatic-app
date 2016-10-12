let fastaticPromise = null;

function runFastatic() {
	fastaticPromise = new Promise((resolve) => {
		setTimeout(resolve, 5000);
	});
	return fastaticPromise;
}

exports.default = {
	runFastatic
};
