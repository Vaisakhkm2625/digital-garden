---
{"dg-publish":true,"permalink":"/fleeting-notes/computing-and-design-assignment-1-mips-vaisakh-k-m/"}
---


# BITS Pilani -  Computing and Design Course 
## Assignment - 1

> Submitted by: Vaisakh K M -  202117b3543

### Question

Create a MIPS program that can obtain two different numbers from a user and perform the arithmetic operations of addition, subtraction and multiplication on those two numbers.

Please ensure the following:
- Print statements to ask you Bits ID and your name
- Print statements to ask the user to enter the two different number
- Store the two numbers in different registers and print the ‘menu’ of arithmetic instructions to the user
- Based on the choice made by the user, create branch structures to perform the commands and print the result
- Exit the program

### MIPS Code 
```python

.data
    newline: .asciiz "\n"
    prompt_id: .asciiz "Enter your BITS ID: "
    prompt_name: .asciiz "Enter your Name: "
    prompt_num1: .asciiz "Enter the first number: "
    prompt_num2: .asciiz "Enter the second number: "
    menu: .asciiz "\nMenu:\n1. Addition\n2. Subtraction\n3. Multiplication\nEnter your choice: "
    result_msg: .asciiz "Result: "
    invalid_msg: .asciiz "Invalid choice!\n"
    user_id: .space 20  # Space to store user ID
    user_name: .space 30  # Space to store user name

.text
.globl main

main:
    # Prompt and read BITS ID
    li $v0, 4
    la $a0, prompt_id
    syscall

    li $v0, 8
    la $a0, user_id
    li $a1, 20
    syscall

    # Prompt and read Name
    li $v0, 4
    la $a0, prompt_name
    syscall

    li $v0, 8
    la $a0, user_name
    li $a1, 30
    syscall

    # Prompt for first number
    li $v0, 4
    la $a0, prompt_num1
    syscall

    li $v0, 5  # Read integer
    syscall
    move $t0, $v0  # Store in $t0

    # Prompt for second number
    li $v0, 4
    la $a0, prompt_num2
    syscall

    li $v0, 5  # Read integer
    syscall
    move $t1, $v0  # Store in $t1

    # Display menu
    li $v0, 4
    la $a0, menu
    syscall

    # Read user choice
    li $v0, 5
    syscall
    move $t2, $v0  # Store user choice in $t2

    # Perform operation based on choice
    beq $t2, 1, addition
    beq $t2, 2, subtraction
    beq $t2, 3, multiplication
    j invalid_choice

addition:
    add $t3, $t0, $t1
    j print_result

subtraction:
    sub $t3, $t0, $t1
    j print_result

multiplication:
    mul $t3, $t0, $t1
    j print_result

invalid_choice:
    li $v0, 4
    la $a0, invalid_msg
    syscall
    j exit

print_result:
    li $v0, 4
    la $a0, result_msg
    syscall

    li $v0, 1  # Print integer
    move $a0, $t3
    syscall

    li $v0, 4
    la $a0, newline
    syscall

exit:
    li $v0, 10  # Exit
    syscall

```


![Pasted image 20250330221850.png|500](/img/user/img/Pasted%20image%2020250330221850.png)

### Output
#### Addition

![Pasted image 20250330222123.png|500](/img/user/img/Pasted%20image%2020250330222123.png)
#### Subtraction

![Pasted image 20250330223307.png|500](/img/user/img/Pasted%20image%2020250330223307.png)

#### Multiplication 
![Pasted image 20250330222333.png|500](/img/user/img/Pasted%20image%2020250330222333.png)

### Invalid choice

![Pasted image 20250330223413.png|500](/img/user/img/Pasted%20image%2020250330223413.png)


