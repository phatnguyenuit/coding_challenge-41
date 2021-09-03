import * as vscode from 'vscode';

// Reference: https://stackoverflow.com/questions/45203543/vs-code-extension-api-to-get-the-range-of-the-whole-text-of-a-document

export default function getTextSelectionCreator(
  context: vscode.ExtensionContext,
) {
  return async function getTextSelection(...args: any[]) {
    try {
      console.log('args', JSON.stringify(args));
      console.log('ext ctx', context);
      console.log('functionName', 'getTextSelection');

      const activeEditor = vscode.window.activeTextEditor;

      if (!activeEditor) {
        return;
      }

      const selection = activeEditor.selection;
      const selectedText = activeEditor.document.getText(selection);

      vscode.window.showInformationMessage(
        `Current selected text: ${JSON.stringify(selectedText)}`,
      );
    } catch (error: any) {
      vscode.window.showErrorMessage(error.message);
    }
  };
}
