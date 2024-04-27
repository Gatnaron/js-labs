document.getElementById("submitButton").addEventListener("click", function () {
  var formData = {
    userName: document.getElementById("userName").value,
    userEmail: document.getElementById("userEmail").value,
    notificationFrequency: document.querySelector(
      'input[name="notificationFrequency"]:checked'
    ).value,
    notificationType: document.querySelector(
      'input[name="notificationType"]:checked'
    ).value,
    softUnlinked: document.getElementById("softUnlinked").checked,
    hardUnlinked: document.getElementById("hardUnlinked").checked,
    softLinked: document.getElementById("softLinked").checked,
    hardLinked: document.getElementById("hardLinked").checked,
  };

  var newWindow = window.open(
    "",
    "NotificationDetails",
    "width=400,height=300"
  );

  newWindow.document.write("<h2>Notification Details</h2>");
  newWindow.document.write(
    "<p><strong>User Name:</strong> " + formData.userName + "</p>"
  );
  newWindow.document.write(
    "<p><strong>User Email:</strong> " + formData.userEmail + "</p>"
  );
  newWindow.document.write(
    "<p><strong>Notification Frequency:</strong> " +
      formData.notificationFrequency +
      "</p>"
  );
  newWindow.document.write(
    "<p><strong>Notification Type:</strong> " +
      formData.notificationType +
      "</p>"
  );
  newWindow.document.write(
    "<p><strong>Soft (Unlinked):</strong> " + formData.softUnlinked + "</p>"
  );
  newWindow.document.write(
    "<p><strong>Hard (Unlinked):</strong> " + formData.hardUnlinked + "</p>"
  );
  newWindow.document.write(
    "<p><strong>Soft (Linked):</strong> " + formData.softLinked + "</p>"
  );
  newWindow.document.write(
    "<p><strong>Hard (Linked):</strong> " + formData.hardLinked + "</p>"
  );

  newWindow.document.write(
    '<p><a href="#" onclick="window.close();">Закрыть окно</a></p>'
  );
});
