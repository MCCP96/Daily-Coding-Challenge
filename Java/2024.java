// Software Project Deliverable 1 - Scrabble          10/18/2024
/* 
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
// will continue tomorrow */

// Software Project Deliverable 1 - Scrabble          10/19/2024
/* 
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

    // track [row,col] of UNCONFIRMED placed tiles
    ArrayList<Object[]> curPlacements = new ArrayList<Object[]>(); // must be Object because [int, String]

    while (!back) {
      // show updated board with placed tiles
      board.displayBoard();
      curPlayer.displayHand();

      // commands
      System.out.println("'<letter> <row> <column>' to place a tile. (ex: 'A 8 H')");
      System.out.println("'Confirm' to play the entered word.");
      System.out.println("'Remove' to remove placed tiles.");
      System.out.println("'Back' to see turn commands again");

      input = scanner.nextLine();
      input = input.toUpperCase();
      inputs = input.split(" ");

      if (inputs.length == 3) {
        // attempting to place a tile
        String tileLetter = inputs[0];

        int row;
        try {
          row = Integer.valueOf(inputs[1]);
        } catch (Exception e) {
          // char input for row
          printError("Row must be an integer\n");
          continue; // restart loop
        }
        String col = inputs[2];

        if (!board.withinBounds(row, col)) {
          // outside bounds of board
          printError("The specified location is outside the bounds of the board");
        } else if (!curPlayer.hasTile(tileLetter)) {
          // player doesn't have tile
          printError("You do not have any " + tileLetter + "s");
        } else if (board.getBoardSpace(row, col).hasTile()) {
          // board already has a tile at location
          printError("The chosen location already has a tile");
        } else if (!tilesAlign(row, col, curPlacements)) {
          // tile does not align with previously placed tile
          printError("The chosen location doesn't align with previous placements");
          printError("Words must be horizontal or vertical, no diagonals\n");
        } else {
          // player is placing a valid tile
          Tile tile = curPlayer.removeTile(tileLetter); // get tile
          board.getBoardSpace(row, col).setTile(tile); // place tile

          printAction("Placed '" + tile.getLetter() + "' at position: [" + row + ", " + col + "]\n");

          // track placement
          Object[] position = { row, col };
          curPlacements.add(position);
        }
      } else if (input.equals("CONFIRM")) {
        // confirming word validity, all tiles are placed

        if (board.validWordPlacement() && isValidWord()) {
          // valid placement and word
          // TODO: Code for updating score

          // lock in placements
          for (Object[] pos : curPlacements) {
            int row = (int) pos[0];
            String col = (String) pos[1];

            board.getBoardSpace(row, col).getTile().placeTile();
          }

          board.displayBoard();
          displayScores();

          return true; // end turn
        } else {
          // invalid placement or word
          printError("Invalid Word");
        }
      } else if (input.equals("REMOVE") || input.equals("BACK")) {
        // return placed tiles to current player's hand
        for (Object[] pos : curPlacements) {
          int row = (int) pos[0]; // placed tile's row
          String col = (String) pos[1]; // placed tile's column

          Tile removedTile = board.getBoardSpace(row, col).removeTile();
          printAction(
              "Returned '" + removedTile.getLetter() + "' to " + curPlayer.getName() + "'s hand");

          curPlayer.addTile(removedTile);
        }
        System.out.print("\n");

        curPlacements.clear();

        if (input.equals("BACK"))
          back = true;
      } else {
        printError("Invalid Command");
      }
    }

    return false; // 'Back' to player turn options
  }
} */

