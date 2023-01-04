# Contributing to React Beacon Hint

Thanks for contributing, you rock!

When it comes to open source, there are many different kinds of contributions that can be made, all of which are valuable. Here are a few guidelines that should help you as you prepare your contribution.

## Code of Conduct

Formik has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](https://github.com/moh3n9595/react-beacon-hint/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Reporting Issues and Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/moh3n9595/react-beacon-hint/issues) to make sure your issue hasn't already been reported.

## New Features

Please open an issue with a proposal for a new feature or refactoring before starting on the work. We don't want you to waste your efforts on a pull request that we won't want to accept.

## Development

Visit the [Issue tracker](https://github.com/moh3n9595/react-beacon-hint/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```
git clone https://github.com/[YOUR_USERNAME]/react-beacon-hint.git
```

This repository uses Yarn v2 to manage packages. Install dependencies with:

```
yarn install
```

### Branch conventions

After forking the repo, create a branch from `main` with the below structure:

1. Use grouping tokens as prefixes separated with a slash:

   - **feature/\*** feature or feature set
   - **bugfix/\*** resolves an issue
   - **refactor/\*** refactor a piece of code
   - **hotfix/\*** resolves an important issue
   - **release/\*** prepare release

2. Add a short descriptor of the task:

   > Use kebab-case style with imperative tense.

   - feature/**add-main-header**
   - fix/**change-main-header-color**

> Read [here](https://www.conventionalcommits.org/en/v1.0.0/) for more information about conventions.

### Building

Running the `build` task will create both a CommonJS module-per-module build and a UMD build.

```
yarn build
```

### Testing and Linting

To run the tests:

```
yarn test
```

To continuously watch and run tests, run the following:

```
yarn test:watch
```

To perform linting with `eslint`, run the following:

```
yarn lint
```

### Playground / Integration testing

There is a Vite playground that also serves as the app used for integration tests. What's cool is you can run React Beacon Hint's build setup, Vite, and Vitest all at the same time and everything will just magically "work" and live reload whenever you make a change.
From the root, open a terminal and run `yarn dev` to start watch on the package and tests. open http://localhost:3000 too see the playground.

### Commits conventions

The commit message should be structured as follows:

```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

Real world examples can look like this:

```
chore: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```

### Create a PR

- Write a pull request title with commit conventions.
- Send your PR to `develop` branch.
