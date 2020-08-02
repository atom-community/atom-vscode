"use babel";

import { commands } from "../dist/main.js";

describe("Commands", () => {
  it("registers a command for the workspace and executes it", () => {
    commands.registerCommand("package1.command1", () => console.log("command1"));
    expect(commands.isCommandRegistered("package1.command1")).toBe(true);

    spyOn(console, "log")
    commands.executeCommand("package1.command1")
    expect(console.log).toHaveBeenCalled();

  });

  it("registers a command for the text editor and executes it", () => {
    commands.registerTextEditorCommand("package1.command2", () => console.warn("command2"));
    expect(commands.isCommandRegistered("package1.command2")).toBe(true);

    spyOn(console, "warn")
    commands.executeCommand("package1.command2")
    expect(console.warn).toHaveBeenCalled();
  });

});
