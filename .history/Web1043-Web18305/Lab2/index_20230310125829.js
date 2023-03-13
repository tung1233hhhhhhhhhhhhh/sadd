var a = prompt("Nhập a");
var b = prompt("Nhập b");
var c = prompt("Nhập c");

if (a == 0) {
  //   var x = -parseInt(c) / parseInt(b);
  //   document.write(x);
  if (b == 0) {
    if (c == 0) {
      document.write("phuong trinh vo so nghiem");
    } else {
      document.write("phuong trinh vo nghiem");
    }
  } else {
    var x = -parseInt(c) / parseInt(b);
    document.write("phuong trinh co nghiem duy nhat la " + x);
  }
} else {
  var delta = b * b - 4 * a * c;
  if (delta < 0) {
    document.write("phuong trinh vo nghiem");
  } else if (delta == 0) {
    var x = -parseInt(b) / (2 * parseInt(a));
  }
}
