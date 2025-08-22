# Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Other changes that don't modify src or test files
- **ci**: Changes to our CI configuration files and scripts
- **build**: Changes that affect the build system or external dependencies
- **revert**: Reverts a previous commit

## Examples

### Good commit messages:
```
feat: add user authentication system
fix: resolve mobile navigation bug on iOS
docs: update API documentation
style: format code with prettier
refactor: simplify user data fetching logic
perf: optimize image loading performance
test: add unit tests for auth service
chore: update dependencies
ci: add automated deployment workflow
```

### With scope:
```
feat(auth): add login functionality
fix(ui): resolve button styling issue
docs(api): add endpoint documentation
```

### With body:
```
feat: add user profile management

Allow users to update their profile information including
name, email, and profile picture. Includes form validation
and error handling.
```

## Rules

- Use lowercase for type and scope
- Keep subject line under 72 characters
- Don't end subject line with a period
- Use imperative mood in subject line ("add" not "added")
- Separate subject from body with blank line
- Wrap body at 100 characters
- Use body to explain what and why vs. how

## Breaking Changes

For breaking changes, add `!` after the type/scope:

```
feat!: remove deprecated API endpoints
refactor!: change authentication flow
```

Or include `BREAKING CHANGE:` in the footer:

```
feat: add new authentication system

BREAKING CHANGE: The old auth endpoints are no longer supported.
Users must migrate to the new /api/v2/auth endpoints.
```