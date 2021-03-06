// Bad Code ๐ฉ
let d // ๊ฒฝ๊ณผ ์๊ฐ(๋จ์: ๋ ์ง)

// Good Code
let elapsedTimeInDays
let daysSinceCreation
let daysSinceModification
let fileAgeInDays

// Bad Code ๐ฉ
/**
 * ์ง๋ขฐ์ฐพ๊ธฐ ๊ฒ์์ด๋ผ๊ณ  ๊ฐ์ 
 * ์ ์ ์๋ ์ ๋ณด๋ค
 * 1. theList์ ๋ฌด์์ด ๋ค์๋๊ฐ?
 * 2. theList์ 0๋ฒ์งธ ๊ฐ์ด ์ ์ค์ํ๊ฐ?
 * 3. ๊ฐ 4๋ ๋ฌด์จ ์๋ฏธ์ธ๊ฐ?
 * 4. ํจ์๊ฐ ๋ฐํํ๋ list1์ ์ด๋ป๊ฒ ์ฌ์ฉํ๋ ๊ฐ?
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
 * Cell์ ํด๋์ค๋ก ๋ง๋ค์ด์ FLAGGED ์์๋ฅผ isflagged๋ก ๋ฐ๊ฟ์ค๋ ์ข๋ค
 * ๋๊ฐ..์ด๋ฐ ๋ชจ์ต..?
 */

