var nomen = $("#name")
var image = $("#representation")
var phrase = $("#phrase")

var person = {
  name: "Clay",
  representation: "https://i.ytimg.com/vi/Ovn3ehANSvA/maxresdefault.jpg",
  height: "500px",	
  favoriteColor: "blue",
  catchphrase: "Get pumped!"
}
var Rep = person.representation

function drawPerson(person) {
 nomen.html(person.name)
 image.html("<img src=Rep height='200'>")
 phrase.html(person.catchphrase)
 
}

drawPerson(person)