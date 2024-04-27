function getMilkName() {
  var fatPercentage = parseFloat(
    prompt("Введите процент жирности молока (например, 2.5, 3.2, 3.5):")
  );

  var milkName;

  if (fatPercentage === 2.5) {
    milkName = "Молоко 2.5% - Вкуснотеево";
  } else if (fatPercentage === 3.2) {
    milkName = "Молоко 3.2% - Домик в деревне";
  } else if (fatPercentage === 3.5) {
    milkName = "Молоко 3.5% - Богдаша";
  } else {
    milkName = "Молоко с другим процентом жирности";
  }

  alert(milkName);
}
