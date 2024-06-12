# Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`
3. Make your changes and commit them following the [Conventional Commits](https://www.conventionalcommits.org/) specification.
4. Push your changes to your forked repository: `git push origin my-new-feature`
5. Create a new Pull Request on the original repository.

Please ensure that your code adheres to the project's coding standards and that all tests pass before submitting a Pull Request.

## Commit Message Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. Each commit message should have a type, a scope (optional), and a description:

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding or updating tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope

The scope should be the name of the component, module, or area that the change affects. For example, `auth`, `chat`, `server`, etc.

### Examples

    
    - feat(chat): add support for private messaging
    - fix(auth): resolve authentication bug for college ID login
    - docs: update README with new contributing guidelines
    - style(server): format code with Prettier
    - refactor(client): improve chat room component structure
    - perf(client): optimize message rendering
    - test(server): add unit tests for authentication middleware
    - chore: update dependencies


## Coding Standards

To maintain a consistent and high-quality codebase, we follow several coding standards and best practices:

### JavaScript

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for coding conventions and best practices.
- Use ES6+ syntax and features whenever possible.
- Write modular and reusable code.
- Include descriptive variable and function names.
- Add comments to explain complex logic or non-obvious code.

### React

- Follow the [React Best Practices](https://reactjs.org/docs/code-quality.html) outlined in the official React documentation.
- Favor functional components and hooks over class components whenever possible.
- Use descriptive and meaningful component names.
- Separate presentational and container components for better code organization.
- Avoid redundant or unnecessary re-renders.

### Node.js and Express

- Follow the [Node.js Style Guide](https://github.com/felixge/node-style-guide) for server-side code.
- Use async/await for asynchronous operations instead of callbacks.
- Properly handle errors and edge cases.
- Sanitize and validate user input to prevent security vulnerabilities.
- Follow RESTful API design principles for backend routes.

### Git

- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.
- Write clear and concise commit messages that describe the changes made.
- Ensure that each commit represents a single, logical change.
- Rebase or squash commits for a cleaner commit history before creating a pull request.

### Testing

- Write unit tests for all critical components and functions.
- Use [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and component testing.
- Aim for high code coverage, but prioritize testing critical paths and edge cases.
- Write end-to-end tests using [Cypress](https://www.cypress.io/) to ensure the application works as expected in a real-world environment.

### Linting and Formatting

- Use [ESLint](https://eslint.org/) for static code analysis and linting.
- Configure ESLint to follow the Airbnb style guide and project-specific rules.
- Use [Prettier](https://prettier.io/) for automatic code formatting.
- Set up a pre-commit hook to automatically format code before committing.

By following these coding standards and guidelines, we can maintain a consistent, readable, and maintainable codebase for the Anonymous Chat Application project. Contributors should familiarize themselves with these standards and apply them when making changes to the codebase.
