(() => {
  console.log('fired!');



let header = document.querySelector("h1"),
subhead = document.querySelector("h3"),
theButon = document.querySelector("button");

function changeText(){
  header.textContent="I\'m different!";
  subhead.textContent = "Me too!";

}

theButon.addEventListener("click", changeText);
})();
