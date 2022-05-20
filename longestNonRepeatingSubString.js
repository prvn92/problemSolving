const str = "abca";
function findMaxNonRepSubStrLength(str){
  let left =0;
  let right = 0;
  let maxLen = 0;
  const len = str.length;
  const map = {};
  while(left < len && right < len){
    if(!map[str[right]]){
      map[str[right]] = true;
      right++;
    }else{
      maxLen = Math.max(maxLen, right - left);
      while(left < right && str[left] !== str[right]) left++;
      left++;
      right++;
    }
  }
  
  return Math.max(maxLen, len-left);

}

console.log("test",findMaxNonRepSubStrLength(str)); 
