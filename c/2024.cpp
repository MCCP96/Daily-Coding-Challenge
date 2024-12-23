// OS Assignment: Concurrent Processes in Unix         10/11/2024
/*
// Run two concurrent processes in C/C++ under Linux

// Using the fork system call, create two independent processes, which run indefinitely. Process 1 will run forever and will display, on screen “I am Process 1”. Process 2 will display, on screen “I am Process 2”. Use delay functions to slower the display speed.

// To finish the program, use the kill command (man pages), find the pid of both processes (ps) and kill them.

#include <stdio.h>
#include <unistd.h>

int main()
{
    pid_t pid = fork();
    if(pid > 0){
      // parent
      while(1){
        printf("I am Process 1\n");
        sleep(2);
      }
    }
    else if(pid == 0){
      // child
      while(1){
        printf("I am Process 2\n");
        sleep(2);
      }
    }
    _exit(0);
}
*/

// OS Assignment: Concurrent Processes in Unix - 2         10/12/2024
/*
// Extend the Processes. Now it will display the same message on screen as in 1., and will generate a random number between 0 and 10 using the rand() function in C/C++. If the value is larger than 5, it will now display “High value”. If it is equal or lower than 5, it will display “Low value”. Process 2 will start only if a random value equal to 9 is generated by Process 1. Process 2 will display “I am process 2” in an infinite loop. Use the exec system call to launch Process 2 (i.e., Process 2 should be a different program/executable).

// Use delay functions to slower the display speed.

// To finish the program, use the kill command (man pages), find the pid of both processes (ps) and kill them.

// process1.cpp:

#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main()
{
  while(1){
    int n = rand() % 11; // 0-10
    // printf("%d - ",n); // Troubleshooting

    if(n>5){
      printf("High Value\n");
    }
    else{
      printf("Low Value\n");
    }

    if(n==9){
      execl("./process2", "process2", (char*) NULL);
    }

    sleep(2);
  }
  _exit(0);
}

// process2.cpp:

#include <stdio.h>
#include <unistd.h>

int main()
{
  while(1){
    printf("I am Process 2\n");
    sleep(2);
  }
  _exit(0);
}
*/

// OS Assignment: Concurrent Processes in Unix - 3         10/13/2024
/*
// Extend the processes above once more. Use the wait system call. Process 1 starts as in 2, and when Process 2 starts, it waits for it. Process 2 displays the message 10 times and exits. When this happens, Process 1 should end too.

// process1.cpp:

#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/wait.h>

int main()
{
  pid_t pid;

  while(1){
      int n = rand() % 11; // 0-10
      // printf("%d - ",n); // Troubleshooting

      if(n > 5){
          printf("High Value\n");
      }
      else{
          printf("Low Value\n");
      }

      if(n == 9){
          pid = fork(); // Process 2

          if (pid == 0) {
              // child (Process 2)
              execl("./process2", "process2", (char*) NULL);
              exit(1);
          } else {
              // parent (Process 1)
              wait(NULL);
              exit(0);
          }
      }

      sleep(1);
  }
  _exit(0);
}

// process2.cpp:

#include <stdio.h>
#include <unistd.h>

int main()
{
  int i=0;

  while(i<10){
    printf("I am Process 2\n");
    i++;
    sleep(1);
  }

  return 0;
}

// pretty sure I didn't do yesterday's correctly
// I think I was supposed to keep the fork() call similar to the structure here

// also think it's supposed to be 1-9 instead of 0-10
 */

