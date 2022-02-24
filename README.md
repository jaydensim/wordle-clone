# wordle-clone

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur)
  - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Project Setup

Ensure you have the necessary prerequisites installed on your system:

- Node.JS (hint hint: although you can install Node.JS from [here](https://nodejs.org/en/download/), I highly recommend you use `nvm` instead.)
  - NPM (should be preinstalled)
- Git

```sh
git clone https://github.com/jaydensim/wordle-clone.git
cd wordle-clone
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

A Vite development server will start on port `3000` (`http://localhost:3000`).

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
