const data = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    // Call a function to display the data
    displayPosts(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

// Function to display posts
function displayPosts(posts) {
  const container = document.querySelector(".post-container");

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.classList.add("bg-black");
    postElement.classList.add("text-white");
    postElement.classList.add("shadow-md");
    postElement.classList.add("rounded-xl");
    postElement.classList.add("max-w-5xl");
    postElement.classList.add("mx-auto");


    const postId = document.createElement("h2");
    postId.textContent = `Post ID: ${post.id}`;

    const postTitle = document.createElement("p");
    postTitle.textContent = `Title: ${post.title}`;

    postElement.appendChild(postId);
    postElement.appendChild(postTitle);

    container.appendChild(postElement);
  });
}

//mouseover listener
document.addEventListener("mouseover", (e) => {
    console.log(e)
});

//keypress listener
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log("Enter pressed");
  } else if (e.key === "a") {
    alert("A pressed");
  }
});


const form = document.getElementById("myForm");
const username = document.getElementById("username");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting

  if (username.value.trim() === "") {
    message.textContent = "Username cannot be empty.";
    message.style.color = "red";
  } else {
    message.textContent = `Welcome, ${username.value}!`;
    message.style.color = "green";
  }
});