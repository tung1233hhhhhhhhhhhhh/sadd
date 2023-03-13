let fullName = prompt("Nhap ho va ten:");
let gioiTinh = prompt("Nhap gioi tinh:");

fullName_list = fullName.split(" ");
if (gioiTinh.toLocaleLowerCase == "nam") {
  document.writeln("Họ là :" + fullName_list[0]);
  document.writeln("Tên đệm là :" + fullName_list[1]);
  document.writeln("Tên là :" + fullName_list[2]);
  // fullName_list[1] = "Văn";

  fullName.slice(1, 1, "Văn");

  document.writeln(fullName);
}
