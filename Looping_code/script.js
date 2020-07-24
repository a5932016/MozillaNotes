var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

let admit = [];
let refuse = [];
let val = '';
let i = 0;
let PeopleLength = people.length;


while(i < PeopleLength)
{
  val = people[i].toLocaleLowerCase();
  switch(val)
  {
    case 'anne':
    case 'phil':
      admit.push(people[i]);
      break;
    default:
      refuse.push(people[i]);
      break;
  }

  i++;
}

refused.textContent += refuse.join(',');
admitted.textContent += admit.join(',');
