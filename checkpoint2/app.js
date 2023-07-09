let menu = ["rau xào", "thịt luộc", "gà rán"];



let input;
input = prompt("Mời người dùng nhập vào C,R,U,D");


if (input === 'c') {
  menu.push(
    prompt("Mời người dùng nhập món ăn muốn thêm vào menu")
  )
}
else if (input === "r") {
  alert("Danh sách món ăn: " + menu);
}
else if (input === "u") {
  let viTriMonAnThayThe = menu.indexOf(
    prompt("Mời người dùng nhập vào tên món muốn update")
  );
  if (viTriMonAnThayThe < 0) {
    alert("Món ăn này hiện không có trong menu")
  }


  menu[viTriMonAnThayThe] = prompt("Mời người dùng cập nhật món ăn mới");
}
else if (input === "d") {
  let viTriMonAnDelete = menu.indexOf(
    prompt("Mời người dùng nhập vào tên món muốn Delete")
  );
  if (viTriMonAnDelete < 0) {
    alert("Món ăn này hiện không có trong menu")
  }


  menu.splice(viTriMonAnDelete, 1);
}
else {
  alert("Không tồn tại yêu cầu");
}


localStorage.setItem("menu", JSON.stringify(menu))
JSON.parse(localStorage.getItem("menu"))