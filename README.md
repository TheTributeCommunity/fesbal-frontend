# Fesbal
**Work in progress 🚧**
## Getting started
### Project setup
To initiate a local instance of the project, follow these steps:
1. Clone the repo;
2. Run ```npm install``` on the project root folder;
3. Create a ```.env``` file based on the ```.env.example``` file;
 - To get the real data, and connect with the real remote server, get in touch with the project managers.
 - If the remote backend URLs are not specified, the project will try to connect with the local backend instance. But if the Firebase connection data is not specified, the frontend project will not run.
4. Run ```npm run dev```;
5. Now, the project should be running. Open it by going to ```localhost:5173``` on any browser.

### Contributing
To contribute to the project, first read the [CONTRIBUTING.md](http://https://github.com/TheTributeCommunity/fesbal-frontend/blob/main/CONTRIBUTING.md "CONTRIBUTING.md") document.
It's also important to get in touch with the project managers to get the data to connect with Firebase and the remote backend server.

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
