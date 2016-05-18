var longerString = function( string1, string2 ){
  console.log( "in longerString, Comparing: " + string1 + " & " + string2 );
  // return longer string
  if( string1.length > string2.length ){
    return string1;
  }
  else{
    return string2;
  }
}

var userInput = function(){
  console.log( "in userInput" );
  var input1 = document.getElementById('input1').value;
  console.log( "input1: "+  input1 );
  var input2 = document.getElementById('input2').value;
  console.log( "input2: "+  input2 );
  alert( "Longer String: " + longerString( input1, input2 ) );
}
