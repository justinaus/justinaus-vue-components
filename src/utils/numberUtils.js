import { add1000Comma } from './stringUtils'

export function getCanConvertNumber( value ) {
  if( value === 0 ) return true;

  if( !value )  return false;

  return !isNaN( value );
}

export function changeTo1000comma( strOrg ) {
  if( !strOrg ) return '';

    strOrg = strOrg.trim();
    
    // 그냥 다 숫자면 그대로 리턴.
    if( getCanConvertNumber( strOrg ) ) {
      return add1000Comma( strOrg );
    }

    let ret = '';

    let char;

    for(var i=0; i<strOrg.length; ++i) {
      char = strOrg.charAt( i );

      // 숫자로 못바꾸는 문자는 그냥 패스한다.
      if( !getCanConvertNumber( char ) )  continue;

      ret += char;
    }

    if( !ret )  return '';

    const nRet = Number.parseInt( ret, 10 );

    return addCommaForMoney( nRet );
}