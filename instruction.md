# How to build a VSCode extension

This instruction help you out to build your own VSCode extension.
It might be simple but it is good enough for you to get started.

## Table of contents

- [How to build a VSCode extension](#how-to-build-a-vscode-extension)
  - [Table of contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [References](#references)

## Prerequisites

- Get VSCode IDE installed
- Install `yo` and `generator-code` packages

```sh
npm install -g yo generator-code
```

- Generate your own extension

```sh
yo code
```

  > **Warming Note**: You can choose which type of extension you want to generate and programming languages `JavaScript` or `TypeScript`. For me I choose `TypeScript`.

- Follow [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension) to customize and implement your own logic for the generated extension.

- Start debugging you extension on VSCode environment by pressing `F5`

New VSCode IDE will be open having your extension installed.

- Package your extension into `.vsix` files

```sh
# Install vsce npm module
npm install -g vsce # You can install it as your devDependencies.

# Package
vsce package # For more input params you can use --help postfix

# After running this command new extension file .vsix will be created in your project root folder
```

- Publish your extension

Follow this guide [Publishing Extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) from visual studio code official page

## References

- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
- [Extension Anatomy](https://code.visualstudio.com/api/get-started/extension-anatomy)
- [VSCode API References](https://code.visualstudio.com/api/references/vscode-api)
