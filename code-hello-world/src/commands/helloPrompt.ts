import * as vscode from 'vscode';

export default function helloPromptCreator(context: vscode.ExtensionContext) {
  return async function helloPrompt(...args: any[]) {
    try {
      console.log('args', JSON.stringify(args));
      console.log('ext ctx', context);
      console.log('functionName', 'helloPrompt');

      const inputValue = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: 'Your name. Ex: Fast',
        prompt: 'Input your name',
      });

      vscode.window.showInformationMessage(
        `Hello ${inputValue || 'prompt (by default)'}!`,
      );
    } catch (error: any) {
      vscode.window.showErrorMessage(error.message);
    }
  };
}