// Software Project Deliverable 1 - Scrabble          10/20/2024
/* 
// A text-based playable version of the game, i.e., players should be able to play the game via the console using the keyboard. One should be able to see the letters they have drawn, place a word (for example using the official notation mentioned in the Wiki link above), pass their turn, and see the resulting state of the board printed in text form. The main challenge of implementing correctly the logic of this game is ensuring that the word placement is legal, i.e., all the words formed after placement should be checked and added to the score. For this milestone we will accept an incomplete implementation of this, as long as you document what is left to be done. Support for blank tiles and premium squares is left for Milestone 3. 

// Also required: the UML modeling of the problem domain (class diagrams with complete variable and method signatures, and sequence diagrams for important scenarios), detailed description of the choice of data structures and relevant operations: you are providing an initial design and implementation for the Model part of the MVC. Do not worry about any GUI yet. 

public class 2024 {
  // ...

  public Boolean play() {

    // player is attempting to place a word
    boolean back = false;

    String userInput;
    String[] inputs;

    // init tile placement tracking
    curPlacements = new ArrayList<ArrayList<Integer>>();

    while (!back) {
      // show updated board with placed tiles
      board.displayBoard();
      curPlayer.displayHand();

      // commands
      System.out.println("'<letter> <row> <column>' to place a tile. (ex: 'A 8 H')");
      System.out.println("'Confirm' to play the entered word.");
      System.out.println("'Remove' to remove placed tiles.");
      System.out.println("'Back' to see turn commands again");

      userInput = scanner.nextLine();
      userInput = userInput.toUpperCase();
      inputs = userInput.split(" ");

      if (inputs.length == 3) {
        // attempting to place a tile
        handleTilePlacement(userInput, inputs);
      } else if (userInput.equals("CONFIRM")) {
        // confirming word validity, all tiles are placed
        back = handleConfirm();
      } else if (userInput.equals("REMOVE") || userInput.equals("BACK")) {
        // return placed tiles to current player's hand
        handleReturnPlacedTiles();
        if (userInput.equals("BACK"))
          back = true;
      } else {
        printError("Invalid Command");
      }
    }

    return false; // 'Back' to player turn options
  }
}

// big refactoring and tile placement validation */

// Software Project - Midterm Study          10/31/2024
/* 
import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyListener;

public class View extends JFrame implements ModelView {
    private static final int SIZE = Model.n; // saved locally for more concise code
    private JButton[][] buttons;
    // private JTextField text;
    private Model model;
    private Controller controller;


    public View() {
        super("BOX!");
        // this.setLayout(new GridLayout(SIZE + 1, SIZE)); // n*n grid
        this.setLayout(new GridLayout(SIZE, SIZE)); // n*n grid

        model = new Model();
        model.addView(this);
        buttons = new JButton[SIZE][SIZE];

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(300, 300);

        // controller = new Controller(model, this);
        controller = new Controller(model);

        // menu bar
        JMenuBar menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");
        JMenuItem saveItem = new JMenuItem("Save");
        saveItem.addActionListener(controller);  // Set action to controller
        fileMenu.add(saveItem);
        menuBar.add(fileMenu);
        this.setJMenuBar(menuBar);

        // grid
        for (int row = 0; row < SIZE; row++) {
            for (int col = 0; col < SIZE; col++) {
                JButton button = new JButton(" ");
                button.setActionCommand(row + " " + col); // [row,col] sent to listener
                button.addActionListener(controller); // trigger listener when clicked
                this.buttons[row][col] = button;
                this.add(button); // add to JFrame
            }
        }

        // Input text field
        // text = new JTextField();
        // text.setActionCommand("enter");
        // text.addActionListener(controller);  // Trigger input processing in controller
        // this.add(text);
        // text.addActionListener(controller);
        // text.addKeyListener((KeyListener) controller);

        this.setVisible(true);
    }

    // public String getText() {
    //      return text.getText();
    // }

    @Override
    public void handleMagicSquareStatusUpdate(Event e) {
        int row = e.getRow();
        int col = e.getCol();
        int num = e.getNum();
        this.buttons[row][col].setText(String.valueOf(num));

        if (e.status == Model.Status.UNDECIDED) return; // continue playing

        // game over
        if (e.status == Model.Status.WIN) {
            JOptionPane.showMessageDialog(this, "WIN");
        } else {
            JOptionPane.showMessageDialog(this, "LOSE");
        }

        int replay = (int) JOptionPane.showConfirmDialog(this, "Restart puzzle?", "", JOptionPane.YES_NO_OPTION);

        if (replay == 0) {
            // YES selected, reset game
            model.resetGame();

            for (JButton[] buttonRow : buttons) {
                for (JButton btn : buttonRow) {
                    btn.setText(" "); // empty button text
                }
            }
        }
    }

    public static void main(String[] args) {
        new View();
    }
}

// Happy Halloween 🎃 */


