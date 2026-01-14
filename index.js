let clix = 0;
let to = setTimeout();

function clik() {
  clix++
  elem("counter").innerHTML = clix + " clix :3";

  clearTimeout(to);
  
  to = setTimeout(() => {
    elem("counter").innerHTML = clix + " clix :<";
  }, 5000)
  
}

function elem(id) {
  return document.getElementById(id);
}
