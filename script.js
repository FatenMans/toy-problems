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

  const charArray=str.split('');
  const ReversedArray =charArray.reverse();
  const reversedStr = ReversedArray.join('');
  // input exemple: hello
  // output exemple: olleh
  return reversedStr;
}

// ===============================
// Problem 2: Find max number
// ===============================
function findMax(arr) {
  let max= arr[0];
  for (let i=1;i<arr.length;i++){
    if(arr[i]>max)
    {
      max=arr[i]
    }
  }
  // TODO
  // input exemple: [3, 9, 2, 8]
  // output exemple: 9
  return max;
}

// ===============================
// Problem 3: Count vowels
// ===============================
function countVowels(str) {


 const vowels = "aeiouAEIOU";
 let count = 0;
 for (let i=0 ; i<str.length;i++)
  if (vowels.includes(str[i]))
  {
    count++;
  }
  // TODO
  // input exemple: "OpenAI"
  // output exemple: 4
  return count;
}

// ===============================
// Problem 4: Capitalize words
// ===============================
function capitalizeWords(sentence) {
  return sentence.split(' ')  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(' ');            
}

  // TODO
  // input exemple: "hello world"
  // output exemple: "Hello World"
  


// ===============================
// Problem 5: Remove duplicates
// ===============================
function removeDuplicates(arr) {
  let seen = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
  // TODO
  // input exemple: [1,1,2,3,3]
  // output exemple: [1,2,3]
  


// ===============================
// Problem 6: Sum of numbers
// ===============================
function sumArray(arr) {
  sum =0;
  for(let i=0; i<arr.length;i++)
    sum+=arr[i];
  // TODO
  // input exemple: [1,2,3,4]
  // output exemple: 10
  return sum
}

// ===============================
// Problem 7: FizzBuzz
// ===============================
function fizzBuzz(n) {
  const res = [];
  for(let i =1; i<=n; i++)
    if (i %3 ==0 && i%5==0)
    {
      res.push("FizzBuzz");

     } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(i);
    }
  
  return res;

  }


  // TODO
  // input exemple: 5
  // output exemple: [1,2,"Fizz",4,"Buzz"]


// ===============================
// Problem 8: Palindrome Check
// ===============================
function isPalindrome(str) {
  str = str.toLowerCase();


for(let i =0;i< str.length /2 ;i++)
  if( str[i] !==str[str.length-1 -i])
{
  return false;
}
  // TODO
  // input exemple: "RaceCar"
  // output exemple: true
return true;
  
}

// ===============================
// Problem 9: Find factorial
// ===============================
function factorial(n) {
   if (n < 0) return undefined;

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i; 
  }

  
  return result;
}
  // TODO
  // input exemple: 5
  // output exemple: 120
 

// ===============================
// Problem 10: Sort numbers ascending
// ===============================
function sortNumbers(arr) {
  arr.sort(function(a,b) {
     return a-b;
  });
  
  // TODO
  // input exemple: [3,1,2]
  // output exemple: [1,2,3]
  return arr; 
}

// ===============================
// Problem 11: Fetch fake data (async)
// ===============================
async function fetchFakeUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    // On choisit un utilisateur au hasard
    const randomUser = users[Math.floor(Math.random() * users.length)];
    return randomUser.name;
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
    return "Utilisateur inconnu";
  }
}



// ===============================
// Problem 12: DOM Manipulation
// ===============================
function highlightTitle() {
    const title = document.getElementById('my-title');

  title.style.color = 'green';
  title.style.textDecoration = 'underline';
  // TODO
  // input exemple: no input
  // output exemple: "Title turns green and underlined"
  return  highlightTitle;
}

// ===============================
// Problem 13: Filter even numbers
// ===============================
function filterEvenNumbers(arr) {
  let res=[];
for (let i =0 ; i< arr.length; i++ )
  if (arr[i] % 2 == 0)
     res.push(arr[i]);


  // TODO
  // input exemple: [1,2,3,4,5]
  // output exemple: [2,4]
  return res
}

// ===============================
// Problem 14: Merge two arrays and sort
// ===============================
function mergeAndSort(arr1, arr2) {

  const merged = arr1.concat(arr2);     
  const sorted = merged.sort((a, b) => a - b);  
  

  // TODO
  // input exemple: [3,1],[2,4]
  // output exemple: [1,2,3,4]
  return sorted;
}

// ===============================
// Problem 15: Fetch and render posts (async + DOM)
// ===============================
async function fetchAndRenderPosts() {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const data = await response.json();

   
    const container = document.getElementById('posts-container');

    
    container.innerHTML = '';

    
    data.forEach(post => {
      const div = document.createElement('div');
      div.classList.add('post', 'mb-3');
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr>
      `;
      container.appendChild(div);
    });

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Appel unique de la fonction
fetchAndRenderPosts();


// ===============================
// Problem 16: Find missing number in sequence
// ===============================
function findMissingNumber(arr) {
  let n= arr.length+1;
  for(let i =1 ; i<=n ;i++)
  {
    if (!arr.includes(i)){
      return i;
    }
  }
  // TODO
  // input exemple: [1,2,4,5]
  // output exemple: 3
  return
}

// ===============================
// Problem 17: Flatten nested array
// ===============================
function flattenArray(arr) {
  let res = [];
  for (const item of arr)
  {
    if(Array.isArray(item))
    {
      res =res.concat(flattenArray(item));

    }else {
      res.push(item);
    }
  }
  // TODO
  // input exemple: [1,[2,[3,4]],5]
  // output exemple: [1,2,3,4,5]
  return res;
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