/*
$('document').ready(function(){
  ShowPhoto();
});

function ShowPhoto(){
  let inputFile = document.getElementById('input').files;
  var file = inputFile[0];
  console.log(file);
}*/

function handleFiles(FileList){
  let file = FileList[0];
  let preview = document.getElementById('preview');
  let img = document.createElement("img");
  img.classList.add("obj");
  img.file = file;
  preview.appendChild(img);

  let reader = new FileReader();
  reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
  reader.readAsDataURL(file);
}