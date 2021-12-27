# electron-vite-boilerplate

![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vite-boilerplate)

## Overview

- Enabled `Electron` and `NodeJs` in `Renderer-process` by **[vitejs-plugin-electron](https://www.npmjs.com/package/vitejs-plugin-electron)**.
- Use `Vite` build `Renderer-process`.
- Use `Webpack` build `Main-process` and `Preload-script`.

## Feature

- [x] `React` + `Antd` + `Less`
- [x] Support `swc-loader`
- [x] Support `babel-lader`
- [x] Integrate `electron-store`
- [x] Integrate `sqlite3`

## Run Setup

  ```bash
  # clone the project
  git clone git@github.com:caoxiemeihao/electron-vite-boilerplate.git

  # enter the project directory
  cd electron-vite-boilerplate

  # install dependency
  npm install

  # develop
  npm run dev
  ```

## ⚠️ pnpm

> The "node_modules" file structure generated by "pnpm" will lead to errors in the packaging of "electron builder". For example, the project needs to use "SQLite3"
