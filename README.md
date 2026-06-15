# Git Flow Lab

A simple web application used to practice Git Flow branching strategies, pull requests, releases, and hotfix workflows.

## Features

* Header with navigation links
* Theme toggle button
* Light and dark themes
* Accessible dark-mode color contrast improvements

## Getting Started

1. Clone the repository.
2. Open `index.html` in a browser.
3. Use the **Toggle Theme** button in the header to switch between light and dark modes.

## Dark Theme

The dark theme is implemented by toggling a `data-theme="dark"` attribute on the `<body>` element.

When enabled, CSS attribute selectors apply dark-theme styles for:

* Page background
* Text colors
* Header styling
* Navigation links
* Theme toggle button

## Release Notes

### v1.0.0

* Added navigation header
* Added theme toggle functionality
* Implemented light and dark themes
* Improved dark-mode text contrast for accessibility
* Updated project documentation
* Prepared project for production release

## Git Flow

This project follows the Git Flow workflow:

* `main` – production-ready code
* `develop` – integration branch for ongoing development
* `feature/*` – new features
* `release/*` – release preparation
* `hotfix/*` – production fixes
