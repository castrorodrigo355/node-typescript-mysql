import fetch from "node-fetch";

export const sum = (a, b) => a + b;

export const divisibleBy = (value, divisor) => value % divisor === 0;

export const fizzbuzz = (value) => {
	if (value === 0) return value;
	if (divisibleBy(value, 3) && divisibleBy(value, 5)) return "fizzbuzz";
	if (divisibleBy(value, 3)) return "fizz";
	if (divisibleBy(value, 5)) return "buzz";
	return value;
};

// export const getUsers = async () => {
// 	const url = "https://jsonplaceholder.typicode.com/users";
// 	const response = await fetch(url);
// 	const users = await response.json();
// 	return users;
// };

export const getCount = (list) => list.length;
