// Blog Data (In-memory, can be replaced with an API or database connection)
let blogs = [];

document.getElementById("add-blog-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("blog-title").value;
  const content = document.getElementById("blog-content").value;

  // Add new blog to the array
  const newBlog = {
    id: Date.now(),
    title,
    content,
    views: 0,
    likes: 0,
  };

  blogs.push(newBlog);

  // Reset form and display updated blogs
  this.reset();
  displayBlogs();
});

function displayBlogs() {
  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = ""; // Clear the container

  blogs.forEach(blog => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";
    blogCard.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <div class="blog-insights">
        <span>Views: ${blog.views}</span>
        <span>Likes: ${blog.likes}</span>
      </div>
      <button onclick="increaseView(${blog.id})">Increase View</button>
      <button onclick="increaseLike(${blog.id})">Increase Like</button>
      <button onclick="deleteBlog(${blog.id})">Delete Post</button>
    `;
    blogContainer.appendChild(blogCard);
  });
}

function increaseView(blogId) {
  const blog = blogs.find(b => b.id === blogId);
  if (blog) {
    blog.views += 1;
    displayBlogs();
  }
}

function increaseLike(blogId) {
  const blog = blogs.find(b => b.id === blogId);
  if (blog) {
    blog.likes += 1;
    displayBlogs();
  }
}

function deleteBlog(blogId) {
  blogs = blogs.filter(b => b.id !== blogId);
  displayBlogs();
}

// Initial display
displayBlogs();
