const replace = (regex, str, flags = "") => str.replace(new RegExp(regex, flags), "");

let trim = (str, char = " ") => replace(`^${char}*|${char}*$`, str, "g");

const left = (str, char = " ") => replace(`^${char}*`, str);

const right = (str, char = " ") => replace(`${char}*$`, str);

trim.left = left;
trim.right = right;

module.exports = trim;
