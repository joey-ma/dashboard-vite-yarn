# dashboard

Let's build everything from the ground up!

... Maybe?

# getting started

run `cd dashboard` to move into the directory `dashboard`

run `yarn install` to install dependencies

run `yarn dev` to start dev server

run `yarn build` to build for production

run `yarn preview` to locally preview production build

run `yarn vite --help` for a full list of CLI options (i.e. `--port`, `--https`, etc)

# setup notes

# detailed setup

- using **`vite`** as _front-end build tool_
  - `yarn create vite`, then follow the prompts
  - `yarn install`, then `yarn run dev` to star the dev server
- using **`yarn`** as _package manager_

  - https://yarnpkg.com/
  - if using **`yarn`** separately from `yarn create vite`, `yarn init -2` will generate some files inside your current directory; add them all to your next commit, and you're ready to go! **Note**: By default, yarn init -2 will setup your project to be compatible with Zero-Installs, which requires checking-in your cache in your repository; check your .gitignore if you wish to disable this.
  - if this is your first time using **`yarn`**, you might need to run `corepack enable`
  - `corepack disable`: if other package manager(s) such as **`pnpm`** is causing error (see below), disable corepack first then enable it again seem to have worked. An example of an error message is shown below.

    ```
    Internal Error: EINVAL: invalid argument, readlink '/Users/joeyma/.nvm/versions/node/v16.13.1/bin/pnpm'
    Error: EINVAL: invalid argument, readlink '/Users/joeyma/.nvm/versions/node/v16.13.1/bin/pnpm'
    ```

- using **`react`** & **`react-dom`** as _front-end framework_

  - https://reactjs.org/
  - `yarn install react react-dom`

## ideas

- using **`eslint`** as _formatting & lint tool_ (not currently working)

  - https://eslint.org/docs/user-guide/getting-started
  - `yarn add eslint --dev`
  - `yarn create @eslint/config`
  - using Airbnb style with some personal preferences

    - extends:
      - `'plugin:react/jsx-runtime',`
    - rules:

      - accept .js file extensions instead of requiring .jsx file extensions

      ```
      'react/jsx-filename-extension':
        [1, { extensions: ['.js', '.jsx'] }],
      ```

      - `'no-console': 'off',`

  # Considerations

  for reference:

  - notes:
    - prefer single quotes in JavaScript
    - prefer double quotes in HTML
  - padding: 15px for mobile, 10px for desktop
  - test in real life to adequately size touch targets:
    - consider a user's finger width, you should be able to comfortably touch a target with a _thumb_
  - make texts big enough for users
    - typical font size for displaying form texts on Desktop: 13px to 16px
    - larger font on mobile
    - use lighthouse to improve user experience
  - `input type="numeric"`
  - ensure your form is mobile first by allowing user to see the complete form (move form to top of page) i.e. to avoid hiding or obscuring the login button
  - "new-password" vs "current-password"
  - use `input type="password" aria-describedby="password-constraints ...> ` to describe password-constraints
  - use `<div id="password-constraints"> 8+ characters with a mix of letters` to describe password requirements
