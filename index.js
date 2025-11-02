let clicks = 0;

function clik() {
  clicks++
  elem("counter").innerHTML = clicks + " clicks :3";
}

function elem(id) {
  return document.getElementById(id);
}
