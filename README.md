# MKScriptTemplate
Mister Keyboard script template with typings.

## Getting Started

1. Fork this repository (recommended), or download it as a ZIP and extract it.
2. Open the project folder in your favorite code editor (e.g. [Visual Studio Code](https://code.visualstudio.com/)).
3. Run `npm install`[^1] in the terminal to install the necessary dependencies.

Simply edit the `src/script.ts` file!

If your editor is set up correctly, you should get autocompletion, type checking and inline documentation for the full Mister Keyboard Scripting API.

> [!TIP]
> Once you have forked this repository, you can just press the <key>.</key> key on GitHub to open the project in GitHub Codespaces, which comes with everything pre-installed and ready to go! You will get a fully featured coding environment in your browser.

### Building

If you write normal JavaScript code, you can simply copy your script straight into Mister Keyboard.

> [!IMPORTANT]
> If you want to use TypeScript features (like types, interfaces, etc.), you need to compile your code first. You can do this by running `npm run build` in the terminal. This will create a `dist/<your_script>.js` file that you can then load into Mister Keyboard.

### Upgrading

The Mister Keyboard scripting API is still in active development, and regularly receives new features and improvements.
If you obtained this template in the recommended way (by forking this repository), you can easily pull in the latest changes by running `git pull`[^2] in the terminal.

[^1]: Requires [Node.js](https://nodejs.org/) to be installed on your system.
[^2]: Requires [Git](https://git-scm.com/) to be installed on your system.
