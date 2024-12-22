# Bookmarker Webpage

## Project Overview

**Bookmarker** is a simple web application that allows users to save their favorite websites. This application makes it easy to store and display links to websites you visit frequently. You can add, visit, and delete bookmarked sites, with all the data being stored in your browser's localStorage, making it persistent across sessions.

## Features

- **Add a Bookmark**: Allows you to add a website's name and URL.
- **Visit a Bookmark**: Each bookmark has a "Visit" button that opens the website in a new tab.
- **Delete a Bookmark**: Each bookmark has a "Delete" button that removes it from the table and from localStorage.
- **Persistence**: Bookmarks are saved in your browser's localStorage and persist even after the page is refreshed or reopened.
- **Dynamic Table**: Displays saved bookmarks in a table with columns for the row number, website name, visit button, and delete button.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling of the page.
- **Bootstrap**: Used for responsive layout and component styling.
- **JavaScript**: Logic for interacting with localStorage, managing data, and manipulating the DOM.

## How to Use

1. **Add a Bookmark**:

   - Enter the name of the website in the first input field.
   - Enter the URL of the website in the second input field.
   - Click the "Submit" button to add the bookmark.
   - The website will be added to the table below the input fields, and will be stored in your browser's localStorage.

2. **Visit a Bookmark**:

   - Click the "Visit" button next to the bookmark you want to open. It will open the website in a new tab.

3. **Delete a Bookmark**:

   - Click the "Delete" button next to the bookmark you want to remove. This will delete the bookmark from the table and from localStorage.

4. **Persistence**:
   - When you reload the page, the bookmarks will remain in the table as long as they are stored in localStorage.

## Example of a Table Row

| Index | Website Name   | Visit Button | Delete Button |
| ----- | -------------- | ------------ | ------------- |
| 1     | Google         | [Visit]      | [Delete]      |
| 2     | GitHub         | [Visit]      | [Delete]      |
| 3     | Stack Overflow | [Visit]      | [Delete]      |

## How to Use

1. Add your favorite websites using the inputs provided.
2. Bookmarks will be stored in localStorage and displayed dynamically in the table.

### [LinkedIn](https://www.linkedin.com/in/mohammed-ashraf0/)

### [Live Demo](https://mo-ashraf-elsayed.github.io/Bookmarker/)
