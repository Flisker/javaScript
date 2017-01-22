function ConstructBox(color,width,height)
{
  this.color = color;
  this.width = width;
  this.height = height;

  console.log("New box has been created :\n",this);
}

ConstructBox.prototype = {
  brakeBox: function(){ return "Box is getting seriously fucked up!"},
  repairBox: function(){ return "Box maintenance is in progress"},
  sendBox: function(){ return "Box is being sent to heaven"}
}

var box1 = new ConstructBox("red",200,100);
var box2 = new ConstructBox("blue",350,200);
var box3 = new ConstructBox("black",680,450);



// This seems to work also, but it's not shared I guess
function ConstructBox(name,color,width,height){
  var name = {color:color,width:width,height:height}

  name.boxMethods = {
    brakeBox: function(){ return "Box is getting seriously fucked up!"},
    repairBox: function(){ return "Box maintenance is in progress"},
    sendBox: function(){ return "Box is being sent to heaven"}
  }

  console.log("New box has been created :",name);

  return name
}

var box6 = new ConstructBox("loveBox","redish",800,1200);
