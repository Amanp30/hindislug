  String.prototype.hindislug = function (separator) {
    const regex =
      /[*+~.()'~!@#$%^&?"\-_/।!:\\/^`\+=\[\]{};:'"\\|\/,.<>?/\f/‘’/\t//\v/]/g;
    const values = this.split(" ")
      .map((item) => item.replace(regex, ""))
      .filter((item) => item !== "");
    const slug = values.join(separator || "-").toLowerCase();
    return slug;
  };
