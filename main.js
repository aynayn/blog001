// Define all your posts in order
    const posts = [
      "001.html", "002.html", "003.html", "004.html", "005.html", "006.html", "007.html"

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
