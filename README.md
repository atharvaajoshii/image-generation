# Image Search Engine

A simple image search application built with Node.js, Express, EJS, and the Pexels API.

## Features

* Search images using keywords
* Display image results in a responsive gallery
* View photographer information
* Open full-size images
* Fast image loading with optimized image sizes

## Tech Stack

* Node.js
* Express.js
* EJS
* Axios
* Pexels API

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/image-search-engine.git
cd image-search-engine
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PEXELS_API_KEY=your_api_key_here
```

## Run the Project

```bash
node app.js
```

Open:

```text
http://localhost:5000
```

## Project Structure

```text
image-search-engine/
│
├── public/
│   └── style.css
│
├── views/
│   └── index.ejs
│
├── app.js
├── package.json
├── .env
└── README.md
```

## API

This project uses the Pexels API to fetch image search results.

## Future Improvements

* Pagination
* Infinite scrolling
* Favorites system
* Dark mode
* Advanced search filters

## Author

Atharva Joshi