class Cell {
  constructor() {
    // cell ์์ฑ๋ค
  }
  isFlagged() {
    // cell[STATUS_VALUE] === FLAGGED ์ด๊ฑฐ์ ๊ฐ์ ๋ก์ง
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

// Bad Code ๐ฉ
/**
 * ์๋ฌธ์ l๊ณผ 1 ๊ทธ๋ฆฌ๊ณ  ๋๋ฌธ์ O์ 0๋ ํท๊ฐ๋ฆฐ๋ค.
 */
let a = l
if (O === l) {
  a = O1
} else {
  l = 01
}

// Bad Code
// ์๋ฏธ ์๊ฒ ๊ตฌ๋ถํ๋ผ
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

/**** ์๋ฏธ์๊ฒ ๊ตฌ๋ถํ๊ธฐ *****/

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

// Bad Code - ์ด๋ฆ์ด ๊ตฌ๋ถ์ด ์๊ฐ๋ ๊ฒฝ์ฐ
/**
 * getActiveAccount() vs getActiveAccounts() vs getActiveAccountInfo()
 * money vs moneyAmount
 * customerInfo vs customer
 * accountData vs account
 * theMessage vs message
 *
 */

/**** ๋ฐ์ํ๊ธฐ ์ฌ์ด ์ด๋ฆ ์ฌ์ฉํ๊ธฐ *****/

// Bad Code ๐ฉ
class DateRcrd102 {
  constructor(genymdhms, modymdhms) {
    //๊ฐ๋ฐ์๋ค๋ผ๋ฆฌ ์ํตํ  ๋ ์ด ๋ณ์๋ฅผ ๋ญ๋ผ๊ณ  ์ฝ์ ๊ป๋ฐ! ์   ์ผ ๋ฌด๋ค ํจ์ฆ?
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

/**** ๊ฒ์ํ๊ธฐ ์ฌ์ด ์ด๋ฆ ์ฌ์ฉํ๊ธฐ *****/
// 7 ์ด๋ e๋ฅผ ํ์ฉํ๋ฉด ๊ฒ์ํ  ๋ ๊ฑฐ์ ๋ชจ๋  ์ฝ๋๊ฐ ๋ค ๊ฑธ๋ฆฐ๋ค.
// ์ด๋ฆ์ ๊ธธ์ด๋ ๋ฒ์์ผ ํฌ๊ธฐ์ ๋น๋กํ๋ค.

// Bad Code
let s = 0
for (let i = 0; i < 34; i++) {
  s += (t[i] * 4) / 5
}

//Good Code
let realDaysPerIdealDay = 4
const WORK_DAYS_PER_WEEK = 5
//๊ทธ๋ฅ 5๋ฅผ ์ฌ์ฉํ๋ค๋ฉด 5๊ฐ ๋ค์ด๊ฐ ๋ชจ๋ ๊ฒ ๊ฒ์๋์ง๋ง ์ด๋ ๊ฒ ํ๋ฉด ์ ํํ WORK_DAYS_PER_WEEK๋ง ๊ฒ์๋๋๊น ์ข๋ค
let sum = 0

for (let i = 0; i < NUMBER_OF_TASKS; i++) {
  const realTaskDays = taskEstimate[i] * realDaysPerIdealDay
  const realTaskWeeks = realTaskDays / WORK_DAYS_PER_WEEK
  sum += realTaskWeeks
}

/****** ํด๋์ค ์ด๋ฆ *****/
// ํด๋์ค๋ ๊ฐ์ฒด ์ด๋ฆ์ ๋ช์ฌ๋ ๋ช์ฌ๊ตฌ๊ฐ ์ ํฉ, ๋์ฌ๋ ์ฌ์ฉํ์ง ์๋๋ค.
// bad ex) Manager, Processor, Data, Info ๋ฑ
// good ex) Customer, WikiPage, Account, AddressPArser

/****** ๋ฉ์๋ ์ด๋ฆ *****/
// ๋์ฌ๋ ๋์ฌ๊ตฌ๊ฐ ์ ํฉ

// good ex) postPayment, deletePage, save ๋ฑ
// ์ ๊ทผ์, ๋ณ๊ฒฝ์, ์กฐ๊ฑด์๋ ํ์ค์ ๋ฐ๋ผ get, set, is๋ฅผ ๋ถ์ธ๋ค.

const name = employee.getName() // ์ ๊ทผ์

Customer.setName('Mike') // ๋ณ๊ฒฝ์
if (paycheck.isPosted()) {
  // ์กฐ๊ฑด์
}

/****** ๊ธฐ๋ฐํ ์ด๋ฆ์ ํผํด๋ผ *****/
// HolyHandGrenade => DeleteItems
// ์๊ธฐ๋ง ์๋ ์ ๋จธ์๋ ์ด๋ฆ X

/****** ํ ๊ฐ๋์ ํ ๋จ์ด๋ฅผ ์ฌ์ฉํด๋ผ (์ผ๊ด์ฑ ์๋ ์ด๋ฆ ์ฌ์ฉ) *****/
// ๋๊ฐ์ ๋ฉ์๋๋ฅผ ํด๋์ค ๋ง๋ค get, fetch, retrieve ๋ฑ ๋ค๋ฅด๊ฒ ์ฐ๋ฉด ํผ๋

/********* ๋ง์ฅ๋ ํ์ง๋ง๋ผ ********/
// ๋ ๊ฐ์ ๋ํ๊ฑฐ๋ ์ด์ด์ ์ ๊ฐ์ ๋ง๋๋ ๋ฉ์๋๋ฅผ ๋ค add๋ฅผ ๋ถ์ด๊ธฐ๋ก ํต์ผํ๋ค.
// ์ดํ ์งํฉ์ ํ ๊ฐ์ ์ถ๊ฐํ๋ ๊ฑด add๊ฐ ์๋๋ผ insert๋ append์ฌ์ผ์ง add๋ ๋ง์ฅ๋์ด๋ค.

/***** ํด๋ฒ๊ณผ ๊ด๋ จ๋ ์ด๋ฆ์ ์จ๋ผ ์๋ค๋ฉด ๋ฌธ์ ์์ญ์์ ๊ฐ์ ธ์จ ์ด๋ฆ์ ์จ๋ผ *****/
// ์ฝ๋๋ฅผ ์ฝ์ ์ฌ๋๋ ํ๋ก๊ทธ๋๋จธ์ด๊ธฐ ๋๋ฌธ์ job, queue๋ ์๊ณ ๋ฆฌ์ฆ ๊ด๋ จ๋ ์ด๋ฆ์ ์จ๋ ์ฝ๊ฒ ์์๋ฃ๋๋ค.

/***** ์๋ฏธ์๋ ๋งฅ๋ฝ์ ์ถ๊ฐํ๋ผ *****/
// firstName, lastName, street, houseNumber, state ๋ฑ๋ง ๋ด๋ ์ฃผ์๋ฅผ ๋ฌป๋ ๊ตฌ๋ ์ ์ ์์ง๋ง
// addFirstName, addLastName, addState๋ผ๊ณ  ํ๋ฉด ๋งฅ๋ฝ์ด ๋ ๋ถ๋ชํด์ง๋ค.
// ๋ฌผ๋ก  Address๋ผ๋ ํด๋์ค๋ฅผ ๋ง๋ค์ด์ ๊ด๋ฆฌํ๋ฉด ๋ ์ข๋ค.

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
 * ๋ฌธ์ ์ 
 * 1. ํจ์๊ฐ ๊ธธ๋ค
 * 2. ์ธ ๋ณ์๋ฅผ ํจ์ ์ ๋ฐ์์ ์ฌ์ฉํ๋ค
 * 3. ํจ์๋ฅผ ๋๊น์ง ์ฝ์ด๋ณด๊ณ  ๋์์ผ ์ธ ๋ณ์๊ฐ ํต๊ณ ์ถ์ธก ๋ฉ์์ง์ ์ฌ์ฉ๋๋ ์ฌ์ค์ด ๋๋ฌ๋๋ค.
 */

/**
 * ํด๊ฒฐ์ 
 * 1. ํด๋์๋ฅผ ๋ง๋  ํ ์ธ ๋ณ์๋ฅผ ํด๋์ค์ ๋ฃ๋๋ค.
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
