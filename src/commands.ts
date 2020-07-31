// import {Disposable, TextEditor, TextEditorEdit} from "vscode";
import { Disposable, TextEditor, TextBuffer as TextEditorEdit } from "atom";

/**
 * Registers a command that can be invoked via a keyboard shortcut,
 * a menu item, an action, or directly.
 *
 * Registering a command with an existing command identifier twice
 * will cause an error.
 *
 * @param command A unique identifier for the command.
 * @param callback A command handler function.
 * @param thisArg The `this` context used when invoking the handler function.
 * @return Disposable which unregisters this command on disposal.
 */
export function registerCommand(
  command: string,
  callback: (...args: any[]) => any,
  thisArg?: any
): Disposable {
  const target = "atom-workspace"; // TODO what should be the target?
  return atom.commands.add(target, command, callback);
}

/**
 * Registers a text editor command that can be invoked via a keyboard shortcut,
 * a menu item, an action, or directly.
 *
 * Text editor commands are different from ordinary [commands](#commands.registerCommand) as
 * they only execute when there is an active editor when the command is called. Also, the
 * command handler of an editor command has access to the active editor and to an
 * [edit](#TextEditorEdit)-builder.
 *
 * @param command A unique identifier for the command.
 * @param callback A command handler function with access to an [editor](#TextEditor) and an [edit](#TextEditorEdit).
 * @param thisArg The `this` context used when invoking the handler function.
 * @return Disposable which unregisters this command on disposal.
 */
export function registerTextEditorCommand(
  command: string,
  callback: (
    textEditor: TextEditor,
    edit: TextEditorEdit,
    ...args: any[]
  ) => void,
  thisArg?: any
): Disposable {
  const target = "atom-text-editor";
  // TODO callback map
  return atom.commands.add(target, command, callback);
}

