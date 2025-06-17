# Bus Seat Selector

A simple web application for selecting seats on a bus.

## Features

- Displays available bus seats.
- Allows users to select and deselect seats.
- Visual distinction for selected seats.
- Light and dark theme switching.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

## How to Use

1.  **Clone or download the repository.**
2.  **Open the `index.html` file in your web browser.**
3.  **Select Seats:** Click on any available seat to select it. The seat will change color to indicate it's selected.
4.  **Deselect Seats:** Click on a selected seat again to deselect it.
5.  **Switch Theme:** Click on the moon/sun icon at the top of the page to toggle between light and dark themes.

## Structure

-   `index.html`: Contains the main HTML structure of the web page, including the layout for the seats and the theme switcher button.
-   `style.css`: Contains all the CSS rules for styling the application, including the appearance of seats (available, selected), and overall page layout.
-   `script.js`: Handles the dynamic aspects of the application. This includes:
    -   Generating the bus seats dynamically when the page loads.
    -   Managing seat selection and deselection logic.
    -   Implementing the light and dark theme switching functionality.
-   `README.md`: This file, providing an overview and guide for the project.
-   `package.json` and `package-lock.json`: These files are typically used for managing project dependencies with Node.js and npm. While present, this project primarily uses Bootstrap via a CDN, so these files might not be actively used for dependency management in the current setup.