// OS Assignment: Concurrent Processes in Unix - 4         10/14/2024
/*
// Extend the processes above once more. They should now share memory. The primary functions are listed in the book and course materials. Using shmget, shmctl, shmat, and shmdt, add a common variable shared between the two processes. The variable contains the random number generated. Process 2 starts only when the random value is 9. Each of the processes should now react to the value of the shared variable, and display a message identifying themselves and the random number in shared memory. Both processes finish when the value generated is 0.

// process1.cpp:

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <sys/wait.h>
#include <time.h>

int main()
{
  srand(time(NULL)); // fix rand
  pid_t pid;

  // shared memory
  key_t key = ftok("shmfile",65);
  int shmid = shmget(key, sizeof(int), 0666|IPC_CREAT);
  int *shared_var = (int*) shmat(shmid, (void*)0, 0);

  while(1){
    int n = rand() % 11; // 0-10
    *shared_var = n;

    printf("Process 1: %d\n", n);

    if(n == 9){
      pid = fork(); // create Process 2

      if (pid == 0) {
        // child (Process 2)
        execl("./process2", "process2", NULL);
      } else {
        // parent (Process 1)
        // wait(NULL); // wait for Process 2 to finish
      }
    }

    if (n == 0) {
      printf("Terminating.\n");
      break;
    }

    sleep(1);
  }

  // clean-up
  shmdt(shared_var);
  shmctl(shmid, IPC_RMID, NULL);

  _exit(0);
}

// process2.cpp:

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/ipc.h>
#include <sys/shm.h>

int main()
{
  // shared memory
  key_t key = ftok("shmfile",65);
  int shmid = shmget(key, sizeof(int), 0666|IPC_CREAT);
  int *shared_var = (int*) shmat(shmid, (void*)0, 0);

  while(1){
    printf("Process 2: %d\n", *shared_var);

    if (*shared_var == 0) {
      printf("Terminating.\n");
      break;
    }

    sleep(1);
  }

  // clean-up
  shmdt(shared_var);
  return 0;
} */

// OS Assignment 2: Concurrent Processes in Unix - Step 5         10/30/2024
/*
// Extend the processes above once more. They should now protect concurrent access to the shared memory position. On top of the shm instructions, you should protect the shared memory access using semaphores. Use semget, semop, semctl to protect the shared memory section.

// As before, you now have a common variable shared between the two processes, and it is protected from concurrent access using semaphores. The behavior is as in 4.

// Information about message passing is on Chapter 14 of the Linux reference book, and in the online materials posted.

#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <time.h>
#include <sys/wait.h>
#include <sys/shm.h>
#include <sys/sem.h>

#include <iostream>
#include <fstream>
#include <cstring>
#include <string>

using namespace std;
ofstream output;

int main()
{
  remove("Part_II_Outputs_101215573_101243509.txt"); // delete previous log file

  srand(time(NULL)); // fix rand
  pid_t pid;

  // setup shared memory
  key_t shm_key = ftok("shmfile", 65); // generate unique key
  int shmid = shmget(shm_key, sizeof(int), 0666 | IPC_CREAT); // identifier of shared memory (int shmget(key_t key, size_t size, int shmflg))
  int *shared_var = (int*) shmat(shmid, (void*)0, 0); // reference shared memory location

  // setup semaphores protecting shared memory access
  key_t sem_key = ftok("semfile", 65); // generate unique key
  int semid = semget(sem_key, 1, 0666 | IPC_CREAT);  // identifier of semaphore set (int semget(key_t key, int nsems, int semflg));
  semctl(semid, 0, SETVAL, 1); // int semctl (int __semid, int __semnum, int __cmd, ...)

  while(1){
    // setup output file writing (Part_II_Outputs_101215573_101243509.txt)
    // file must be opened/closed on every iteration to allow Process 2 to print correctly
    output.open("Part_II_Outputs_101215573_101243509.txt", ios::app); // open file in append mode

    int n = rand() % 11; // 0-10

    struct sembuf sop;
    sop.sem_num = 0;
    sop.sem_op = -1; // lock shared memory
    sop.sem_flg = 0;
    semop(semid, &sop, 1);

    *shared_var = n; // store in shared memory

    sop.sem_op = 1; // unlock shared memory
    semop(semid, &sop, 1);

    printf("%d - ",n);
    string str = to_string(n) + " - "; // output file text

    if(n > 5){
      printf("I am Process 1 (High Value)\n");
      str += "I am Process 1 (High Value)\n";
    }
    else{
      printf("I am Process 1 (Low Value)\n");
      str += "I am Process 1 (Low Value)\n";
    }

    if (n == 0) {
      printf("Terminating Process 1.\n");  // value == 0
      str += "Terminating Process 1.\n";
      output << str;
      output.close(); // close output file
      break;
    }

    if(n == 9){
      pid = fork(); // start process 2

      if (pid == 0) {
        // child (process 2)
        execl("./Part_II_process2_101215573_101243509", "Part_II_process2_101215573_101243509", (char*) NULL);
      }
      else {
        // parent (process 1) no longer waits for child, now running concurrently (step 4)
        // wait(0); // wait for process 2 to finish
      }
    }

    output << str; // store loop execution in output file
    output.close(); // close output file
    sleep(1); // delay
  }

  // clean-up
  shmdt(shared_var); // detach shared memory
  shmctl(shmid, IPC_RMID, NULL); // destroy shared memory
  semctl(semid, 0, IPC_RMID); // remove semaphore set

  _exit(0);
}

// process2 not shown here */

