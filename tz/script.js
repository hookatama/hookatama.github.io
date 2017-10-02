var newArr;

$(document).ready(function(){
    
$('#startButton').click(function(){
      
      $('#startResult').empty();

      var selectValue = +$('#numbs').val();   
    
      var arr = [];
      
      for(var i = 0; i < selectValue; i++){
        var rand = Math.floor(Math.random() * (selectValue+1));
        arr.push(rand);
      }
      
      newArr = arr;

      newArr.reduce(function(result, item, i){
        if ( i < 100) {
            $('#startResult').append(item + ' ');
            if ( (i+1)%10 == 0 ) {
                $('#startResult').append( $('<br/>') );
            }
        }
      }, 0);
  });
    
$('#sortButton').click(function(){
    
      $('#sortResult').empty();
    
      var selectValue = +$('#numbs').val();   
    
      var fromValue = +$('#from').val();
      if (fromValue == ''){
              fromValue = 0};

      var toValue  = +$('#to').val();
      if (toValue == ''){
              toValue = 10};
    
    
      if ((fromValue < 0) || (isNaN(fromValue)) || (fromValue > toValue) || (toValue > selectValue) || (isNaN(toValue))){
          $('#sortResult').text('Wrong arguments! Please, try again')
      }
      else{
    
      var arr = [];
    
          for(var i = 0; i < newArr.length; i++){
              if ((newArr[i] >= fromValue) && (newArr[i] <= toValue)){
                  arr.push(newArr[i]);
              }
          }
          
          arr.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            if (a == b) return 0;
            
          });
          
          arr.reduce(function(result, item, i){
            if ( i < 100) {
                $('#sortResult').append(item + ' ');
                if ( (i+1)%10 == 0 ) {
                    $('#sortResult').append( $('<br/>') );
                } 
            }
          }, 0);
      }
});
    
});