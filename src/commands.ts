// TODO fix types

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
export function registerCommand(command: string, callback: (...args: any[]) => any, thisArg?: any): Disposable {
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
  callback: (textEditor: TextEditor, edit: TextEditorEdit, ...args: any[]) => void,
  thisArg?: any
): Disposable {
  const target = "atom-text-editor";
  // TODO callback map
  return atom.commands.add(target, command, callback);
}

/**
 * Executes the command denoted by the given command identifier.
 *
 * * *Note 1:* When executing an editor command not all types are allowed to
 * be passed as arguments. Allowed are the primitive types `string`, `boolean`,
 * `number`, `undefined`, and `null`, as well as [`Position`](#Position), [`Range`](#Range), [`Uri`](#Uri) and [`Location`](#Location).
 * * *Note 2:* There are no restrictions when executing commands that have been contributed
 * by extensions.
 *
 * @param command Identifier of the command to execute.
 * @param rest Parameters passed to the command function.
 * @return A thenable that resolves to the returned value of the given command. `undefined` when
 * the command handler function doesn't return anything.
 */
export function executeCommand<T>(command: string, ...rest: any[]): Thenable<T | undefined> {
  let target;
  let [prefix, _] = getCommandParts(command);
  // determine real target
  if (prefix === "vscode") {
    // workspace target
    target = getWorkspaceTarget()
  } else if (prefix === "editor") {
    // editor target
    target = getActiveEditorTarget()
  } else {
    if (isCommandRegistered(command)) {
      // Considering a workspace command
      target = getWorkspaceTarget()
    } else {
      console.error("command not found", command);
    }
  }
  if (rest) {
    console.warn("rest parameters are not supported.");
  }
  // TODO the return is always void
  return atom.commands.dispatch(target, command);
}

/**
 * Retrieve the list of all available commands. Commands starting with an underscore are
 * treated as internal commands.
 *
 * @param filterInternal Set `true` to not see internal commands (starting with an underscore)
 * @return Thenable that resolves to a list of command ids.
 */
export function getCommands(filterInternal?: boolean): Thenable<string[]> {
  if (filterInternal) {
    console.warn("filterInternal is not supported")
  }
  return Object.keys(atom.commands.registeredCommands)
}


/*
██    ██ ████████ ██ ██      ███████
██    ██    ██    ██ ██      ██
██    ██    ██    ██ ██      ███████
██    ██    ██    ██ ██           ██
 ██████     ██    ██ ███████ ███████
*/

function getWorkspaceTarget() {
  return atom.views.getView(atom.workspace);
}

function getActiveEditorTarget() {
  let target
  const editor = atom.workspace.getActiveTextEditor();
  if (editor) {
    target = atom.views.getView(editor);
  }
  return target
}

function getCommandParts(command: string) {
  const commandParts = command.split(".");
  const prefix = commandParts[0];
  const suffix = commandParts[1];
  return [prefix, suffix];
}


export function isCommandRegistered(command: string) {
  return atom.commands.registeredCommands[command]
}
