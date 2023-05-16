 String.prototype.hindislug = function () {
    let values = this.replace(
      /[*+~.()'~!@#$%^&?"!:\\/^`()\+=\[\]{};:'"\\|\/,.<>?]/g,
      ""
    ).split(" ");
    values = values.filter((item) => item !== "");
    const slug = values
      .map((item) => {
        return item.replace(/[*+~.()'?"!%:@/^]/g, "");
      })
      .join("-");
    return slug.toLowerCase();
  };
