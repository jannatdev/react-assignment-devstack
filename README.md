
# Project Name
## React-Assignment-A-5 Dev Stack Builder Website

# Description
## Devstack is an interactive website built with React. Here users can browse popular technologies across different catagories such as Fronted, Backend, Styling  Database, Language, DevOps and add their preferred technologies to a personalized stack. It features reusable components, dynamic state management, technology filtering, interactive section, responsive design and a clean modern UI.

# Using Technologies:
## React.js
Tailwind CSS
TypeScript
JavaScript (ES6+)
React-Toastify
JSON
Vite 

# 3 features of this projects:
## 1. Interactive Technology Cards - Explore technologies with descriptions, catagories, experience levels and ratings.
2. Reusable React Components - This website is built using reusable and maintainable components for better code generation.
3. Dynamic Stack Panel - View selected technologies in one place







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
