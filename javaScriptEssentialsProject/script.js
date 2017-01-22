var arraySelect = document.getElementsByTagName('select'); //bangs all the select tags with content into array

//*var element = document.getElementById('content'); //gets html element with id 'content' and puts it into var element

function dropdownStyles(){ //this is function to change the <div> tag with id 'content'

    var id = this.id;
    var value = this.value;

//*    element.style[id] = value;
    document.getElementById('content').style[this.id] = value; //this will change value of element with id 'content'
}

for( var i = 0; i < arraySelect.length; i++ ){

    arraySelect[i].addEventListener( 'change', dropdownStyles );
}


// much easier to understand than the element example !
// document.getElementById('content').style['width'] = '500px'
