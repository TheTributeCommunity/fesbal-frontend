# Fesbal
**Work in progress 🚧**
## Getting started
### Linting
Please **use eslint with the provided configuration**. To get it working in VSCode:
1. Install the ESLint extension extension (you can directly search for `dbaeumer.vscode-eslint`)
2. Configure VSCode to format on save. Add to your workspace VSCode settings (if the file doesn't exist then just create a new file `.vscode/settings.json` on the root directory of the project) the following:
```
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
}
```
## Styling/CSS
From now on we are using TailwindCSS for styling. There are some situations where SASS can be used but these are exceptions rather than the rule.

Some resources:
- [TailwindCSS editor setup](https://tailwindcss.com/docs/editor-setup)
- [TailwindCSS core concepts](https://tailwindcss.com/docs/utility-first)
