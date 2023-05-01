# The application is a news aggregator with the following features:

### 1. The app has 3 pages:

    a. Home page (/) - This page lists the news articles from newest to oldest (up to 20 articles).
    b. Article page (/article/:id) - This page displays the full article text with its picture, source, date of publication, and a link to return back to the home page.
    c. 404 page (/404) - This page informs the user that the page they're trying to visit doesn't exist and shows a 404 status with some description.

### 2. The article preview on the home page has:

    a. Picture
    b. Title
    c. Source
    d. Date of publication
    e. Description of the article
    f. Link to "Read more" to go to the article page
    If no picture is returned from the API, a placeholder should be displayed instead.
    
![snap1](https://user-images.githubusercontent.com/72519578/235508942-c4f24e85-f3aa-4094-b1f6-f34e3f974fb4.jpg)


### 3. Clicking on the "Read more" link on the article preview takes the user to the article page where they can read the full article. The article page has:

    a. Picture
    b. Source
    c. Full article text
    d. Date of publication
    e. Link to return back to the home page
    
![snap2](https://user-images.githubusercontent.com/72519578/235508725-f691dff6-e540-4e23-8640-cf7748ca844b.jpg)

### 4. If the user visits a route that doesn't exist, they get redirected to the 404 page.

![snap3](https://user-images.githubusercontent.com/72519578/235508779-7273a75f-05ce-4811-a6f2-7773ae69cafb.jpg)

### 5. The user is able to filter news by source. This can be done using a dropdown with a list of all available sources.

![snap4](https://user-images.githubusercontent.com/72519578/235509500-4778cad8-fad9-44b4-a734-66e49b79456f.jpg)

### 6. The user is able to search for a specific article in the selected source by title.

![snap5](https://user-images.githubusercontent.com/72519578/235509801-37f1ff96-14f6-428b-bca3-885b9506f31d.jpg)

### 7. While the articles are loading, a spinner is being displayed.

### 8. If there are no articles that match the user's request, a message is displayed informing them that no articles were found.

![snap6](https://user-images.githubusercontent.com/72519578/235509900-7fca56a0-ef8e-4f3b-b90b-a291a3c81788.jpg)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all dependencies before running the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
