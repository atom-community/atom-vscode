import { TextEditor } from "atom";

export const window = {
  /**
   * The currently active editor or `undefined`. The active editor is the one
   * that currently has focus or, when none has focus, the one that has changed
   * input most recently.
   */
  get activeTextEditor(): TextEditor | undefined {
    return atom.workspace.getActiveTextEditor();
  },

  /**
   * The currently visible editors or an empty array.
   */
  get visibleTextEditors(): TextEditor[] {
    return atom.workspace.getTextEditors();
  },
};
