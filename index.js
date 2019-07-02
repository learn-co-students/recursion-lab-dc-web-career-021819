// Code your solution here!

// printString
function printString(str){
  if (str.length > 1){
    console.log(str[0])
    printString(str.substring(1, str.length))

  } else {
    console.log(str)
  }
}

// reverseString
function reverseString(str){
  let output = str[str.length - 1]
  if (str.length > 1){
    output = output + reverseString(str.substring(0, str.length - 1))
  }
  return output
}

function isPalindrome(str){
  if (str.length <= 2){
    return true
  }
  if (str[0] === str[str.length - 1]){
    isPalindrome(str.substring(1, str.length-1))
  } else {
    return false
  }
  return true
}

// addUpTo
function addUpTo(numArray, index){
  if (index > 0){
    return numArray[index] + addUpTo(numArray, index - 1)
  } else {
    return numArray[index]
  }
}

// maxOf
function maxOf(numArray){
  let max = numArray[0]
  // if (max < numArray[1]){
  //   max = numArray[1]
  // }
  // if (max < numArray[2]){
  //   max = numArray[2]
  // }
  // if (max < numArray[3]){
  //   max = numArray[3]
  // }
  if (numArray.length === 1){
    return max
  }

  if (max < maxOf(numArray.slice(1))) {
    max = numArray[2]
  }

  console.log('the max number of', numArray, 'is', max)
  return max
}

// includes Number
function includesNumber(numArray, num){
  if (numArray[0] === num){
    return true
  }
  if (numArray.length > 1){
    return includesNumber(numArray.slice(1), num)
  } else {
    return false
  }
}
