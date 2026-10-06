# Offline Quiz

A simple multiple-choice quiz in a single HTML file. It runs entirely in the browser, with no server, no internet connection and no cloud services.

## Features

- Starts with a double-click on `quiz.html`
- Multiple-choice questions with a progress bar
- Questions and answers are shuffled on every attempt
- Configurable passing threshold
- On passing: download of a PDF certificate with name, date and score
- No dependencies, no installation

## Structure

| File | Purpose |
|---|---|
| `quiz.html` | Quiz framework (interface and logic) |
| `fragen.js` | The quiz questions (not in the repository, see `.gitignore`) |
| `fragen.beispiel.js` | Example questions as a template |

## Usage

1. Copy `fragen.beispiel.js` and rename the copy to `fragen.js`.
2. Edit the questions, title and passing threshold in `fragen.js`.
3. Open `quiz.html` in a browser.

`fragen.js` must be in the same folder as `quiz.html`.

## Question format

```js
{
  frage: "What is 12 × 12?",
  antworten: ["124", "132", "144", "154"],
  richtig: 2   // index of the correct answer, counting from 0
}
```
