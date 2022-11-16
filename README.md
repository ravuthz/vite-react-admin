## Develop tools

```bash

yarn add -D prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort eslint-plugin-react-hooks

yarn add -D husky lint-staged
npm pkg set scripts.prepare="husky install"
npx husky-init && yarn install

```

## Add testing

```bash

yarn add -D @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event jsdom vitest @types/jsdom @types/testing-library__jest-dom @vitest/ui

```