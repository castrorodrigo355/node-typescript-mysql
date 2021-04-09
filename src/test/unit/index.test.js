import { fizzbuzz, getCount, getUsers } from "../../functions/functions";

describe("fizzbuzz", () => {
	test("Initial Test", () => {
		expect(true).toBe(true);
	});

	test("fizzbuzz number", () => {
		const received = 1;
		const result = fizzbuzz(1);
		expect(received).toBe(result);
	});

	test("fizzbuzz print fizz if 3 or multiple of 3", () => {
		const received = "fizz";
		const result = fizzbuzz(12);
		expect(received).toBe(result);
	});

	test("fizzbuzz print buzz if 5 or multiple of 5", () => {
		const received = "buzz";
		const result = fizzbuzz(10);
		expect(received).toBe(result);
	});

	test("fizzbuzz print buzz if is multiple of 3 or 5", () => {
		const received = "fizzbuzz";
		const result = fizzbuzz(15);
		expect(received).toBe(result);
	});

	test("Return count of array list", async (done) => {
		const received = 10;
		const result = await getUsers();
		expect(received).toBe(result);
		done();
	});
});
