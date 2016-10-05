const triggerFastatic = store => next => (action) => {
	console.log('dispatching', action);
	const result = next(action);
	console.log('next state', store.getState());
	console.log('---');
	return result;
};

module.exports = {
	triggerFastatic
};
