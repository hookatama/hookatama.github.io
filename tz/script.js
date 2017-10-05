var arr;

$(document).ready(function(){
    
       $('input').change(function() {
           
          var selectValue = +$('#numbs').val();
    
          var fromValue = +$('#from').val();
           
          var toValue = +$('#to').val(); 
           
          if (toValue > selectValue){
              $('#toValue').val(selectValue)
          } else if (toValue < fromValue){ $('#to').val(fromValue)}
           
          if (fromValue < 0){
              $('#from').val(0);
          }
           else if (fromValue > toValue) {
              $('#from').val(toValue)
          }
        }); 
    

$('#startButton').click(function(){
      
      $('#startResult').empty();

      var selectValue = +$('#numbs').val();
    
      var fromValue = +$('#from').val();
      if (fromValue == ''){
              fromValue = 0
      }

      var toValue  = +$('#to').val();
      if (toValue == ''){
              toValue = 10
      }
    
      arr = [];

          for(var i = 0; i < selectValue; i++){
            var rand = Math.floor(Math.random() * (toValue - fromValue + 1) + fromValue);
            arr.push(rand);
          }

          arr.reduce(function(result, item, i){
            if (i <= 100) {
                (i+1)%10 == 0 ? 
                  $('#startResult').append($('<br/>')) :
                  $('#startResult').append(item + ' ')
            }
          }, 0);
  });
    
$('#sortButton').click(function(){
    
      $('#sortResult').empty(); 
          
          arr.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            if (a === b) return 0

          });
          
          arr.reduce(function(result, item, i){
            if (i < 100) {
               (i+1)%10 == 0 ? 
                  $('#sortResult').append($('<br/>')) :
                $('#sortResult').append(item + ' ')
            }
          }, 0);
});
    
});