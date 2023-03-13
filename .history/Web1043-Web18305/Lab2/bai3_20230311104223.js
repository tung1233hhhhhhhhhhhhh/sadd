let fullName = prompt("Nhap ho va ten:");
let gioiTinh = prompt("Nhap gioi tinh:");

const fullName_list = fullName.split(" ");
if (gioiTinh.toLocaleLowerCase() === "nam") {
  document.writeln("Họ là : " + fullName_list[0].toLocaleUpperCase);
  document.write("<br>");
  document.writeln("Tên đệm là : " + fullName_list[1].toLocaleUpperCase);
  document.write("<br>");
  document.writeln("Tên là : " + fullName_list[2].toLocaleUpperCase);
  document.write("<br>");
  fullName_list[1] = "Văn";
  let newfull = fullName_list.join(" ");
  document.writeln(newfull);
} else if (gioiTinh.toLocaleLowerCase() === "nữ") {
  document.writeln("Họ là : " + fullName_list[0].toLocaleUpperCase());
  document.write("<br>");
  document.writeln("Tên đệm là : " + fullName_list[1].toLocaleUpperCase);
  document.write("<br>");
  document.writeln("Tên là : " + fullName_list[2].toLocaleUpperCase);
  document.write("<br>");
  fullName_list[1] = "Vẽ";
  let newfull = fullName_list.join(" ");
  document.writeln(newfull);
} else {
  document.write("?");
}

// Tạo lại chuỗi họ tên từ các phần đã được thay đổi
// let newFullName = nameParts.join(" ");

// In ra kết quả tên mới
// document.writeln("Tên mới của bạn là: " + newFullName);
