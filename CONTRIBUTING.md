# Contributing to Polo Studio

Thank you for your interest in contributing to the Polo Studio project! We welcome contributions of all kinds, including bug reports, feature requests, documentation improvements, and code enhancements.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Messages](#commit-messages)
- [Testing](#testing)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork locally:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/React-polostudiovsteck.git
   cd React-polostudiovsteck
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/moonpy-a11y/React-polostudiovsteck.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start the development server:**
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## Development Workflow

### Creating a Feature Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation updates
- `refactor/` - for code refactoring
- `style/` - for styling changes

### Making Changes

1. Make your changes in the feature branch
2. Test your changes locally
3. Keep commits atomic and focused
4. Follow the [Code Style Guidelines](#code-style-guidelines)

### Syncing with Main Branch

Before submitting a pull request, sync with the upstream main branch:

```bash
git fetch upstream
git rebase upstream/main
```

## Reporting Bugs

When reporting a bug, please include:

- **Clear description** of what the bug is
- **Steps to reproduce** the issue
- **Expected behavior** - what you expected to happen
- **Actual behavior** - what actually happened
- **Screenshots or videos** (if applicable)
- **Environment details** - OS, browser, Node version, etc.
- **Possible solution** (optional but appreciated)

Create a bug report using the GitHub Issues tab.

## Suggesting Enhancements

When suggesting a feature enhancement:

- **Clear description** of the feature
- **Use case** - explain why this feature would be useful
- **Possible implementation** (optional)
- **Examples** of similar features in other projects (optional)

## Pull Request Process

### Before Submitting

1. **Test your changes thoroughly:**
   ```bash
   npm start
   npm test
   npm run build
   ```

2. **Update documentation** if needed
3. **Rebase on main** (see syncing section above)
4. **Ensure your branch is up to date** with upstream

### Submitting a Pull Request

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Reference to related issues (e.g., "Fixes #123")
   - Screenshots for UI changes
   - Checklist of items completed

3. **PR Template** (use when available):
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Related Issues
   Closes #(issue number)

   ## Testing
   Describe how you tested the changes

   ## Screenshots
   (if applicable)
   ```

4. **Address review feedback** - respond to comments and make requested changes

5. **Merge** - once approved, your PR will be merged!

## Code Style Guidelines

### JavaScript/React

- Use **ES6+ syntax** (arrow functions, const/let, destructuring, etc.)
- **Component naming:** Use PascalCase for React components
- **File naming:** Use PascalCase for component files, lowercase for utilities
- **Props:** Use destructuring in function parameters
- **Indentation:** 2 spaces
- **Semicolons:** Always use semicolons
- **Quotes:** Use single quotes for strings

Example:
```javascript
import React, { useState } from 'react';
import './ComponentName.css';

function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(null);

  const handleClick = () => {
    setState(true);
  };

  return (
    <div className="component-name">
      <h1>{prop1}</h1>
      <p>{prop2}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ComponentName;
```

### CSS

- Use **BEM naming convention** for classes: `.block__element--modifier`
- **Mobile-first** responsive design approach
- Group related properties together
- Use **meaningful class names**
- Keep specificity low

Example:
```css
.component {
  padding: 20px;
}

.component__title {
  font-size: 24px;
  font-weight: bold;
}

.component__button {
  padding: 10px 20px;
  cursor: pointer;
}

.component__button--primary {
  background-color: #007bff;
  color: white;
}

@media (max-width: 768px) {
  .component {
    padding: 10px;
  }
}
```

### HTML

- Use **semantic HTML5 elements**
- Maintain proper **nesting and indentation**
- Use **meaningful id and class names**
- Always include **alt attributes** for images

## Commit Messages

Write clear, descriptive commit messages:

- **Format:** `type(scope): subject`
- **Types:** feat, fix, docs, style, refactor, test, chore
- **Subject:** Keep under 50 characters, use imperative mood
- **Body:** Explain what and why (optional, after blank line)

Examples:
```
feat(booking): add date validation to booking form
fix(navigation): correct active link highlighting
docs: update setup instructions
refactor(services): simplify component logic
```

## Testing

### Running Tests

```bash
npm test
```

### Writing Tests

- Test critical functionality
- Use descriptive test names
- Keep tests focused and isolated
- Aim for >80% code coverage on new features

Example:
```javascript
describe('Booking Component', () => {
  it('should submit form with valid data', () => {
    // Test implementation
  });

  it('should show error on missing required field', () => {
    // Test implementation
  });
});
```

## Questions?

- Check existing issues and discussions
- Review documentation in the README
- Ask in a GitHub Discussion
- Contact the maintainers

## License

By contributing to Polo Studio, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Polo Studio! 🐴