// Study: Software Design Project         12/10/2024

// You have received a sorting application code that presently implements sorting algorithms directly into the Sorter class. This application sorts an array using diverse algorithms based on user preference. Users create an array containing elements to sort and invoke the sort method, specifying a preferred sorting strategy. For instance, invoking sorter.sort(arrayToSort, "bubble") directs the code to call the bubbleSort method, and choosing "insertion" triggers the insertionSort method. The focus here lies in the application's logic, disregarding the graphical interface. Below is the minimal code handling this logic:

// As the variety of sorting strategies within the Sorter class grows, maintaining a single method handling all strategies becomes unmanageable. To address this, the code needs refactoring using the Strategy Pattern. Each sorting strategy will be encapsulated within its own class.

// UML class diagram outlining the revised design.
// Complete code representing the revised design.
// Provide a couple of unit tests, one for each sorting strategy. You can use either JUnit 1.3 or 1.4 syntax

// STARTER CODE:
public class OLDSorter {
  // Bubble Sort implementation
  public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
      for (int j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1] int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  // Insertion Sort implementation
  public void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
      int key = arr[i];
      int j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }

  public void sort(int[] arr, String type) {
    if (type.equals("bubble")) {
      this.bubbleSort(arr);
    } else if (type.equals("insertion")) {
      this.insertionSort(arr);
    }
  }

  public static void main(String[] args) {
    int[] arrayToSort = { 64, 25, 12, 22, 11 };
    Sorter sorter = new Sorter();
    // Sorting using Bubble Sort
    sorter.sort(arrayToSort, "bubble");
    // Sorting using Insertion Sort
    int[] arrayToSortAgain = { 64, 25, 12, 22, 11 }; // Resetting the array
    sorter.sort(arrayToSortAgain, "insertion");
  }
}

// IMPLEMENTED STRATEGY PATTERN:
public class Sorter {
  private Strategy strategy;

  public void setStrategy(Strategy strategy) {
    this.strategy = strategy;
  }

  public int[] sort(int[] arr) {
    return strategy.sort(arr);
  }
}

public interface Strategy {
  public int[] sort(int[] arr);
}

public class BubbleSort implements Strategy {
  public int[] sort(int[] arr) {
    int n = arr.length;

    for (int i = 0; i < n - 1; i++) {
      for (int j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1] int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
}

public class InsertionSort implements Strategy {
  public int[] sort(int[] arr) {
    int n = arr.length;

    for (int i = 1; i < n; ++i) {
      int key = arr[i];
      int j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }

}

public static void main(String[] args) {
  int[] arrayToSort1 = { 64, 25, 12, 22, 11 };

  Sorter sorter1 = new Sorter();
  sorter1.setStrategy(new BubbleSort());
  sorter1.sort(arrayToSort1);

  int[] arrayToSort2 = { 3, 4, 1, 2, 5 };

  Sorter sorter2 = new Sorter();
  sorter2.setStrategy(new InsertionSort());
  sorter2.sort(arrayToSort2);
}

public class SorterTest {
  @Test
  public void testBubbleSort() {
    int[] arrayToSort1 = { 64, 25, 12, 22, 11 };

    Sorter sorter1 = new Sorter();
    sorter1.setStrategy(new BubbleSort());

    int[] expectedResult = { 11, 12, 22, 25, 64 };
    Assert.assertArrayEquals(expectedResult, sorter1.sort(arrayToSort1));
  }
}

// final today, resuming advent of code tomorrow