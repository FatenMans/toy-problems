/*
==========================================
Frontend Skills Assessment
Author: Fares
==========================================
Edit only inside each TODO section.
==========================================
*/

// ===============================
// Problem 1: Reverse a string
// ===============================
function reverseString(str) {
  // TODO
  // input exemple: hello
  // output exemple: olleh
  return
}

// ===============================
// Problem 2: Find max number
// ===============================
function findMax(arr) {
  // TODO
  // input exemple: [3, 9, 2, 8]
  // output exemple: 9
  return
}

// ===============================
// Problem 3: Count vowels
// ===============================
function countVowels(str) {
  // TODO
  // input exemple: "OpenAI"
  // output exemple: 4
  return
}

// ===============================
// Problem 4: Capitalize words
// ===============================
function capitalizeWords(sentence) {
  // TODO
  // input exemple: "hello world"
  // output exemple: "Hello World"
  return
}

// ===============================
// Problem 5: Remove duplicates
// ===============================
function removeDuplicates(arr) {
  // TODO
  // input exemple: [1,1,2,3,3]
  // output exemple: [1,2,3]
  return
}

// ===============================
// Problem 6: Sum of numbers
// ===============================
function sumArray(arr) {
  // TODO
  // input exemple: [1,2,3,4]
  // output exemple: 10
  return
}

// ===============================
// Problem 7: FizzBuzz
// ===============================
function fizzBuzz(n) {
  // TODO
  // input exemple: 5
  // output exemple: [1,2,"Fizz",4,"Buzz"]
  return
}

// ===============================
// Problem 8: Palindrome Check
// ===============================
function isPalindrome(str) {
  // TODO
  // input exemple: "RaceCar"
  // output exemple: true
  return
}

// ===============================
// Problem 9: Find factorial
// ===============================
function factorial(n) {
  // TODO
  // input exemple: 5
  // output exemple: 120
  return
}

// ===============================
// Problem 10: Sort numbers ascending
// ===============================
function sortNumbers(arr) {
  // TODO
  // input exemple: [3,1,2]
  // output exemple: [1,2,3]
  return
}

// ===============================
// Problem 11: Fetch fake data (async)
// ===============================
async function fetchFakeUser() {
  // TODO
  // input exemple: no input
  // output exemple: "Leanne Graham" (or any valid name)
  return
}

// ===============================
// Problem 12: DOM Manipulation
// ===============================
function highlightTitle() {
  // TODO
  // input exemple: no input
  // output exemple: "Title turns green and underlined"
  return
}

// ===============================
// Problem 13: Filter even numbers
// ===============================
function filterEvenNumbers(arr) {
  // TODO
  // input exemple: [1,2,3,4,5]
  // output exemple: [2,4]
  return
}

// ===============================
// Problem 14: Merge two arrays and sort
// ===============================
function mergeAndSort(arr1, arr2) {
  // TODO
  // input exemple: [3,1],[2,4]
  // output exemple: [1,2,3,4]
  return
}

// ===============================
// Problem 15: Fetch and render posts (async + DOM)
// ===============================
async function fetchAndRenderPosts() {
  // TODO
  // input exemple: no input
  // output exemple: 3 posts rendered on the page
  return
}

// ===============================
// Problem 16: Find missing number in sequence
// ===============================
function findMissingNumber(arr) {
  // TODO
  // input exemple: [1,2,4,5]
  // output exemple: 3
  return
}

// ===============================
// Problem 17: Flatten nested array
// ===============================
function flattenArray(arr) {
  // TODO
  // input exemple: [1,[2,[3,4]],5]
  // output exemple: [1,2,3,4,5]
  return
}

/* ===============================
   Automated Testing Section
   =============================== */
document.addEventListener("DOMContentLoaded", async () => {
  const problems = [
    { title: "1. Reverse a String", test: () => reverseString("hello") === "olleh", expected: `"olleh"` },
    { title: "2. Find Max Number", test: () => findMax([3, 9, 2, 8]) === 9, expected: `9` },
    { title: "3. Count Vowels", test: () => countVowels("OpenAI") === 4, expected: `4` },
    { title: "4. Capitalize Words", test: () => capitalizeWords("hello world") === "Hello World", expected: `"Hello World"` },
    { title: "5. Remove Duplicates", test: () => JSON.stringify(removeDuplicates([1,1,2,3,3])) === JSON.stringify([1,2,3]), expected: `[1,2,3]` },
    { title: "6. Sum Array", test: () => sumArray([1,2,3,4]) === 10, expected: `10` },
    { title: "7. FizzBuzz", test: () => JSON.stringify(fizzBuzz(5)) === JSON.stringify([1,2,"Fizz",4,"Buzz"]), expected: `[1,2,"Fizz",4,"Buzz"]` },
    { title: "8. Palindrome Check", test: () => isPalindrome("RaceCar") === true, expected: `true` },
    { title: "9. Factorial", test: () => factorial(5) === 120, expected: `120` },
    { title: "10. Sort Numbers", test: () => JSON.stringify(sortNumbers([3,1,2])) === JSON.stringify([1,2,3]), expected: `[1,2,3]` },
    { title: "11. Fetch Fake User (Async)", test: async () => { const name = await fetchFakeUser(); return typeof name === "string" && name.length > 0; }, expected: `"Leanne Graham"(or any valid name)`  },
    { title: "12. DOM Manipulation", test: () => { highlightTitle(); return document.querySelector("h1").style.color === "green"; }, expected: `"Title turns green and underlined"` },
    { title: "13. Filter Even Numbers", test: () => JSON.stringify(filterEvenNumbers([1,2,3,4,5])) === JSON.stringify([2,4]), expected: `[2,4]` },
    { title: "14. Merge and Sort Arrays", test: () => JSON.stringify(mergeAndSort([3,1],[2,4])) === JSON.stringify([1,2,3,4]), expected: `[1,2,3,4]` },
    { title: "15. Fetch and Render Posts", test: async () => { const count = await fetchAndRenderPosts(); return count === 3; }, expected: `3 posts rendered on the page` },
    { title: "16. Find Missing Number", test: () => findMissingNumber([1,2,4,5]) === 3, expected: `3` },
    { title: "17. Flatten Nested Array", test: () => JSON.stringify(flattenArray([1,[2,[3,4]],5])) === JSON.stringify([1,2,3,4,5]), expected: `[1,2,3,4,5]` },
  ];

  const container = document.getElementById("problemsContainer");
  let score = 0;

  for (const p of problems) {
    const card = document.createElement("div");
    card.className = "card mb-3 shadow-sm";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.textContent = p.title;

    const expected = document.createElement("p");
    expected.innerHTML = `<strong>Expected Output:</strong> ${p.expected}`;

    const result = document.createElement("div");
    result.className = "alert alert-secondary mt-2";
    result.textContent = "Running test...";

    cardBody.append(title, expected, result);
    card.appendChild(cardBody);
    container.appendChild(card);

    try {
      const testResult = p.test.constructor.name === "AsyncFunction" ? await p.test() : p.test();
      if (testResult) {
        result.className = "alert alert-success mt-2";
        result.textContent = "✅ Passed";
        score++;
      } else {
        result.className = "alert alert-danger mt-2";
        result.textContent = "❌ Failed";
      }
    } catch (err) {
      result.className = "alert alert-warning mt-2";
      result.textContent = "⚠️ Error: " + err.message;
    }
  }

  document.getElementById("scoreText").textContent = `Score: ${score} / ${problems.length}`;
});