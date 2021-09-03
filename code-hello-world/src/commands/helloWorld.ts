import * as vscode from 'vscode';

export default function helloWorldCreator(context: vscode.ExtensionContext) {
  return async function helloWorld(...args: any[]) {
    try {
      console.log('args', JSON.stringify(args));
      console.log('ext ctx', context);
      console.log('functionName', 'helloWorld');

      vscode.window.showInformationMessage('Hello world!');
    } catch (error: any) {
      vscode.window.showErrorMessage(error.message);
    }
  };
}
