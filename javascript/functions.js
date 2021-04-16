function changePic(id) {
  if(document.getElementById(id).className == "pic_new") {
    document.getElementById(id).className = "grid-item";
  } else {
    document.getElementById(id).className = "pic_new";
  }
  console.log("changed " + id);
}