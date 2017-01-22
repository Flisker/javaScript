var arraySelect = document.getElementsByTagName('select');

var element = document.getElementById('content');

function dropdownStyles(){

    var style = this.id;
    var value = this.value;

    element.style[style] = value;
}

for( var i = 0; i < arraySelect.length; i++ ){

    console.log(arraySelect[i])
    arraySelect[i].addEventListener( 'change', dropdownStyles );

}
