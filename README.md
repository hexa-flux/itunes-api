---
permalink: /README/
title: READ ME - iTunes API
---

# iTunes API

This Express/React full-stack app provides a searching and favouriting system for movies, shows, music and books via the iTunes API. Results are presented in a user-friendly format and requests made in the app are made secure via JSON web tokens, meaning no requests can be made to this API outside of the app. Favourites are saved to local storage, meaning they are saved per browser in this demonstration.

---

## Installation and startup

To install the app, simply download and save the api files to your computer. Ensure /backend/ and /frontend/ are saved in the same folder. To start up, open a terminal on the /backend/ directory and another on the /frontend/ directory. On the back-end, run the command `npm start` and wait for `Server is running on (PORT)` to print in the terminal. Then run the command `npm run dev` on the front-end, wait for React to start up and then press and enter `o`. A browser window with the app should then open.

---

## Searching with the API

Once the app is initialized, and the connection is secured, you should see a search bar with a drop-down ready for you. You can enter a search query and select a media type to search by. Or leave the search engine to search all media types. Click the search button or press `Enter` to return results from the app. From there, results will be displayed in a grid, with options to add to your favourites or view the title on iTunes.

## Managing favourites

In the navigation bar you will see a `FAVOURITES` tab. You can navigate to it to see all the titles you have favourited, and remove them by the favourite button if you choose to do so.