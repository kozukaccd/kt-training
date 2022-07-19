console.log("hello world");

console.log(document.getElementById("foo"));

document.addEventListener("mousemove", () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  console.log(`rgb(${red},${green},${blue})`);
  document.getElementById("hello").style.backgroundColor = `rgb(${red},${green},${blue})`;
});

document.getElementById("animal-button").addEventListener("click", () => {
  const test = document.getElementsByClassName("list-member");
  Array.from(test).forEach((item) => {
    console.log(item);
    item.classList.add("animal-name");
  });
});
