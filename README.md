# Imgur Gallery Web App

This is a simple web application built with React.js that allows users to browse the Imgur gallery. Users can view images in a grid of thumbnails, select different gallery sections, include/exclude viral images, and view detailed information about each image.

## Technical Stack

- **React.js**: JavaScript library for building user interfaces.
- **@tanStack/react-query**: Library for data fetching and caching in React.
- **Sass**: CSS preprocessor for styling.
- **TypeScript**: Typed superset of JavaScript for improved developer experience and code quality.
- **ESLint**: Code linter for maintaining code quality and adhering to coding standards.

## Local Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the Repository

```
git clone https://github.com/BilalAga8/imgur-gallery
```

### 2. Install Dependencies

Make sure you have Node.js and npm (or yarn) installed on your machine.

```
npm install
```

or

```
yarn install
```

### 3. Configure Imgur API

You need to obtain an Imgur API client ID from https://api.imgur.com/. Once you have the client ID:
add to env file

```
REACT_APP_IMGUR_CLIENT_ID=YOUR_IMGUR_CLIENT_ID
```

### 4. Start the Development Server

```
npm start
```

or

```
yarn start
```

The application should now be running on `http://localhost:3000`.

## Features

- Browse Imgur gallery images in a grid of thumbnails.
- Select different gallery sections: hot, top, user.
- Include/exclude viral images from the result set.
- View detailed information about each image:
  - Big image
  - Title
  - Description
  - Upvotes
  - Downvotes
  - Score
