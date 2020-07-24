const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText = '今天气温 :insertT: 摄氏度，:insertX:出去遛弯。当走到:insertY:门前时，突然就:insertZ:。人们都惊呆了，:insertName:全程目睹但并没有慌，因为:insertX:是一个 :insertW: 公斤的胖子，天气又辣么热。';
let insertX = ['怪兽威利','大老爹','圣诞老人'];
let insertY = ['肯德基','迪士尼乐园','白宫'];
let insertZ = ['自燃了','在人行道化成了一坨泥','变成一条鼻涕虫爬走了'];

randomize.addEventListener('click', result);

function result() {
  let valResult = storyText;
  let name = '李雷';
  let weight = 0;
  let temperature = 0;

  let storyX = randomValueFromArray(insertX);
  let storyY = randomValueFromArray(insertY);
  let storyZ = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    name = customName.value;
  }

  valResult = valResult.replace(':insertX:',storyX);
  valResult = valResult.replace(':insertX:',storyX);
  valResult = valResult.replace(':insertY:',storyY);
  valResult = valResult.replace(':insertZ:',storyZ);
  valResult = valResult.replace(':insertName:',name);
  weight = Math.floor(Math.random() * 300);

  if(document.getElementById("american").checked) {    
    temperature = Math.floor(Math.random() * 94);
  }
  else if(document.getElementById("metric").checked){
    temperature = Math.floor(Math.random() * 40);
  }

  valResult = valResult.replace(':insertT:',temperature);
  valResult = valResult.replace(':insertW:',weight);

  story.textContent = valResult;
  story.style.visibility = 'visible';
}