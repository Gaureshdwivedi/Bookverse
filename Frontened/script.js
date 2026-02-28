document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
const defaultBooks = [
  {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    genre: "Fiction",
    pdf: "Books/The God of Small Things.pdf",
    img: "Images/God Of Small Things.jpg"
  }
];