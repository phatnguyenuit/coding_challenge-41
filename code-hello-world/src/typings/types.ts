import * as vscode from 'vscode';

export type RegisterCommandCallback = (...args: any[]) => any;

export type RegisterCommandCreator = (
  context: vscode.ExtensionContext,
) => RegisterCommandCallback;
