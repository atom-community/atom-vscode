# atom-vscode

Atom with VSCode API! This allows using VSCode extensions directly in Atom.

![Build Status (Github Actions)](https://github.com/atom-ide-community/atom-vscode/workflows/CI/badge.svg)
[![Dependency Status](https://david-dm.org/atom-ide-community/atom-vscode.svg)](https://david-dm.org/atom-ide-community/atom-vscode)
[![apm](https://img.shields.io/apm/dm/atom-vscode.svg)](https://github.com/atom-ide-community/atom-vscode)
[![apm](https://img.shields.io/apm/v/atom-vscode.svg)](https://github.com/atom-ide-community/atom-vscode)

## Usage

```
npm install atom-vscode
```

## Roadmap

Add the mostly used API

## Contributing

The most used API are added by going through [`@types/vscode`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/vscode/index.d.ts) functions and writing their Atom equivalent as a function with the same name. The goal is to be as close as possible, but there maybe differences that cannot covered by this package.
