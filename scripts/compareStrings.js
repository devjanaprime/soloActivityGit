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
