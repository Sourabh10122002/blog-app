# Blog Application

This is a blog application built with React, Firebase, and Redux Toolkit. The application allows users to create, edit, and delete blog posts after authentication. Blogs include a title, description, and cover image. The application also supports Firebase Authentication.

## Features
- User login and signup using Firebase Authentication.
- Create, edit, and delete blog posts.
- Display all blog posts with pagination.
- View individual blog post details.
- Create blog posts with a title, description, and cover image.

## Tech Stack
- **Frontend**: React, Redux Toolkit, Firebase Authentication.
  
## How to Run the Application Locally

### Prerequisites:
- Node.js and npm installed on your machine.

### Steps:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Sourabh10122002/blog-app.git
    cd blog-app
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Setup Firebase Configuration:**
    - Create a `.env` file in the root of your project and add the following Firebase configuration (replace with your actual Firebase config):
    ```bash
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```
    - Make sure the `.env` file is listed in `.gitignore`.

4. **Start the Application:**
    ```bash
    npm start
    ```

    The application will run locally on [http://localhost:3000](http://localhost:3000).

5. **To Deploy:**
    - Deployed link:- https://blog-app-khaki-one.vercel.app/

### Additional Notes
- The application uses Firebase for authentication and Redux Toolkit for managing state.
- To add more features or modify the app, update the respective components in the `src/` folder.
