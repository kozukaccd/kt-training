console.log("hello world");

document.getElementById("animal-button").addEventListener("click", () => {
  const test = document.getElementById("foo").children;
  const animals = Array.from(test).forEach((item) => {
    console.log(item);
    item.classList.add("animal-name");
  });
});
