// for-in loop and its interation with object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);    
}

// for-in loop for array

const progLang = ["js", "cpp", "rb", "py", "java"]

for (const key in progLang) {
    console.log(`No. ${Number(key)+1} programming language is ${progLang[key]}`);   
}

