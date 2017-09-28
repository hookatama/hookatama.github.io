$(document).ready(function(){
$('#submitButton').click(function(){
      
      $('#result').empty();
      
      var value = $('#numbs').val();
      var arr = [];
      
      for(var i = 0; i < value; i++){
        var rand = Math.floor(Math.random() * (+value+1));
        arr.push(rand);
      }
      
      if (arr.length > 100){
         var newArr = arr.splice(100);
      } newArr = arr;

      newArr.reduce(function(result, item, i){
         $('#result').append(item + ' ');
        if ( (i+1)%10 == 0 ) {
          $('#result').append( $('<br/>') );
        }
      }, 0);
      

  });
});