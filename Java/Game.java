// Software Project Deliverable 1 - Scrabble          10/18/2024

// A text-based playable version of the game, i.e., players should be able to play the game via the console using the keyboard. One should be able to see the letters they have drawn, place a word (for example using the official notation mentioned in the Wiki link above), pass their turn, and see the resulting state of the board printed in text form. The main challenge of implementing correctly the logic of this game is ensuring that the word placement is legal, i.e., all the words formed after placement should be checked and added to the score. For this milestone we will accept an incomplete implementation of this, as long as you document what is left to be done. Support for blank tiles and premium squares is left for Milestone 3. 

// Also required: the UML modeling of the problem domain (class diagrams with complete variable and method signatures, and sequence diagrams for important scenarios), detailed description of the choice of data structures and relevant operations: you are providing an initial design and implementation for the Model part of the MVC. Do not worry about any GUI yet. 

import java.util.*;

public class Game {
  // ...

  public Boolean play() {
    // player is attempting to place a word
    boolean back = false;

    String input;
    String[] inputs;

    ArrayList<Tile> curWord = new ArrayList<Tile>();
    // TODO: temp board to show changes?
    // else add to main board and remove if invalid

    while (!back) {
      board.displayBoard();
      // int potentialScore = some code
      // System.out.println("Potential Score: " + potenialScore);

      // commands
      System.out.println("'<tile_letter> <row> <column>' to place a tile. ex: A 8 H");
      System.out.println("'Confirm' to play the entered word.");
      System.out.println("'Remove' to remove placed tiles.");
      System.out.println("'Back' to see turn commands again");

      input = scanner.nextLine();
      input = input.toUpperCase();
      inputs = input.split(" ");

      if (inputs.length == 3) {
        // attempting to place a tile
        String tileLetter = inputs[0];
        int row = Integer.valueOf(inputs[1]);
        String col = inputs[2];

        if (row < 1 || row > 15 || ((int) col.charAt(0)) < 65 || ((int) col.charAt(0)) > 79) {
          // outside bounds of board ('A' == 65, 'O' == 79)
          System.out.println("The specified location is outside the bounds of the board");
        } else if (!players.get(currentPlayer).hasTile(tileLetter)) {
          // player doesn't have tile
          System.out.println("You do not have any " + tileLetter + "s");
        } else if (!board.validLetterPlacement(row, col)) {
          // board already has a tile at location
          System.out.println("The chosen location already has a token");
        } else {
          // player has tile and location is valid
          // add to temp current word
          curWord.add(players.get(currentPlayer).removeTile(tileLetter));
        }

      } else if (input.equals("CONFIRM")) {
        // confirming word validity, all tiles are placed

        if (board.validWordPlacement() && isValidWord()) {
          // valid placement and word
          // TODO: Code for locking in placement and updating score

          board.displayBoard();
          displayScores();

          return true;
        } else {
          // invalid placement or word
          System.out.println("Invalid Word");
        }
      } else if (input.equals("REMOVE")) {
        // TODO: return placed tiles to player's hand
      } else if (input.equals("BACK")) {
        // TODO: return placed tiles to player's hand
        back = true;
      } else {
        System.out.println("Invalid Command");
      }
    }

    return false; // 'Back' to player turn options
  }

  // ...
}

// some work done on an assignment for software project class
// many other methods were implemented in other classes
// will continue tomorrow