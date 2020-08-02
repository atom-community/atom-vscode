/**
 * The version of the editor.
 */
export const version: string = atom.getVersion();

/**
 * Namespace for dealing with commands. In short, a command is a function with a
 * unique identifier. The function is sometimes also called _command handler_.
 *
 * Commands can be added to the editor using the [registerCommand](#commands.registerCommand)
 * and [registerTextEditorCommand](#commands.registerTextEditorCommand) functions. Commands
 * can be executed [manually](#commands.executeCommand) or from a UI gesture. Those are:
 *
 * * palette - Use the `commands`-section in `package.json` to make a command show in
 * the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).
 * * keybinding - Use the `keybindings`-section in `package.json` to enable
 * [keybindings](https://code.visualstudio.com/docs/getstarted/keybindings#_customizing-shortcuts)
 * for your extension.
 *
 * Commands from other extensions and from the editor itself are accessible to an extension. However,
 * when invoking an editor command not all argument types are supported.
 *
 * This is a sample that registers a command handler and adds an entry for that command to the palette. First
 * register a command handler with the identifier `extension.sayHello`.
 * ```javascript
 * commands.registerCommand('extension.sayHello', () => {
 *     window.showInformationMessage('Hello World!');
 * });
 * ```
 * Second, bind the command identifier to a title under which it will show in the palette (`package.json`).
 * ```json
 * {
 *     "contributes": {
 *         "commands": [{
 *             "command": "extension.sayHello",
 *             "title": "Hello World"
 *         }]
 *     }
 * }
 * ```
 */
export * as commands from "./commands";

/**
 * Namespace for dealing with the current window of the editor. That is visible
 * and active editors, as well as, UI elements to show messages, selections, and
 * asking for user input.
 */
export { window } from "./window";
