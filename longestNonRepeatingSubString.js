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

/* 
function countOnes(arr){
if(!arr.length) return 0;
for(let itr = 1; itr < arr.length; itr+=1){
    if(arr[itr] === 1){
    arr[0]+=1;
    }
  }
  return arr[0]
}

console.log("test", countOnes([1,0,1])); */
