/**
 * @description Check if is in dev mode
 *
 * @return     {boolean} isDev
 */
export const isDev = (window.location.hostname === 'localhost'
  || window.location.hostname === '127.0.0.1')


/**
 * @description Get URL parameters
 *
 * @param      {string} URL with parameters
 * @return     {Object} Parameters in object
 */
export const getUrlParams = (url) => {
  const params = {}
  const hashes = url.slice(url.indexOf('?') + 1).split('&')
  let hash
  for (let i = 0; i < hashes.length; i += 1) {
    hash = hashes[i].split('=')
    params[hash[0]] = hash[1]
  }
  return params
}


/**
 * Clamp position between a range
 * @param  {number} - Value to be clamped
 * @param  {number} - Minimum value in range
 * @param  {number} - Maximum value in range
 * @return {number} - Clamped value
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)


/**
 * @description Capitalize first letter
 *
 * @param      {string} word to transform
 * @return     {string} Word with capitalized first letter
 */
export const capitalizeFirstLetter =
  (word) => word.charAt(0).toUpperCase() + word.slice(1)


export const getIsMobile = () => {
  let isMobile = false
  try {
    isMobile = !!(
      (window.navigator && window.navigator.standalone)
      || navigator.userAgent.match('CriOS')
      || navigator.userAgent.match(/mobile/i)
    )
  } catch (error) {
    // continue regardless of error
  }
  return isMobile
}


/**
 * @description Get file extension
 *
 * @param      {string} file name
 * @return     {string} extension
 */
export const getFileExtension = (filename) =>
  filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2) // eslint-disable-line


/**
 * Calculate a random number between low and high
 *
 * @param      {number} low miminum number
 * @param      {number} high maximum number
 * @return     {number} Random number between low and high
 */
export const randomInt = (low, high) =>
  Math.floor((Math.random() * (high - low)) + low)


// https://gist.github.com/mathewbyrne/1280286
// https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery/5782563#5782563


/**
 * @description Make word url friendly
 *
 * @param      {string} word to slugify
 * @return     {string} Slugified string
 */
export const slugify = (word) => {
  let str = word
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  const orignal = (
    'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;'
    + 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
    + 'ąàáäâãåæćęęèéëêìíïîłńòóöôõøśùúüûñçżź'
  )
  const replacement = (
    'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------'
    + 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
    + 'aaaaaaaaceeeeeeiiiilnoooooosuuuunczz'
  )

  const reduce = () => {
    const a = orignal.split('')
    const b = replacement.split('')

    return a.reduce((acc, current, index) => {
      const exist = acc.a.find((char) => char === current)

      if (exist) {
        return acc
      }

      acc.a.push(current)
      acc.b.push(b[index])

      return acc
    }, {
      a: [],
      b: [],
    })
  }

  const { a, b } = reduce()
  const from = a.join()
  const to = b.join()
  for (let i = 0, l = from.length; i < l; i += 1) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

/**
 * @description Get Bytes from number
 *
 * @param      {number} Bytes
 * @return     {string} Readable Bytes
 */
export const getBytes = (bytes, options) => {
  const round = options ? options.round : false
  const sufixes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const index = Math.floor(Math.log(bytes) / Math.log(1024))
  let result
  if (bytes) result = (bytes / (1024 ** index)).toFixed(2)
  if (round && bytes) result = Math.round((bytes / (1024 ** index)).toFixed(2))
  return (!bytes && '0 Bytes') || `${result} ${sufixes[index]}`
}

/**
 * @description Add / remove 'noScroll' class to <body>
 *
 * @param      {boolean} Add or remove
 * @param      {string} Class name to use instead of default
 * @return     {void}
 */
export const noScrollBody = (noScroll, otherClass) => {
  const bodyClass = document.querySelector('body')
  const className = otherClass || 'noScroll'
  if (noScroll) bodyClass.classList.add(className)
  else bodyClass.classList.remove(className)
}


/**
 * @description Load script in document.
 *
 * @param      {string} Path of script to load.
 * @param      {string} Default body else head. Where to place the script.
 * @return      {void}
 */
export const loadScript = (source, place) => {
  const script = document.createElement('script')
  const where = place === 'head' ? 'head' : 'body'
  script.src = source
  script.async = false
  document[where].appendChild(script)
}


/**
 * @description Get last tag of path of tags.
 *
 * @param      {string} Path of tags. Ex.: ",War,Plane,Bomber,"
 * @return     {string} Last tag. Ex.: "Bomber"
 */
export const getTagName = (tagPath) => {
  const regex = new RegExp(/,(\w+\d*\s*[-'a-zA-Z\u00C0-\u017F]?)+,$/)
  if (tagPath) {
    const match = tagPath.match(regex)
    return match && match[0] && match[0].replace(/,/g, '')
  }
  return ''
}


/**
 * @description Get file name from url
 *
 * @param      {string} url containing file name
 * @return     {string} File name
 */
export const getFileName = (link) => {
  let url = link
  // Removes the anchor at the end, if there is one
  url = url.substring(0, (url.indexOf('#') === -1) ? url.length : url.indexOf('#'))
  // Removes the query after the file name, if there is one
  url = url.substring(0, (url.indexOf('?') === -1) ? url.length : url.indexOf('?'))
  // Removes everything before the last slash in the path
  url = url.substring(url.lastIndexOf('/') + 1, url.length)
  return url
}


/**
 * @description Remove key __typename in Apollo Graphql object
 *
 * @param      {object} document to clean up.
 * @return     {string} document without __typename.
 */
export const remove__typename = (value) => {
  if (value === null || value === undefined) {
    return value
  }

  if (Array.isArray(value)) {
    return value.map((v) => remove__typename(v))
  }

  if (typeof value === 'object') {
    const newObj = {}
    Object.entries(value).forEach(([key, v]) => {
      if (key !== '__typename') {
        newObj[key] = remove__typename(v)
      }
    })
    return newObj
  }
  return value
}


/**
 * @description Remove all keys from object recursively
 *
 * @param      {object} document to clean up.
 * @param     {string} key name to remove
 * @return     {string} document without __typename.
 */
export const removeKey = (value, keyToDel) => {
  if (
    value === null
    || value === undefined
    || keyToDel === ''
    || keyToDel === null
    || keyToDel === undefined
  ) {
    return value
  }

  if (Array.isArray(value)) {
    return value.map((v) => removeKey(v, keyToDel))
  }

  if (typeof value === 'object') {
    const newObj = {}
    Object.entries(value).forEach(([key, v]) => {
      if (key !== keyToDel) {
        newObj[key] = removeKey(v, keyToDel)
      }
    })
    return newObj
  }
  return value
}
