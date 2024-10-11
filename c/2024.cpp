// OS Assignment: Concurrent Processes in Unix         10/11/2024

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
