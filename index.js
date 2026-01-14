let clix = 0;
let to = setTimeout();
let to2 = setTimeout();

function clik() {
  clix++
  elem("counter").innerHTML = clix + " clix :3";

  clearTimeout(to);
  clearTimeout(to2);
  
  to = setTimeout(() => {
    elem("counter").innerHTML = clix + " clix :<";
  }, 3000)
  
  to2 = setTimeout(() => {
    elem("counter").innerHTML = clix + " clix >:O";
  }, 10000)

  
}

function elem(id) {
  return document.getElementById(id);
}
