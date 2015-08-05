# eslint-config-infektweb

  ESLint config files

## Usage

  Install this package and the peer dependencies:

  ```sh
  npm install --save-dev eslint-config-infektweb
  npm install --save-dev babel-eslint eslint-plugin-bdd eslint-plugin-classes eslint-plugin-react
  ```

  Add the `extends` option to your `.eslintrc`:

  ```
  {
      "extends": "eslint-config-infektweb"
  }
  ```

  or with specific configs:

  ```
  {
      "extends": [
          "eslint-config-infektweb/configs/defaults",
          "eslint-config-infektweb/configs/es6",
          "eslint-config-infektweb/configs/react",
          "eslint-config-infektweb/configs/node"
      ]
  }
  ```
