
---

# Ceramics Arena

### Selected Category : Ceramics and Pottery

- [Live Link](https://ceramics-arena-client.web.app/):

Ceramics Arena is a full-stack web application for showcasing and selling ceramics and pottery items. It provides users with various features such as authentication, product management, and a visually appealing user interface.

---

## Key Features

1. **Authentication**: Users can log in using Google, GitHub, or email and password authentication.
2. **Product Management**: Logged-in users can add, update, and delete their own products.
3. **Filtering**: Users can filter products based on customization criteria.
4. **Light and Dark Mode**: The website supports both light and dark modes for user preference.
5. **Responsive Design**: The website is designed to be fully responsive and accessible on all devices.
6. **Slider**: The homepage features a slider showcasing featured products.
7. **Top Products**: The homepage also displays the top 6 products.
8. **Categories**: Users can explore products by category.
9. **Customer Reviews**: The homepage includes customer reviews.
10. **Latest Blog Posts**: The homepage features the latest blog posts.
11. **Newsletter**: Users can subscribe to the newsletter for updates.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for storing data in JSON-like documents.
- [Express.js](https://expressjs.com/): A web application framework for Node.js used for building APIs and web servers.
- [Node.js](https://nodejs.org/): A JavaScript runtime environment that executes JavaScript code outside a web browser.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [DaisyUI](https://daisyui.com/): A component library built on top of Tailwind CSS for building accessible and customizable UI components.
- [Lottie React](https://www.npmjs.com/package/lottie-react): A library for adding Adobe After Effects animations to React projects.
- [React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter): A simple typewriter effect for React components.
- [React Awesome Reveal](https://www.npmjs.com/package/react-awesome-reveal): A library for animating React components when they become visible on the screen.
- [React Tooltip](https://www.npmjs.com/package/react-tooltip): A customizable tooltip component for React applications.
- [Sweet Alert](https://sweetalert2.github.io/): A library for creating beautiful, responsive, and customizable alerts and modals.


---

## Project Setup

### 1. Initial Setup

1. **Create React App**: Initialize your React project using Create React App.
    ```bash
    npx create-react-app ceramics-arena
    ```

2. **Install Dependencies**:
    ```bash
    cd ceramics-arena
    npm install react-router-dom tailwindcss daisyui
    ```

### 2. Frontend Development

1. **Set Up React Router DOM**:
    - Create routing components for different pages such as Home, All Art & Craft Items, Add Craft Item, My Art & Craft List, and Login.
    - Define routes using React Router DOM's `BrowserRouter`, `Route`, and `Switch` components.

2. **Tailwind CSS Setup**:
    - Initialize Tailwind CSS by creating a `tailwind.config.js` file:
        ```bash
        npx tailwindcss init
        ```
    - Customize Tailwind CSS configuration as needed.

3. **DaisyUI Integration**:
    - Integrate DaisyUI with Tailwind CSS:
        ```javascript
        // In your tailwind.config.js
        module.exports = {
          theme: {
            extend: {},
          },
          plugins: [require('daisyui')],
        }
        ```
    - Import DaisyUI styles in your main stylesheet:
        ```css
        /* In your main.css or index.css */
        @import 'tailwindcss/base';
        @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';
        @import 'daisyui/dist/full.css';
        ```

### 3. Backend Development

1. **Database Schema**: Define MongoDB schemas for storing user data, product information, etc.

2. **API Development**: Create RESTful APIs for handling CRUD operations on user data, product listings, etc.
    - Implement routes for user authentication, product management, and other necessary functionalities.

### 4. Additional Features

1. **Slider Integration**: Integrate a slider library like React Slick or Flickity for showcasing featured products or images.

2. **Typewriter Effect**: Implement a typewriter effect using React Simple Typewriter for dynamic text animations.

3. **Animation with Lottie**: Enhance your UI with animations using Lottie React by adding Adobe After Effects animations.

4. **Tooltip Functionality**: Add tooltips to provide additional information to users using React Tooltip.

5. **Alerts with Sweet Alert**: Implement Sweet Alert for displaying alerts and notifications for user actions and system messages.

### 5. Deployment

1. **Deploy Backend**: Deploy your backend server to a platform like Heroku or AWS.

2. **Deploy Frontend**: Deploy your React app to platforms like Netlify, Vercel, or GitHub Pages.

3. **Continuous Integration/Continuous Deployment (CI/CD)**: Set up CI/CD pipelines for automating deployment processes and ensuring smooth deployment workflows.

---


## Usage

- Navigate to the homepage to explore products and other content.
- Log in to add, update, or delete your own products.
- Explore different categories and filter products based on customization criteria.
- Subscribe to the newsletter for updates.

## Contributing

Contributions are welcome! Please create a new branch and submit a pull request for any proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

