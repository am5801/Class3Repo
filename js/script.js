var myName = 'Chris'; //type string
var firstNumber = 5; //type number
var secondNumber = 10; //type number
var notActuallyANumber = '5'; //type string
console.log(typeof(myName)); //log to the console the type of myName (string)
console.log(typeof(firstNumber));
console.log('notActuallyANumber is of type ',typeof(notActuallyANumber));
var convertedString = parseInt(notActuallyANumber);
console.log('convertedString is of type ',typeof(convertedString));
//functions
//this function accepts a number and adds 5 to it.
function addFive( number ) {
  console.log('Running function addFive()...');
  var typeOfInput = typeof(number);
  console.log(typeOfInput);
  if ( typeOfInput == 'number') {
    return number + 5 ;
  } else {
    //alert('Someone tried to call addFive() but did not pass a number!')
  }
  console.log('The number passed in was ', number)
}

var output = addFive(5);
console.log('Output: ', output);
var output2 = addFive('five');
console.log('Output: ', output2);
//arrays
var myArray = ['apple','orange','banana',5,12];  
console.log(myArray);
//how to call an element in an array
var firstElement = myArray[1];
console.log('2nd:',firstElement);
//loop  "walk the array"
myArray.forEach(function(item) {
  console.log('walking the array', item);
  $('#arrayItems').append('<div class="arrayItem">' + item + '</div><br/>');
});
//objects
//object for Chris Whong
var myObject = {
  firstName: 'Chris',
  lastName: 'Whong',
  age: 35,
  studied: 'Urban Planning',
  students: [
    'Felix',
    'Ashley'
  ]
}
console.log(myObject.students[1]);
//CartoDB Basemap
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

var myMapData = [
  {
    name: "Joe's Pizza",
    coord: [40.699542,-73.993767]
  },
  {
    name: "Percy's Pizza",
    coord: [40.729178,-74.001390]
  },
  {
    name: "Pauly Gee's",
    coord: [40.729600, -73.958695]
  },
]
//   //Stamen Watercolor Basemap
//   var Stamen_Watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
//   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   subdomains: 'abcd',
//   minZoom: 1,
//   maxZoom: 16,
//   ext: 'png'
// });
var eastRiver = [40.706913,-73.987513];
var upperWestSide = [40.788129,-73.974509];
var myZoom = 13;
//now the fun stuff:  leaflet!
var map = L.map('myMap').setView(eastRiver, myZoom);
map.addLayer(layer)
// //Let's add a marker
// var marker = L.marker([40.768058,-73.981891]).addTo(map);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
//Now let's use our custom-made array to make many markers
myMapData.forEach(function(element) {
  var marker = L.marker(element.coord).addTo(map);
  marker.bindPopup("<b>Hello world!</b><br>I am " + element.name)
});
var panOptions = {
  animate: true,
  duration: 2
}
$(".myButton").click(function() {
  if($(this).attr('id') == 'one' ) {
    $(this).css('background-color','green');
    map.panTo(eastRiver, panOptions);
  } else {
    $(this).css('background-color','red');
    map.panTo(upperWestSide, panOptions);
  }
});