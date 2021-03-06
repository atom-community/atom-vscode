"use babel";

import { window } from "../dist/main.js";

describe("Window", () => {
  it("gives the active text editor", () => {
    expect(window.activeTextEditor).toBe(atom.workspace.getActiveTextEditor());
  });
  it("gives all the editors", () => {
    expect(window.visibleTextEditors).toEqual(atom.workspace.getTextEditors());
  });
});