// OS Assignment 3: Concurrent Processes in Unix - Part 2A         11/27/2024
/*
// Problem description:
// There are five Teaching Assistants (TA) assigned to mark exams. They meet to mark the pile of exams, written on paper. They go to a laboratory, and sit around a circular table, on which we deposit the pile of exams. To mark, they will use the system you must develop in this assignment, which will grant access to a database of students to decide which student to mark. Each TA must mark all the exercises until they reach the last student in the list.
// The TAs have two tasks at hand: to pick a student from the database, mark one exercise, and save the mark for that student in an individual file. Each TA has their own file.
// The concurrent application will allow only 2 TAs to  mark at the same time. To do this, we will number the TAs using numbers from 1-5 and use five semaphores to access the database. The database is accessed using the following protocol: each TA needs to lock their own semaphore (TA j  locks semaphore j)  and the next in the list (semaphore (j+1) mod 5; i.e., TA 5 uses semaphores 5 and 1). When both are acquired by TA j, they can start marking. To do so, they pick the next student in the list (details later).
// When they finished choosing the next student, the TA releases the two locks and starts marking. When marking of the exercise is completed, the TA tries to access the database again (using the protocol above).

// Part 2.a) [1 mark]
// Write a solution to the problem written in C/C++ running under Linux.
// Your solution must have 5 processes running concurrently (one per TA). You should use five semaphores as discussed above. Each of the processes should inform what they are doing on screen (marking, accessing the database). At this point do not worry for concurrency issues.
// The database is a text file, containing student numbers of 4 digits long (i.e., 0001-9999; 0000 does not exist and Student 9999 is the “end of file” marker). The database contains 20 lines. With your program you must provide a “class list of students” file, built as follows: create a text file, including 20 lines (each representing a student), each line which will be a number of 4 digits from 0001 to 9999. The text file used for the program will have 20 lines with 4 numbers on each line; IMPORTANT: the last number should be 9999. Each TA starts marking the first student in the list. When the TA accesses the database, picks up the next number, saves it in a local variable, and waits between 1 and 4 seconds at random (use random numbers and a delay function). It then releases the semaphores so other TAs can access the database.
// Once the TA knows which student to mark, (s)he starts marking. That is, once the TA has a student number, saves the student number in a local file (called TAj.txt, with j=1...5), and a random mark between 0 and 10. The marking process is represented by adding a random delay between 1 and 10 seconds in the process.
// When a TA reaches number 9999, they start all over again. The system finishes when each TA has gone through the whole list of students 3 times.

// HINT: work incrementally. Start with a program with 2 TAs and 2 semaphores and build it up. You can also use extra processes for "other activities" (i.e., starting the process or ending it).

int main() {
    string db = "database.txt";
    ofstream db_output(db);
    srand(time(NULL));

    // class list of students
    for (int i = 0; i < NUM_STUDENTS; i++) {
        db_output << (rand() % 9998 + 1) << endl;  // 1-9999
    }
    db_output << "9999" << endl;  // end-of-file
    db_output.close();

    // setup semaphores
    key_t sem_key = ftok("semfile", 65);
    int semid = semget(sem_key, NUM_TAS, 0666 | IPC_CREAT);

    for (int i = 0; i < NUM_TAS; i++) {
        semctl(semid, i, SETVAL, 1);
    }

    // fork TAs
    for (int i = 0; i < NUM_TAS; i++) {
        pid_t pid = fork();

        if (pid == 0) {
            // child
            TAGrading(i + 1, semid, db);
            exit(0);
        }
    }

    // wait for TAs to finish
    while (wait(NULL) > 0);

    // clean up semaphores
    semctl(semid, 0, IPC_RMID, 0);
    cout << "All TA processes completed. Exiting." << endl;

    return 0;
}

// TAGrading not shown here */

