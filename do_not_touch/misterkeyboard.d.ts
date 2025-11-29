// Auto-generated TypeScript definitions for MisterKeyboard scripting API.
// Generated on 2025-11-29 05:31:36 +0000 using Mister Keyboard 2.2.0.

export {};

interface MKConsole {
	/**
	 * Logs any object to the debug console. Supports multiple arguments.
	 */
	log(...args: unknown): void;
}

interface MKTask {
	/**
	 * Returns whether the script has been cancelled. Cancelled scripts must stop all work as soon as possible.
	 */
	readonly isCancelled: boolean;

	/**
	 * Requests script cancellation. Sets the `task.isCancelled` flag and instructs the script to cease all work as soon as possible.
	 */
	cancel(): void;

	/**
	 * Throws an exception if the script has been cancelled.
	 */
	checkCancellation(): void;

	/**
	 * Immediately yields execution to the next task. You can use this in long-running loops, in order to avoid locking up the user interface.
	 */
	yield(): Promise<void>;

	/**
	 * Sleeps for the specified amount of `milliseconds`.
	 */
	sleep(milliseconds?: number): Promise<void>;
}

interface MKDocument {
	/**
	 * Returns the available document context before the cursor. This is **not** guaranteed to be the full text!
	 */
	readonly textBeforeCursor: string;

	/**
	 * Returns the available document context after the cursor. This is **not** guaranteed to be the full text!
	 */
	readonly textAfterCursor: string;

	/**
	 * Gathers the full text before the cursor. This can be a lot slower than `textBeforeCursor`!
	 */
	getFullTextBeforeCursor(): Promise<string>;

	/**
	 * Gathers the full text after the cursor. This can be a lot slower than `textAfterCursor`!
	 */
	getFullTextAfterCursor(): Promise<string>;

	/**
	 * Gathers the full text in the current document.
	 */
	getFullText(): Promise<string>;

	/**
	 * Waits for a short amount of time, until a change in the document is detected or ~100ms have passed without any changes.
	 *
	 * If you want to wait for explicit user input, use `waitForUserInput` instead.
	 */
	waitForDocumentChange(): Promise<void>;

	/**
	 * Waits until a change in the document is detected.
	 *
	 * If you just want to make sure a change was processed correctly, use `waitForDocumentChange` instead.
	 */
	waitForUserInput(): Promise<void>;

	/**
	 * Inserts the specified `text` into the document.
	 */
	insert(text: string): void;

	/**
	 * Deletes the specified number of characters. If called without the `count` argument, a single character will be deleted.
	 */
	deleteBackward(count?: number): void;

	/**
	 * Deletes the full document text.
	 */
	clear(): void;

	/**
	 * Gets the amount of UTF-16 code units in the specified text.
	 *
	 * This can be useful when calling functions such as `adjustCursorPosition`.
	 */
	utf16Count(text: string): number;

	/**
	 * Adjusts the cursor position by the specified `utf16Offset`. Positive values move the cursor forward, and negative values move the cursor backward.
	 */
	adjustCursorPosition(utf16Offset: number): void;
}

declare global {
	const console: MKConsole;
	const task: MKTask;
	const document: MKDocument;
}
