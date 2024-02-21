let city_names = [
'Gardner',
'Edmond',
'Dirtyburg',
'Stud',
'Santa Claus',
'Phoenix',
'Kingston',
'Gardner',
'Lowell',
'Rockford',

'Medfield',
'Marinette',
'Edith Endave',
'Caney City',
'Dry Ridge',
'Fiskdale',
'Coyote Flats',
'St. Marys Point',
'Norridgewock',
'Highlandville',
'Wilcox',
'Cantril',
'Arnolds Park',
'Waymart',
'Sugar City',
'Eagle Nest',
'Blodgett Mills',
'Premont',
'South Riding',
'Loogootee',
'Seward',
'Wynnedale',
'Mountain Brook',
'McCutchenville',
'Kenefic',
'Ridgeville',
'Big Thicket Lake Estates',
'Port Huron',
'Verdel',
'Leonia',
'Loveland',
'Swan Quarter',
'Exira',
'South Farmingdale',
'East Liberty',
'Tibbie',
'Holyoke',
'Woodlawn Heights',
'Redington Shores',
'Moss Bluff',
'Lake Valley',
'Symsonia',
'Mount Crested Butte',
'Colona',
'Miltona',
'Texanna'];

let city_blips = [];

var canvas;

// setting text
var set_text = function(text,x,y){
    c.strokeText(text,x,y);
    c.fillText(text,x,y)};

class cityblip {
#canvas;
#c;
#x;
#y;
#name = city_names[(Math.floor(Math.random()*city_names.length))];
#width = (this.#name.length*6.3333);
#height = 45;

constructor(x,y){
this.#canvas = document.createElement('canvas');
document.body.appendChild(this.#canvas);

this.#canvas.height = this.#height;
this.#canvas.width = this.#width;

this.#c = this.#canvas.getContext('2d');
this.#x = x;
this.#y = y;

this.#canvas.style.position = "absolute";
this.#canvas.style.zIndex = 1; // z-index

// listener for removing
let this_obj = this;
this.#canvas.addEventListener('mousedown',function(event){
  console.log("City placement event");
  if (guiControls.tool == 'TOOL_CITYNAME'){
    this_obj.destroy();       // remove weather station
    event.stopPropagation(); // prevent mousedown on body from firing
  }
});
};

destroy(){
  this.#canvas.parentElement.removeChild(this.#canvas); // remove canvas element
  let index = city_blips.indexOf(this);
  city_blips.splice(index, 1); // remove object from array
};

getXpos() {return this.#x};
getYpos() {return this.#y};

update(){
let screenX = (simToScreenX(this.#x)-this.#width/2);
let screenY = (simToScreenY(this.#y)-this.#height);

this.#canvas.style.left = screenX + 'px';
this.#canvas.style.top = screenY + 'px';

// creating city label
let c = this.#c;
c.clearRect(0,0,this.#width,this.#height);
c.fillStyle = '#00000000';
c.strokeStyle = 'black';
c.fillRect(0,0,this.#width,this.#height);

c.fillStyle = 'rgb(255,255,255)';
c.strokeText(this.#name,0,40);
c.fillText(this.#name,0,40);
};
};