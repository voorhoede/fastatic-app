const triggerFastatic = store => next => (action) => {
	console.log('dispatching', action);
	const result = next(action);
	console.log('---');
	return result;
};

module.exports = {
	triggerFastatic
};
