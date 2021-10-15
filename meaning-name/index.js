// Bad Code 💩
let d // 경과 시간(단위: 날짜)

// Good Code
let elapsedTimeInDays
let daysSinceCreation
let daysSinceModification
let fileAgeInDays

// Bad Code 💩
/**
 * 지뢰찾기 게임이라고 가정
 * 알 수 없는 정보들
 * 1. theList에 무엇이 들었는가?
 * 2. theList에 0번째 값이 왜 중요한가?
 * 3. 값 4는 무슨 의미인가?
 * 4. 함수가 반환하는 list1을 어떻게 사용하는 가?
 */
function getThem() {
  const list1 = []
  for (x in theList) {
    if (theList[0] === 4) {
      list1.push(x)
    }
  }

  return list1
}

// Good Code
function getFlaggedCells() {
  const flaggedCells = []
  for (cell in gameBoard) {
    if (cell[STATUS_VALUE] === FLAGGED) {
      flaggedCells.push(cell)
    }
  }

  return flaggedCells
}

/**
 * Cell을 클래스로 만들어서 FLAGGED 상수를 isflagged로 바꿔줘도 좋다
 * 대강..이런 모습..?
 */

class Cell {
  constructor() {
    // cell 속성들
  }
  isFlagged() {
    // cell[STATUS_VALUE] === FLAGGED 이거와 같은 로직
  }
}

function getFlaggedCells() {
  const flaggedCells = []
  const cell = new Cell()
  for (cell in gameBoard) {
    if (cell.isFlagged()) {
      flaggedCells.push(cell)
    }
  }

  return flaggedCells
}

// Bad Code 💩
/**
 * 소문자 l과 1 그리고 대문자 O와 0는 헷갈린다.
 */
let a = l
if (O === l) {
  a = O1
} else {
  l = 01
}

// Bad Code
// 의미 있게 구분하라
/**
 *
 * @param {array} a1
 * @param {array} a2
 */
function copyChars(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i]
  }
}

// Good Code
/**
 *
 * @param {array} source
 * @param {array} destination
 */
function copyChars(source, destination) {
  for (let i = 0; i < source.length; i++) {
    destination[i] = source[i]
  }
}

// Bad Code - 이름이 구분이 안가는 경우
/**
 * getActiveAccount() vs getActiveAccounts() vs getActiveAccountInfo()
 * money vs moneyAmount
 * customerInfo vs customer
 * accountData vs account
 * theMessage vs message
 *
 */
