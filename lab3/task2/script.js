var phonenumberformat = /\(\d{3}\)\d{3}-\d{4}/;
var phonenumber = prompt(
  "Введите телефонный номер в следующем формате: (XXX)XXX-XXXX:",
  ""
);
if (phonenumberformat.exec(phonenumber)) alert("Правильный телефонный номер");
else alert("Введите телефонный номер в следующем формате: (XXX)XXX-XXXX.");
