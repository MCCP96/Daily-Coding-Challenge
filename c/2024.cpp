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