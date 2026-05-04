function openBook(link) {
    window.open(link, "_blank");
}

// Search
function searchBooks() {
    let input = document.getElementById("search").value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let title = book.innerText.toLowerCase();
        book.style.display = title.includes(input) ? "block" : "none";
    });
}

// Categories
function filterCategory(category) {
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        if (category === "all") {
            book.style.display = "block";
        } else {
            book.style.display = book.classList.contains(category) ? "block" : "none";
        }
    });
}

// Favorite
function toggleFav(element) {
    element.classList.toggle("active");
}
// --- Existing Functions (Index Page) ---
function openBook(link) {
    window.open(link, "_blank");
}

function searchBooks() {
    let input = document.getElementById("search").value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let title = book.innerText.toLowerCase();
        book.style.display = title.includes(input) ? "block" : "none";
    });
}

function filterCategory(category) {
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        if (category === "all") {
            book.style.display = "block";
        } else {
            book.style.display = book.classList.contains(category) ? "block" : "none";
        }
    });
}

function toggleFav(element) {
    element.classList.toggle("active");
}


// --- New Functions (Events Page) ---

// Filter Events by category
function filterEvents(category) {
    let events = document.querySelectorAll(".event-card");

    events.forEach(eventCard => {
        if (category === "all") {
            eventCard.style.display = "block";
        } else {
            eventCard.style.display = eventCard.classList.contains(category) ? "block" : "none";
        }
    });
}

// Register for Event Interactivity
function registerEvent(button) {
    if (button.classList.contains("registered")) {
        return; // Do nothing if already registered
    }
    
    // Change button state
    button.innerText = "Registered ✓";
    button.classList.add("registered");
    
    // Optional: Show a subtle alert to the user
    alert("Awesome! Your spot has been reserved. We will send you an email reminder soon.");
}