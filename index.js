const spanCount = document.querySelector('#spanCount');
const spanAverageCost = document.querySelector('#spanAverageCost');
const ul = document.querySelector('ul');
const personList = document.querySelector('#personList');
const addButton = document.querySelector('#addButton');


const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];
  
  const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" }
  ];

  addButton.addEventListener('click', function(){
    person.push(generateRandom());
    render();
});

personList.addEventListener('click', (ev)=> {
    if(ev.target.tagName === 'LI'){
        const li = ev.target;
        const ul = li.parentNode;
        const children = Array.from(ul.children);
        const idx = children.indexOf(li);
        person.splice(idx, 1);
        render();
    }
});
  
function generateRandom(){
    const nameIdx = Math.floor(Math.random()*names.length);
    const name = names[nameIdx];
    const occIdx = Math.floor(Math.random()*occupations.length);
    const occupation = occupations[occIdx];
    const price = Math.ceil(Math.random()*10);

    return {
        name,
        occupation,
        price
    };

};

function render(){
  const lis = person.map((person)=> {
      return `<li>
      ${person.name}, Price: ${person.price.toFixed(2)}, Occupation: ${person.occupation}
      </li>`;
  }).join('');
  console.log(lis);
  personList.innerHTML = lis;
  spanCount.innerHTML = person.length;

}
const person = [];
person.push(generateRandom());
person.push(generateRandom());

render();