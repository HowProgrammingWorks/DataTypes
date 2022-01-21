'use strict';

const countTypesInArray = (arr) => {
	const target = {};
	for (let elem of arr) {
		const type = typeof elem;
		let count = target[type] || 0;
		target[type] = ++count;
	}
	return target;
};

module.exports = { countTypesInArray };
