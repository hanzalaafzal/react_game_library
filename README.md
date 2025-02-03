
Thought for a second
# Game Library SPA 

A simple single-page application (SPA) for browsing and managing a library of video games. Built with React.js, Tailwind CSS, and Vite, this project fetches and displays game names from the RAWG Video Games Database and showcases frequently searched games as "Trending" using Appwrite's online database.

## Features 
 
- **Game Search:**  Fetch and display game names using RAWG Video Games Database API.
 
- **Trending Games:**  Display frequently searched games as "Trending" using Appwrite's online database.
 
- **Responsive Design:**  Built with Tailwind CSS for a responsive and modern UI.
 
- **Efficient State Management:**  Utilizes React hooks (`useState`, `useEffect`, `useDebounce`) for state management and side effects.
 
- **Real-time Updates:**  Seamless data fetching and updating using Vite's fast build tools.

## Technologies Used 
 
- **React.js (v19):**  Frontend library for building user interfaces.
 
- **Tailwind CSS (v4):**  Utility-first CSS framework for styling.
 
- **Vite:**  Fast frontend build tool.
 
- **Appwrite:**  Backend server for managing database collections.
 
- **RAWG API:**  External API for fetching video game data.
 
- **React Hooks:**  `useState`, `useEffect`, `useDebounce` for managing component state and side effects.

## Installation 

### Prerequisites 
 
- **Node.js**  (v14 or later)
 
- **npm**  or **yarn**
 
- **Appwrite Account:**  To manage the backend database.
 
- **RAWG API Key:**  Obtain from [RAWG.io]() .

### Setup 
 
1. **Clone the Repository** 

```bash
git clone https://github.com/yourusername/hanzalaafzal-react_game_library.git
cd hanzalaafzal-react_game_library
```
 
2. **Install Dependencies** 
Using npm:


```bash
npm install
```

Or using yarn:


```bash
yarn install
```
 
3. **Configure Environment Variables** Create a `.env.local` file in the root directory and add the following variables:

```env
VITE_IGDB_API_KEY=your_rawg_api_key
VITE_APPWRITE_ID=your_appwrite_project_id
VITE_APPWRITE_DB_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_METRICS_ID=your_appwrite_collection_metrics_id
```
 
4. **Start the Development Server** 
Using npm:


```bash
npm run dev
```

Or using yarn:


```bash
yarn dev
```
The application should now be running at `http://localhost:5173` (default Vite port).

## Environment Variables 
Ensure you have a `.env.local` file in the root of your project with the following variables: 
- `VITE_IGDB_API_KEY`: Your RAWG API key for fetching game data.
 
- `VITE_APPWRITE_ID`: Your Appwrite project ID.
 
- `VITE_APPWRITE_DB_ID`: Your Appwrite database ID.
 
- `VITE_APPWRITE_COLLECTION_METRICS_ID`: Your Appwrite collection ID for tracking metrics.
Example `.env.local`:

```env
VITE_IGDB_API_KEY=your_rawg_api_key
VITE_APPWRITE_ID=your_appwrite_project_id
VITE_APPWRITE_DB_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_METRICS_ID=your_appwrite_collection_metrics_id
```

## Directory Structure 


```arduino
hanzalaafzal-react_game_library/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── GameCard.jsx
    │   ├── Loader.jsx
    │   └── Search.jsx
    └── services/
        └── appwrite.js
```

### Description 
 
- **public/** : Contains static assets.
 
- **src/** : Main source code directory. 
  - **App.jsx** : Main application component.
 
  - **components/** : Reusable React components. 
    - `GameCard.jsx`: Component to display individual game details.
 
    - `Loader.jsx`: Loading spinner component.
 
    - `Search.jsx`: Search bar component with debounce functionality.
 
  - **services/** : 
    - `appwrite.js`: Configuration and functions for interacting with Appwrite.
 
  - **assets/** : Images and other asset files.
 
  - **index.css** : Global CSS styles.
 
  - **App.css** : Styles specific to the App component.
 
  - **main.jsx** : Entry point for React application.

## Learning Objectives 

By completing this project, you have:
 
- **Mastered React.js:**  Gained experience with React hooks (`useState`, `useEffect`, `useDebounce`) for state and side-effect management.
 
- **Styled with Tailwind CSS:**  Implemented responsive and modern UI designs using Tailwind's utility classes.
 
- **Built with Vite:**  Leveraged Vite for fast development builds and efficient bundling.
 
- **Integrated External APIs:**  Fetched and managed data from the RAWG Video Games Database API.
 
- **Managed Backend with Appwrite:**  Utilized Appwrite to handle database operations and track trending games.
 
- **Structured a React Project:**  Organized a React project with a clear and maintainable directory structure.
 
- **Implemented Debouncing:**  Enhanced search functionality with debounced input to optimize API calls.

## Resources 
 
- **YouTube Tutorial:**  This project was built by following the steps in this [YouTube video](https://www.youtube.com/watch?v=dCLhUialKPQ) .
 
- **React Documentation:**  [https://reactjs.org/docs/getting-started.html]()
 
- **Tailwind CSS Documentation:**  [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
 
- **Vite Documentation:**  [https://vitejs.dev/guide/]()
 
- **Appwrite Documentation:**  [https://appwrite.io/docs]()
 
- **RAWG API Documentation:**  [https://rawg.io/apidocs]()

---
