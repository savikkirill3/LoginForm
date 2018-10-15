function handleFiles(FileList){
  let file = FileList[0];
  let preview = document.getElementById('preview');
  preview.innerHTML= '';
  let img = document.createElement("img");
  img.classList.add("obj");
  img.file = file;
  preview.appendChild(img);

  let reader = new FileReader();
  reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
  reader.readAsDataURL(file);
}
