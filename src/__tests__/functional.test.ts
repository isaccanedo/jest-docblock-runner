import * as Runner from '..';

test('all exports are importable, using "import * as Runner"', () => {
	expect(typeof Runner).toBe('function');
});

test('runs, without pragma', () => {
	expect(1 + 2).toBe(3);
});

test('runs, with comment but no pragma', () => {
	/**
	 * This is not a pragma
	 */

	expect(1 + 2).toBe(3);
});

test('pragma is detected, when provided an @tag', () => {
	/**
   * @tag core
   */

	expect(1 + 2).toBe(3);
});

test('pragma is detected, when provided a description located above the pragma', () => {
	/** This is a description located above the pragma
   * @tag core
   */

	expect(1 + 2).toBe(3);
});

test('(file1) pragma is detected, when provided an @tag(2)', () => {
	/** This is a description located above the pragma
   * @tag minor
   */

	expect(1 + 2).toBe(3);
});

test('runs, with comment but no pragma 2', () => {
	/**
	 * This is not a pragma
	 */

	expect(1 + 2).toBe(3);
});
