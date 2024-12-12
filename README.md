# Tic-Tac-Toe Game

## Overview
This is a simple web-based **Tic-Tac-Toe Game** where two players can compete against each other. The game interface is built using HTML and CSS, and the game logic is implemented in JavaScript.

## Features
- **Player Turns:** Alternates turns between Player X and Player O.
- **Winner Detection:** Automatically detects and announces the winner if a winning pattern is achieved.
- **Reset Button:** Allows players to reset the game at any time.
- **New Game Button:** Starts a new game after a winner is declared.
- **Disabled Boxes:** Prevents players from overwriting a previously selected box.

## Technologies Used
- **HTML:** Structure of the game interface.
- **CSS:** Styling for the game board and messages.
- **JavaScript:** Game logic, winner detection, and interactivity.

## Game Rules
1. Players take turns placing their marks (“X” or “O”) in an empty box.
2. The first player to align three of their marks either horizontally, vertically, or diagonally wins the game.
3. If all boxes are filled without any player aligning three marks, the game ends in a draw.

## File Structure
```
|-- index.html
|-- style.css
|-- app.js
```

## Setup Instructions
1. Download or clone the project to your local machine.
2. Open the `index.html` file in any modern web browser.
3. Start playing the game.

## Code Explanation
### HTML (`index.html`)
- Contains the structure of the game, including the 3x3 grid for the game board and buttons for resetting and starting a new game.

### CSS (`style.css`)
- Styles the game board, buttons, and winner messages.
- Ensures the interface is visually appealing and user-friendly.

### JavaScript (`app.js`)
- Manages the game logic:
  - Tracks player turns.
  - Detects winning patterns based on predefined combinations.
  - Displays the winner or a draw message.
  - Resets or starts a new game as per user actions.

## Functions in `app.js`
1. **resetGame:** Resets the game state and enables all boxes for a new round.
2. **enableBtn:** Enables all game boxes and clears their content.
3. **disableBtn:** Disables all boxes to prevent further interaction after the game ends.
4. **checkWinner:** Checks all possible winning patterns and declares a winner if any pattern is matched.
5. **showWinner:** Displays the winner and disables the game board.

## How to Play
1. Open the game in a browser.
2. Click on any box to place your mark (“X” or “O”).
3. Alternate turns until a player wins or the game ends in a draw.
4. Use the "Reset Game" button to clear the board and play again, or the "New Game" button to start a fresh round after a winner is declared.

## Customization
- **Grid Size:** Modify the HTML to create a larger or smaller grid.
- **Styling:** Update `style.css` to customize colors, fonts, or layouts.
- **Game Rules:** Extend the game logic in `app.js` to include custom rules or new features.

## Screenshot
![image](https://github.com/user-attachments/assets/c950588e-3a51-4085-b8bc-76e6aeb1fc2c)


## License
This project is open-source and free to use under the MIT License.

---
Enjoy playing the game!

