const blogBtn = document.getElementById("blog-btn");
const home = document.getElementById("home");
const blog = document.getElementById("blog");
const donation = document.getElementById("donation");
const history = document.getElementById("history");
const historyMain = document.getElementById("history-main");
const button = document.getElementById("button");

blogBtn.addEventListener("click", function () {
  if (!blogBtn.innerText.includes("home")) {
    blogBtn.innerText = "home";
    home.classList.add("hidden");
    blog.classList.remove("hidden");
    button.classList.add("hidden");
  } else {
    blogBtn.innerText = "blog";
    home.classList.remove("hidden");
    blog.classList.add("hidden");
    button.classList.remove("hidden");
  }
});

donation.addEventListener("click", function () {
  home.classList.remove("hidden");
  historyMain.classList.add("hidden");

  donation.classList.add("bg-[#B4F461]");
  history.classList.remove("bg-[#B4F461]");
});

history.addEventListener("click", function () {
  historyMain.classList.remove("hidden");
  home.classList.add("hidden");

  history.classList.add("bg-[#B4F461]");
  donation.classList.remove("bg-[#B4F461]");
});
