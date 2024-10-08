//Exercise #2: At Least Five Function

function atLeastFive(array, operation, roomNumber) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      sum += 1;
    }
  }
  return operation(sum, roomNumber);
}
function resultScoreRoom(sum, roomNumber) {
  if (sum >= 5) {
    return `นักเรียนห้องที่ ${roomNumber} ผ่านเกณฑ์ ✅`;
  } else {
    return `นักเรียนห้องที่ ${roomNumber} ไม่ผ่านเกณฑ์ ❌`;
  }
}
const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, resultScoreRoom, 1);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, resultScoreRoom, 2);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, resultScoreRoom, 3);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
