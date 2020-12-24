const deepGet = (obj, keys) => {
  return keys.reduce(
    (xs, x) => (xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null),
    obj
  );
};

const generateSlug = name => {
  const nextName = name
    .toLowerCase()
    .replace(/ &amp;|,/g, "")
    .replace(/ /g, "-");
  return nextName;
};

module.exports = deepGet;

// DOM Traverse
/*
let elements = temp1.querySelectorAll('li');
for(let elem of elements){
  console.log(`{name: "${elem.innerText}", link: "${elem.firstElementChild.getAttribute("href")}", children: [],},`)
}
*/
