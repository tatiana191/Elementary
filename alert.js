function chessBoard() {
    let height = document.querySelector('.input-height').value;
    let width = document.querySelector('.input-width').value;
    let str = "";
    let symbol = document.querySelector('.class-symbol').value;
    let res = document.querySelector('.class-div');
    // let res2 = document.querySelector('.class-div');
    console.log(symbol);
    console.log(height);
    console.log(width);
    // for (let w = 0; w < _width ; w++){
    //   _str += _symbol;
    // }
    // _str += '\n'
    // console.log(_str);
    // for (let h = 0; h < height ; h++){
    //   res.innerText += _str
    // }

    for (let h = 0; h < height ; h++){
      
      for (let w = 0; w < width ; w++){
        if( h % 2 === 0 ) {
          str += "_" + symbol;
        } else {
          str += symbol + '_';
        }
      }
      
      str += '\n'
    }
  res.innerText += str

//  for (let i = width;  i > 0; i++ ) {
//      for ( let j = height; j > 0; j++) {
//          if( i % 2 !== 0 ) {
//     str = symbol.inputValue;
//      } else {
//        str = symbol = "_"
//      }
//         if( j % 2 !== 0 ) {
//     str = symbol.inputValue;
//     } else {
//       str = symbol = "_"
//     }
//    }
    
  // }
  
}
document.querySelector('.class-button').onclick = chessBoard;