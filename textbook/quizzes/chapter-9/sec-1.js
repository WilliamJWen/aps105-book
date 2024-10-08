let parsedObject; 
  parsedObject = {
  "questions": [
    {
      "prompt": "Which of the following statements accurately describes the advantages of using a 2D array compared to a 1D array in programming?",
      "answer": [
        0
      ],
      "distractors": [
        "A 2D array allows for easier representation of tabular data or matrices.",
        "A 2D array provides more efficient memory utilization compared to a 1D array.",
        "A 2D array allows for direct access to individual elements without the need for nested loops.",
        "A 2D array simplifies the process of sorting and searching for specific values."
      ],
      "explainations": [
        "A is correct. A 2D array is specifically designed to represent tabular data or matrices in programming. It provides a convenient structure for organizing data in rows and columns, similar to a grid or table. This makes it easier to visualize and manipulate the data, as each element in the 2D array corresponds to a specific cell in the tabular structure.",
        "B is incorrect. Because there is no inherent advantage of a 2D array in terms of memory utilization compared to a 1D array. Both arrays occupy memory based on the number of elements they hold.",
        "C is incorrect. Because accessing individual elements in a 2D array still requires specifying the row and column indices, which may require nested loops or direct indexing.",
        "D is incorrect. Because a 2D array does not simplify the process of sorting and searching for specific values. The algorithms for sorting and searching remain the same regardless of whether the data is stored in a 1D or 2D array."
      ]
    },
    {
      "prompt": "Which of the following correctly declares a 2D array (3 rows and 2 columns) in C++?",
      "answer": [
        0,
        3
      ],
      "distractors": [
        "`int arr[][2] = {1, 2, 3, 4, 5, 6};`",
        "`int arr[3][] = {1, 2, 3, 4, 5, 6};`",
        "`int arr[3][2] = {{1, 2, 3}, {4, 5, 6}};`",
        "`int arr[3][2] = {{1, 2}, {3, 4}, {5, 6}};`"
      ],
      "explainations": [
        "A is correct. The compiler will fill the array row by row, filling 2 columns in each row. This will result in a 3 row and 2 column 2D array.",
        "B is incorrect. Since the array is filled row by row, the number of columns is required to know how many elements to put in each row.",
        "C is incorrect. The nested (inside) braces are for defining each row, not column.",
        "D is correct. This is a basic way for declaring a 2D array with 3 rows and 2 columns."
      ]
    },
    {
      "prompt": "Which of the following correctly accesses the second element in the third row of the following array?\n`int arr[3][2] = {{1, 2}, {3, 4}, {5, 6}};`\n",
      "answer": [
        0,
        1,
        2
      ],
      "distractors": [
        "`arr[2][1]`",
        "`*(*(arr + 2) + 1)`",
        "`*(arr[2] + 1)`",
        "`*(arr + 2) + 1`"
      ],
      "explainations": [
        "A is correct. This is the basic way to access the second element in the third row of the array.",
        "B is correct. Using pointer arithmetic to access the second element in the third row of the array, the nested braces `*(arr + 2)` gets the address of the first element in the third row, and the second element at that row is accessed by adding 1 to the address `*(arr + 2) + 1` and dereferencing it `*(*(arr + 2) + 1)`.",
        "C is correct. `*(arr + 2)` is the same as `arr[2]`, which is the address of the first element in the third row of the array. The second element at that row is accessed by adding 1 to the address and dereferencing it.",
        "D is incorrect. `*(arr + 2)` is the same as arr[2], which stores the address of the first element in the third row. Adding 1 to it gets the address of the second element in the third row."
      ]
    }
  ]
};