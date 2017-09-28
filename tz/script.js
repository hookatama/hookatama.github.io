$(document).ready(function(){
$('#submitButton').click(function(){
      
      $('#result').empty();
      
      var value = $('#numbs option:selected').val();
      var arr = [];
      
      for(var i = 0; i < value; i++){
        var rand = Math.floor(Math.random() * (+value+1));
        arr.push(rand);
      }
      
      if (arr.length > 100){
         arr.length = 100;
      }
      
      arr.forEach(function(item, i, arr) {
        $('#result').append(item + ' ');
        if ( (i+1)%10 == 0 ) {
          $('#result').append( $('<br/>') );
        }
        
      });
  });
});