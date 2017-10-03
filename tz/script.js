var arr;

$(document).ready(function(){
    
$('#startButton').click(function(){
      
      $('#startResult').empty();

      var selectValue = +$('#numbs').val();
    
      var fromValue = +$('#from').val();
      if (fromValue == ''){
              fromValue = 0};

      var toValue  = +$('#to').val();
      if (toValue == ''){
              toValue = 10};
    
      arr = [];

          for(var i = 0; i < selectValue; i++){
            var rand = Math.floor(Math.random() * (toValue - fromValue + 1) + fromValue);
            arr.push(rand);
          }

          arr.reduce(function(result, item, i){
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
          
          arr.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            if (a === b) return 0;

          });
          
          arr.reduce(function(result, item, i){
            if ( i < 100) {
                $('#sortResult').append(item + ' ');
                if ( (i+1)%10 == 0 ) {
                    $('#sortResult').append( $('<br/>') );
                } 
            }
          }, 0);
});
    
});