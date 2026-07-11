# GitHub Profile Viewer

A simple front-end project that lets you search for any GitHub username and view their profile stats and public repositories — built using vanilla HTML, CSS, and JavaScript.

> ⚠️ **Status: Work in progress.** This is a practice project for sharpening front-end fundamentals (DOM manipulation, fetch API, event handling, localStorage). It is **not** intended for production use, and more features/refactors are on the way.

## Features

- 🔍 **Search any GitHub user** by username
- 👤 **Profile overview** — avatar, name, bio, followers, following, and public repo count
- 📁 **Repository list** — shows up to 6 of the user's repos with language, stars, and forks
- 🔎 **Filter repositories** by keyword after a search
- 🕘 **Recent search history** (saved locally via `localStorage`), click an entry to search it again
- 🖼️ **Avatar lightbox** — click the profile picture to view it enlarged in an overlay
- ⏳ **Loading state** on the search button while data is being fetched

## Tech Stack

- **HTML5** / **CSS3**
- **Vanilla JavaScript** (no frameworks or build tools)
- [**GitHub REST API**](https://docs.github.com/en/rest) (`/users/{username}` and `/users/{username}/repos` endpoints)
- **localStorage** for persisting recent searches

## Project Structure

```
├── index.html
├── style.css
└── js/
    ├── app.js            # App entry point, wires up event listeners and orchestrates the search flow
    ├── github.js         # Handles GitHub API requests (user + repos)
    ├── profile.js        # Renders the profile section
    ├── repositories.js   # Renders, sorts and filters the repository list
    ├── history.js         # Manages recent search history (localStorage)
    ├── overlay.js         # Avatar image lightbox/overlay logic
    └── ui.js              # Loader / button state helpers
```

## Getting Started

Since this is a static front-end project with no build step, you can run it locally with any static server (or even by opening the file directly):

```bash
git clone https://github.com/Sameer0726152/Github-Project.git
cd Github-Project
```

Then open `index.html` in your browser, or serve it locally, e.g.:

```bash
npx serve .
```

> Note: This project calls the public, unauthenticated GitHub API, which has a rate limit of 60 requests/hour per IP. If you hit the limit, wait a bit before searching again.

## Learning Goals

This project is part of ongoing front-end practice, focusing on:
- Working with public REST APIs using `fetch`
- DOM manipulation without a framework
- State management using plain JS and `localStorage`
- Structuring vanilla JS across multiple files
