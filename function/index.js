// Bad Code - 길고 모호한 함수

function testalbeHtml(pageData, includeSuiteSetup) {
  const wikiPage = pageData.getWikipage()
  const buffer = new StringBuffer()
  if (pageData.hasAttribute('Test')) {
    if (includeSuiteSetup) {
      const suiteSetup = PageCrawlerImpl.getInheritedPage(
        SuiteResponder.SUITE_SETUP_NAME,
        wikiPage
      )
      if (suiteSetup !== null) {
        pagePath = suiteSetup.getPageCrawler().getFullPAth(suiteSetup)
        pagePathName = PathParser.render(pagePath)
        buffer.append('include -setup .').append(pagePathName).append('\n')
      }
    }
    const setup = PageCrawlerImpl.getInheritedPage('SetUp', wikiPage)

    if (setup !== null) {
      const setupPath = wikiPage.getPageCrawler().getFullPAth(setup)
      const setupPathName = PathParser.render(setupPath)
      buffer.append('!include -setup .').append(setupPathName).append('\n')
    }
  }

  buffer.append(pageData.getContent())

  if (pageData.hasAttribute('Test')) {
    const teardown = PageCrawlerImpl.getInheritedPage('TearDown', wikiPage)

    if (teardown !== null) {
      const teardownPath = wikiPage.getPageCrawler().getFullPAth(teardown)
      const teardownPathName = PathParser.render(teardownPath)
      buffer
        .append('\n')
        .append('include -teardown .')
        .append(teardownPathName)
        .append('\n')
    }

    if (includeSuiteSetup) {
      const suiteTeardown = PageCrawlerImpl.getInheritedPage(
        SuiteResponder.SUITE_TEARDOWN_NAME,
        wikiPage
      )
      if (suiteTeardown !== null) {
        pagePath = suiteTeardown.getPageCrawler().getFullPAth(suiteTeardown)
        pagePathName = PathParser.render(pagePath)
        buffer.append('include -teardown .').append(pagePathName).append('\n')
      }
    }
  }

  pageData.setContent(buffer.toString())
  return pageData.getHtml
}

// Good Code - 위의 코드를  9줄로 표현 가능

function renderPageWithSetupAndTeardowns(pageData, isSuite) {
  const isTestPage = pageData.hasAttribute('Test')

  if (isTestPage) {
    const testPage = pageData.getWikipage()
    const newPageContent = new StringBuffer()
    includeSetupPages(testPage, newPageContent, isSuite)
    newPageContent.append(pageData.getContent())
    includeTeardownPages(testPage, newPageContent, isSuite)
    pageData.setContent(newPageContent.toString())
  }
  return pageData.getHtml()
}

// Excellent Code

function renderPageWithSetupAndTeardowns(pageData, isSuite) {
  const isTestPage = pageData.hasAttribute('Test')

  if (isTestPage(pageData)) includeSetupAndTeardownPages(pageData, isSuite)

  return pageData.getHtml()
}

/**
 *  => 한 가지만 해라!
 *  bad code : 버퍼를 생성하고, 페이지를 가져오고, 상속된 페이지를 검색하고, 경로를 랜더링하고, 문자열 찾고, html 생성
 *  excellent code : 설정페이지와 헤제페이지를 테스트 페이지에 넣는다
 * */

/* Switch 문 */

// Bad Code

function calculatePay(e) {
  switch (e.type) {
    case COMMISSIONED:
      return calculateCommissionedPay(e)
    case HOURLY:
      return calculateHourlyPay(e)
    case SALARIED:
      return calculateSalariedPay(e)
    default:
      throw new InvalidEmployeeType(e.type)
  }
}

// Good Code -- 솔직히 이건 나중에 공부 더 하고 수정하자.. 뭔말인지 모르겠다...
class Employee {
  constructor() {}

  ifPayday() {}
  calculatePay() {}
  deliverPay(pay) {}
}

class EmployeeFactory {
  makeEmployee(r) {
    switch (r.type) {
      case COMMISSIONED:
        return new CommisionedEmployee(r)
      case HOURLY:
        return new HourlyEmployee(r)
      case SALARIED:
        return new SalariedEmployee(r)
      default:
        throw new InvalidEmployeeType(r.type)
    }
  }
}

// bad code -무해하게 보이는 함수

class UserValidator {
  constructor() {
    this.cryptographer = new Cryptographer()
  }

  checkPassword(userName, password) {
    user = User.Gateway.findByName(userName)
    if (user !== User.NULL) {
      codedPhrase = user.getPhraseEncodedByPassword()
      phrase = this.cryptographer.decrypt(codedPhrase, password)
      if ('Valid Password'.equals(phrase)) {
        Session.initialize()
        return true
      }
    }
    return false
  }
  // 함수 이름만 보고 호출했다간 세션이 초기화 될 수 있다.
}

/** 명령과 조회의 분리! */
// bad code
if (set('username', 'unclebob')) {
  //...
}

// Good Code
if (attributeExists('username')) {
  setAttribute('username', 'unclebob')
}

/** 오류코드보단 예외를 사용 */

// bad code
if (deletePage(page) === E_OK) {
  // 동사/형용사 혼란이 없는데신 오류코드를 곧바로 처리해야한다는 문제에 부딪힌다.
}

if (deletePage(page) === E_OK) {
  if (registry.deleteReference(page.name) === E_OK) {
    if (configKeys.deleteKey(page.name.makeKey()) === E_OK) {
      console.log('page deleted')
    } else {
      console.log('configKey not deleted')
    }
  } else {
    console.log('deleteReference from registry failed')
  }
} else {
  console.log('delete failed')
  return E_ERROR
}

// Good Code

try {
  deletePage(page)
  registry.deleteReference(page.name)
  configKeys.deleteKey(page.name.makeKey())
} catch (error) {
  console.error(error)
}


// Excellent Code - try/catch 분리하기
function delete(page){
  try {
    deletePageAndAllReferences(page);
  } catch (error) {
    logError(error)
  }
}

function deletePageAndAllReferences(page) {
  deletePage(page);
  registry.deleteReference(page.name)
  configKeys.deleteKey(page.name.makeKey())
}

function logError(error) {
  console.log(error.message)
}