# iTunes Top Albums

This app allows users to browse and search for the top albums on iTunes. It fetches data from the iTunes RSS feed and displays it in a responsive grid layout. The app also provides detailed information about each album, including a link to view the album on iTunes.

Features

    Top Albums Feed: Displays the current top 100 albums from iTunes.
    Search Functionality: Search for albums or artists in the list of top albums.
    Debounce: To improve performance and limit the number of API calls made during search (in the scenario if network request were being made).
    Album Details: Click on an album image to view more details about the album.
    Pagination: Navigate through the album list with pagination.
    External Links: From the album details page, you can view the album on iTunes.
    Back to Home: A link to navigate back to the home page.
    Mobile-First Design: The app is designed to be responsive, with a mobile-first approach.
    Accessibility: The app includes ARIA labels for better accessibility.

## Technology

This application was built using Next.js with-styled-components boilerplate code
https://github.com/vercel/next.js/tree/canary/examples/with-styled-components

## Installation

    Clone the repository

```
git clone https://github.com/hanCS50/nextjs-itunes.git
```

## Install dependencies

```
cd nextjs-itunes
npm install
```

    Run the development server

```
npm run dev
```

Visit the app at http://localhost:3000

How It Works

This app fetches the top 100 albums from iTunes using the following RSS feed:

    https://itunes.apple.com/us/rss/topalbums/limit=100/json

Home Page

    Displays a grid of the top 100 albums.
    Allows users to search by artist name or album title.
    Pagination is enabled to navigate through the album list.

Album Details Page

    Clicking on an album cover opens a details page where more information about the album is displayed, such as the artist, genre, release date, and price.
    On the album details page, users can view the album on iTunes through an external link.
    A "Back to Home" button navigates the user back to the main album list.

Pagination

    The album list is paginated to navigate between pages of albums.

License

This project is licensed under the MIT License
