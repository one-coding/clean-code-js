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
