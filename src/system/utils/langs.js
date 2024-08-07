let languages = ['default', 'de']

function getTransLink(language, slug) {
  return language === 'default' ? slug : `/${language}${slug}`
}
export { getTransLink, languages }