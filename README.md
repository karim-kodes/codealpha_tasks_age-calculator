# Age and Event Calculator

## Project Overview
This project is a web-based application that calculates the age of a user in terms of years, months, and days based on their date of birth. It also displays a famous event that occurred in the user's birth year. The application provides a smooth animation for displaying the calculated age and ensures user-friendly input validation.

---

## Features
- **Age Calculation**: Calculates the user's age in years, months, and days.
- **Smooth Animation**: Displays the calculated age with a visually appealing animation.
- **Event Lookup**: Displays a famous event that occurred in the user's birth year.
- **User Input Validation**: Ensures that the date of birth and username inputs are valid.

---

## Technologies Used
- **HTML**: Structure of the web page.
- **CSS**: Styling of the user interface.
- **JavaScript**: Core functionality for calculations, animations, and DOM manipulation.

---

## How It Works
1. **User Input**: The user enters their date of birth (day, month, and year) and their name.
2. **Validation**: The application validates the inputs to ensure they are within acceptable ranges.
3. **Age Calculation**:
   - Calculates the difference between the current date and the provided birth date.
   - Converts the result into years, months, and days.
4. **Animation**: Smoothly animates the numbers from 0 to the calculated values.
5. **Event Display**: If a famous event is associated with the birth year, it is displayed alongside the age.

---

## File Structure
- **index.html**: The main HTML file.
- **styles.css**: The CSS file for styling the application.
- **script.js**: The JavaScript file containing logic for calculations, animations, and user input validation.

---

## Setup and Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/adnaan-fullstack/age-event-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd age-event-calculator
   ```
3. Open `index.html` in your browser.

---

## Example Code for Animation
The age animation is implemented using the `requestAnimationFrame` API for smooth transitions. Below is a snippet:
```javascript
function animateNumbers(currentTime) {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);

  const animatedDays = Math.floor(progress * calculatedDays);
  const animatedMonths = Math.floor(progress * calculatedMonths);
  const animatedYears = Math.floor(progress * calculatedYears);

  lbYears.textContent = animatedYears;
  lbMonths.textContent = animatedMonths;
  lbDays.textContent = animatedDays;

  if (progress < 1) {
    requestAnimationFrame(animateNumbers);
  }
}
```

---

## Validation Logic
- Ensures the day is between 1 and 31.
- Ensures the month is between 1 and 12.
- Ensures the year is between 1900 and the current year.

---

## Future Improvements
- Add support for historical events from a dynamic API.
- Enhance the user interface with more animations and responsive design.
- Include localization support for different languages.

---

## License
This project is open-source and available under the MIT License.