// OS Assignment 3: Concurrent Processes in Unix - Part 2B         11/28/2024
/*
// Part 2.b)
// Convert Part 2.a) into a Semaphore-based solution with shared memory. Use semaphores for process coordination. Other Linux system calls may be used for process creation, termination, creation and deletion of shared memory etc.
// Your solution must have 5 processes running concurrently, and shared memory. Your solution should use a shared array with the list of students. When the program first starts, you should load the list of students into shared memory. DO NOT WORRY ABOUT DEADLOCK/LIVELOCK. Each of the processes should inform what they are doing on screen, and work as in Part 2.a., but using shared memory instead of files.

int main()
{
  srand(time(NULL));

  // shared memory
  key_t shm_key = ftok("shmfile", 75);
  int shmid = shmget(shm_key, (NUM_STUDENTS + 1) * sizeof(int), IPC_CREAT | 0666);
  int *shared_students = (int *)shmat(shmid, NULL, 0);

  // init list of students
  for (int i = 0; i < NUM_STUDENTS; i++)
  {
    shared_students[i] = rand() % 9998 + 1; // 1-9998
  }
  shared_students[NUM_STUDENTS] = 9999; // End-of-file marker

  // setup semaphores
  key_t sem_key = ftok("semfile", 65);
  int semid = semget(sem_key, NUM_TAS, 0666 | IPC_CREAT);
  for (int i = 0; i < NUM_TAS; i++)
  {
    semctl(semid, i, SETVAL, 1);
  }

  // fork
  for (int i = 0; i < NUM_TAS; i++)
  {
    pid_t pid = fork();

    if (pid == 0)
    {
      // child
      int student_index = 0;
      TAGrading(i + 1, semid, shared_students, student_index);
      exit(0);
    }
  }

  // wait for TAs to finish
  while (wait(NULL) > 0)
    ;

  // clean up
  semctl(semid, 0, IPC_RMID, 0);
  shmdt(shared_students);
  shmctl(shmid, IPC_RMID, NULL);

  return 0;
}

// only grades 3-4 students, supposed to do 20 */

// OS Assignment 3: Concurrent Processes in Unix - Part 2C         11/29/2024

// Part 2.c)
// Modify the program above and use a protocol to acquire/release the semaphores: if you acquire semaphore j and then j+1 is not available, release both so other process can run.
// Your solution must have 5 processes running concurrently, and shared memory. Your solution should use a shared array with the list of students. When the program first starts, you should load the list of students into shared memory. DO NOT WORRY ABOUT DEADLOCK/LIVELOCK. Each of the processes should inform what they are doing on screen, and work as in Part 2.a., but using shared memory instead of files.

void TAGrading(int TA_ID, int semid, int *shared_student_data)
{
  ofstream file("TA" + to_string(TA_ID) + ".txt", ios::app); // TA<n>.txt
  srand(time(NULL) + TA_ID);                                 // ensure random

  while (true)
  {
    semaphore_lock(semid, TA_ID - 1); // acquire semaphore (j)

    // attempt to acquire next semaphore (j+1)
    int next_semaphore = TA_ID % NUM_TAS;
    if (!try_semaphore_lock(semid, next_semaphore))
    {
      semaphore_unlock(semid, TA_ID - 1); // fail, release semaphore
      continue;                           // TA cannot grade
    }

    // get student
    int student_idx = shared_student_data[0];

    if (student_idx >= NUM_STUDENTS || shared_student_data[student_idx + 1] == 9999)
    {
      // end-of-file reached
      semaphore_unlock(semid, TA_ID - 1);
      semaphore_unlock(semid, next_semaphore);
      break;
    }

    int student_id = shared_student_data[student_idx + 1];
    shared_student_data[0]++; // ensure student is not graded twice

    // grade student
    sleep(1 + rand() % (4 - 1 + 1)); // choosing student process

    int mark = rand() % 11; // 0-10 grade
    file << "Student ID: " << student_id << ", Mark: " << mark << endl;

    sleep(1 + rand() % (10 - 1 + 1)); // marking process
    printf("TA%u - MARKED: %d\n", TA_ID, student_id);

    semaphore_unlock(semid, TA_ID - 1); // unlock semaphore
    semaphore_unlock(semid, next_semaphore);
  }

  file.close();
}

// Deadlock(able) Dining-Philosopher Problem