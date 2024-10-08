let parsedObject; 
  parsedObject = {
  "questions": [
    {
      "prompt": "How were the pointers helpful in testing the Goldbach conjecture code?",
      "answer": [
        0
      ],
      "distractors": [
        "The pointers are used to modify variables in the calling code.",
        "The pointers are used to print out the result.",
        "The pointers are used to share the `number` variable between `getUserInput` and `printConjResult` functions.",
        "The pointers are used to find if the number is prime or not."
      ],
      "explainations": [
        "A is correct. The `getUserInput` and `nextPrimeNumber` functions takes a pointer as an argument and changes the variable in the calling function to get a valid input or the next prime number.",
        "B is incorrect. The result is printed according to the return value of `testGoldbach` function, which is a boolean value.",
        "C is incorrect. After the user input is validated, the `number` variable is passed by value to the `printConjResult` function.",
        "D is incorrect. The `isPrime` function did not use any pointers."
      ]
    }
  ]
};