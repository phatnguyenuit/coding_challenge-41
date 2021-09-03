import * as vscode from 'vscode';

const items: string[] = [
  'item 1',
  'item 2',
  'item 3',
  'item 4',
  'item 5',
  'item 6',
];

export default function quickPickCreator(context: vscode.ExtensionContext) {
  return async function quickPick(...args: any[]) {
    try {
      console.log('args', JSON.stringify(args));
      console.log('ext ctx', context);
      console.log('functionName', 'quickPick');

      const pickedValue = await vscode.window.showQuickPick(items, {
        canPickMany: false,
        ignoreFocusOut: true,
      });

      if (pickedValue) {
        vscode.window.showInformationMessage(
          `You selected: ${JSON.stringify(pickedValue)}`,
        );
      } else {
        vscode.window.showWarningMessage(
          'You cancelled to pick item from the provided list.',
        );
      }
    } catch (error: any) {
      vscode.window.showErrorMessage(error.message);
    }
  };
}
