$(document).ready(function(){
$('#startButton').click(function(){
      
      $('#startResult').empty();

    
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
         $('#startResult').append(item + ' ');
        if ( (i+1)%10 == 0 ) {
          $('#startResult').append( $('<br/>') );
        }
      }, 0);
  });

$('#sortButton').click(function(){
    
      $('#sortResult').empty();
    
      var selectValue = $('#numbs').val();
      var startResult = $('#startResult').text();    
    
      var arr = startResult.split(' ');
    
      var fromValue = +($('#from').val());
      var toValue  = +($('#to').val());
    
      var newArr = [];
    
      if ((fromValue > toValue) || (fromValue < 0) || (toValue > selectValue)){
          $('#sortResult').text('Wrong arguments');
      } else{
          for(var i = 0; i < arr.length; i++){
              if ((arr[i] > fromValue) && (arr[i] <= toValue)){
                  newArr.push(arr[i]);
              }
          }
          
          newArr.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
          });
          
          newArr.reduce(function(result, item, i){
            $('#sortResult').append(item + ' ');
            if ( (i+1)%10 == 0 ) {
            $('#sortResult').append( $('<br/>') );
            }
          }, 0);
      }
});
    
});