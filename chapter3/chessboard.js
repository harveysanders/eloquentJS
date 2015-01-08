var makeChessboard = function(size) {
    size = size;
    var chessboard = "";
    for (var row = 0; row < size; row++){
	    var rowline = "";
  	
  	    if (row % 2 === 0) {
  		    for (var i = 0; i < size/2; i++) {
      		    rowline += " ";
 	 		    rowline += "#";
            }
  	    } 
        else {
      	    for (var i = 0; i < size/2; i++) {
      		    rowline += "#";
	  		    rowline += " ";
            }
        } 
        chessboard = rowline;
        console.log(chessboard + "\n");
    }
}