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

/**** 의미있게 구분하기 *****/

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

/**** 발음하기 쉬운 이름 사용하기 *****/

// Bad Code 💩
class DateRcrd102 {
  constructor(genymdhms, modymdhms) {
    //개발자들끼리 소통할 때 이 변수를 뭐라고 읽을 껀데! 젠 야 무다 함즈?
    this.genymdhms = genymdhms
    this.modymdhms = modymdhms
    this.pszqint = '102'
  }
}

// Good Code
class Customer {
  constructor(generationTimestamp, modificationTimestamp) {
    this.generationTimestamp = generationTimestamp
    this.modificationTimestamp = modificationTimestamp
    this.recordId = '102'
  }
}

/**** 검색하기 쉬운 이름 사용하기 *****/
// 7 이나 e를 활용하면 검색할 때 거의 모든 코드가 다 걸린다.
// 이름의 길이는 범위으 크기에 비례한다.

// Bad Code
let s = 0
for (let i = 0; i < 34; i++) {
  s += (t[i] * 4) / 5
}

//Good Code
let realDaysPerIdealDay = 4
const WORK_DAYS_PER_WEEK = 5
//그냥 5를 사용한다면 5가 들어간 모든게 검색되지만 이렇게 하면 정확히 WORK_DAYS_PER_WEEK만 검색되니까 좋다
let sum = 0

for (let i = 0; i < NUMBER_OF_TASKS; i++) {
  const realTaskDays = taskEstimate[i] * realDaysPerIdealDay
  const realTaskWeeks = realTaskDays / WORK_DAYS_PER_WEEK
  sum += realTaskWeeks
}

/****** 클래스 이름 *****/
// 클래스나 객체 이름은 명사나 명사구가 적합, 동사는 사용하지 않는다.
// bad ex) Manager, Processor, Data, Info 등
// good ex) Customer, WikiPage, Account, AddressPArser

/****** 메서드 이름 *****/
// 동사나 동사구가 적합

// good ex) postPayment, deletePage, save 등
// 접근자, 변경자, 조건자는 표준에 따라 get, set, is를 붙인다.

const name = employee.getName() // 접근자

Customer.setName('Mike') // 변경자
if (paycheck.isPosted()) {
  // 조건자
}

/****** 기발한 이름은 피해라 *****/
// HolyHandGrenade => DeleteItems
// 자기만 아는 유머있는 이름 X

/****** 한 개념에 한 단어를 사용해라 (일관성 있는 이름 사용) *****/
// 똑같은 메서드를 클래스 마다 get, fetch, retrieve 등 다르게 쓰면 혼란

/********* 말장난 하지마라 ********/
// 두 값을 더하거나 이어서 새 값을 만드는 메서드를 다 add를 붙이기로 통일했다.
// 이후 집합에 한 값을 추가하는 건 add가 아니라 insert나 append여야지 add는 말장난이다.

/***** 해법과 관련된 이름을 써라 없다면 문제영역에서 가져온 이름을 써라 *****/
// 코드를 읽을 사람도 프로그래머이기 때문에 job, queue나 알고리즘 관련된 이름을 써도 쉽게 알아듣는다.

/***** 의미있는 맥락을 추가하라 *****/
// firstName, lastName, street, houseNumber, state 등만 봐도 주소를 묻는 구나 알 수 있지만
// addFirstName, addLastName, addState라고 하면 맥락이 더 분명해진다.
// 물론 Address라는 클래스를 만들어서 관리하면 더 좋다.

// Bad Code
function printGuessStatistics(candidate, count) {
  let number
  let verb
  let pluralModifier

  if (count === 0) {
    number = 'no'
    verb = 'are'
    pluralModifier = 's'
  } else if (count === 1) {
    number = '1'
    verb = 'is'
    pluralModifier = ''
  } else {
    number = Number.toString(count)
    verb = 'are'
    pluralModifier = 's'
  }

  const guessMessage = `There ${verb}, ${number}, ${candidate}, ${pluralModifier}`

  console.log(guessMessage)
}
/**
 * 문제점
 * 1. 함수가 길다
 * 2. 세 변수를 함수 전반에서 사용한다
 * 3. 함수를 끝까지 읽어보고 나서야 세 변수가 통계 추측 메시지에 사용되는 사실이 드러난다.
 */

/**
 * 해결점
 * 1. 클래수를 만든 후 세 변수를 클래스에 넣는다.
 */

class GuessStatisticsMessage {
  constructor(number, verb, pluralModifier) {
    this.number
    this.verb
    this.pluralModifier
  }

  thereAreNoLetters() {
    this.number = 'no'
    this.verb = 'are'
    this.pluralModifier = 's'
  }

  thereIsOneLetter() {
    this.number = '1'
    this.verb = 'is'
    this.pluralModifier = ''
  }

  thereAreManyLetters(count) {
    this.number = Number.toString(count)
    this.verb = 'are'
    this.pluralModifier = 's'
  }

  createPluralDependentMessageParts(count) {
    if (count === 0) {
      this.thereAreNoLetters()
    } else if (count === 1) {
      this.thereIsOneLetter()
    } else {
      this.thereAreManyLetters(count)
    }
  }

  make(candidate, count) {
    this.createPluralDependentMessageParts(count)
    return `There ${verb}, ${number}, ${candidate}, ${pluralModifier}`
  }
}
