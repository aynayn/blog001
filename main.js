
    // List of posts in order (you manage this)
    const posts = [
      { title: "Post 1", url: "001.html" },
      { title: "Post 2", url: "002.html" },
      { title: "Post 3", url: "003.html" }
      { title: "Post 4", url: "004.html" }
      { title: "Post 5", url: "005.html" }
    ];

    // Detect current page
    const currentPath = window.location.pathname.split("/").pop();

    const currentIndex = posts.findIndex(post => post.url === currentPath);

    // Set Next/Prev
    if (currentIndex > 0) {
      document.getElementById("prevBtn").href = posts[currentIndex - 1].url;
    } else {
      document.getElementById("prevBtn").style.display = "none";
    }

    if (currentIndex < posts.length - 1) {
      document.getElementById("nextBtn").href = posts[currentIndex + 1].url;
    } else {
      document.getElementById("nextBtn").style.display = "none";
    }

    // Optional: update title/content placeholders (for demo)
    document.getElementById("post-title").innerText = posts[currentIndex].title;
    document.getElementById("post-content").innerText = `This is the content for ${posts[currentIndex].title}.`;
