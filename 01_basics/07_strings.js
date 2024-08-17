const name = "kirhash"
const repoCount = 10

console.log(`Hello my name is ${name} and the count of my repo is ${repoCount}`);

const githubName = new String("kirhash-github")

console.log(githubName[1]);
console.log(githubName.__proto__);

console.log(githubName.length);
console.log(githubName.toUpperCase());
console.log(githubName.charAt(4));
console.log(githubName.indexOf("h"));

// const newString = githubName.substring(0, 4)
const newString = githubName.substring(-8, 4)
console.log(newString);

const anotherString = githubName.slice(-13, 5)
console.log(anotherString);

const newStringOne = "     kirhash     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com/google%20llc"
console.log(url.replace('%20', '-'));

console.log(url.includes('google'));
console.log(url.includes('microsoft'));

console.log(githubName.split("-"));









