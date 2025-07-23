// Define all your posts in order
    const posts = [
      "post1.html",
      "post2.html",
      "post3.html",
      "post4.html",
      "post5.html"
      // Add more as needed
    ];

    // Get current filename
    const currentFile = window.location.pathname.split("/").pop();

    // Get index of current post
    const currentIndex = posts.indexOf(currentFile);

    // Set Prev button
    const prevBtn = document.getElementById("prevBtn");
    if (currentIndex > 0) {
      prevBtn.href = posts[currentIndex - 1];
    } else {
      prevBtn.style.visibility = "hidden"; // Hide if no previous
    }

    // Set Next button
    const nextBtn = document.getElementById("nextBtn");
    if (currentIndex < posts.length - 1) {
      nextBtn.href = posts[currentIndex + 1];
    } else {
      nextBtn.style.visibility = "hidden"; // Hide if no next
    }