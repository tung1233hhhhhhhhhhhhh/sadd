var a = prompt("Nhap a:");
var a = parseInt(a);
var b = prompt("Nhap b:");
var b = parseInt(b);
var c = prompt("Nhap c:");
var c = parseInt(c);

if (a == 0 || b == 0 || c == 0) {
  document.write("!");
} else {
  if (a == b || a == c || c == b) {
    document.write("tam giac can:");
  } else if (
    a * a == b * b + c * c ||
    b * b == a * a + c * c ||
    c * c == b * b + a * a
  ) {
  }
}
