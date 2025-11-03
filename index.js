let clix = 0;

function clik() {
  clix++
  elem("counter").innerHTML = clix + " clix :3";
}

function elem(id) {
  return document.getElementById(id);
}
