export function add1000Comma( value ) {
  if( !value )  return value;

  const strMoney = String( value );

  if( strMoney.indexOf( ',' ) > -1 ) return strMoney;

  var ret = '';

  var nFromEnd;

  for(var i=0; i<strMoney.length; ++i) {
    nFromEnd = strMoney.length - 1 - i;

    ret += strMoney[ i ];
    if( nFromEnd !== 0 && nFromEnd % 3 === 0 ) {
      ret += ','
    }
  }

  return ret;
}