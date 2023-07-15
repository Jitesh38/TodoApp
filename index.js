let i = 0;
let btn = document.getElementById("btn");
let TodoTxt = document.getElementById("Todo");
let one = document.getElementById("one");

// console.log(list);

btn.addEventListener("click", function () {
  let str = TodoTxt.value
  if (str.trim() == "") {
    alert(`Enter Correct Input`)
    return;
  }
  let div = document.createElement("div");
  div.innerHTML = `
  <div class="row justify-content-center animate__backInDown">
<div class="col-md-4">
  <div class="tasks ">
    <input type="text" class="AddedTask d-inline" name="task" id="Task${i}" value=${TodoTxt.value}>
  <button class="edt btn btn-outline-dark d-inline" onclick="Edit(${i})"><i class="bi bi-pencil text-success"></i></button>
    <button class="clr btn btn-outline-dark d-inline" onclick="Clear(${i})"><i class="bi bi-trash3-fill text-danger"></i></button><br><br>  
    </div></div>
  </div>`;
  one.append(div);
  localStorage.setItem(`task${i}`, `${TodoTxt.value}`);
  i++;
  TodoTxt.value = "";
});

function Clear(x) {
  let list = document.querySelectorAll(".tasks");
  console.log(list);
  list[x].style.display = "none";
  localStorage.removeItem(`task${x}`);
}

function Edit(x) {
  let txt = document.getElementById(`Task${x}`);
  TodoTxt.value = txt.value;
  let list = document.querySelectorAll(".tasks");
  list[x].style.display = "none";
  //   txt.value="";
  //   txt.required=true;
  //   localStorage.setItem(`task${x}`, `${TodoTxt.value}`);
  //  console.log(txt.value);
}
