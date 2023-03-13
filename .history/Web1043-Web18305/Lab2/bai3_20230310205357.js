let fullName = prompt("Nhap ho va ten:");
let gioiTinh = prompt("Nhap gioi tinh:");

const fullName_list = fullName.split(" ");
// if (gioiTinh.toLocaleLowerCase == "nam") {
document.writeln("Họ là : " + fullName_list[0]);
document.write("<br>");
document.writeln("Tên đệm là : " + fullName_list[1]);
document.write("<br>");
document.writeln("Tên là : " + fullName_list[2]);
document.write("<br>");
fullName_list.splice(1, 1, "Văn");
document.writeln(fullName_list);

// }
// console.log("Họ: " + fullName_list[0]);
// console.log("Tên đệm: " + fullName_list[1]);
// console.log("Tên riêng: " + fullName_list[2]);
// fullName_list[1] = "Văn";
// console.log("Tên sao khi đổi :" + fullName);

// // Đầu tiên, sử dụng hàm prompt để nhận đầu vào từ người dùng
// let fullName = prompt("Nhập họ và tên của bạn: ");
// let gender = prompt("Nhập giới tính của bạn (Nam hoặc Nữ): ");

// // Sử dụng phương thức split để tách chuỗi họ tên thành 3 phần
// let nameParts = fullName.split(" ");

// // In ra 3 giá trị họ, tên đệm, tên riêng biệt
// console.log("Họ: " + nameParts[0]);
// console.log("Tên đệm: " + nameParts[1]);
// console.log("Tên riêng: " + nameParts[2]);

// // Kiểm tra giới tính và thay đổi tên đệm tương ứng
// if (gender.toLowerCase() === "nam") {
//   nameParts[1] = "Văn";
// } else if (gender.toLowerCase() === "nữ") {
//   nameParts[1] = "Vẽ";
// }

// // Tạo lại chuỗi họ tên từ các phần đã được thay đổi
// let newFullName = nameParts.join(" ");

// // In ra kết quả tên mới
// console.log("Tên mới của bạn là: " + newFullName);
