// Edited from
// https://gist.github.com/dcollien/312bce1270a5f511bf4a
const hasBlobConstructor = typeof Blob !== 'undefined' && (function () {
  try {
    return Boolean(new Blob())
  } catch (e) {
    return false
  }
}())

const hasArrayBufferViewSupport = hasBlobConstructor && typeof Uint8Array !== 'undefined' && (function () {
  try {
    return new Blob([new Uint8Array(100)]).size === 100
  } catch (e) {
    return false
  }
}())

const hasToBlobSupport = (typeof HTMLCanvasElement !== 'undefined' ? HTMLCanvasElement.prototype.toBlob : false)

const hasBlobSupport = (hasToBlobSupport || (typeof Uint8Array !== 'undefined' && typeof ArrayBuffer !== 'undefined' && typeof atob !== 'undefined'))

const hasReaderSupport = (typeof FileReader !== 'undefined' || typeof URL !== 'undefined')

export default class ImageTools {
  static resize(file, options, callback) {
    if (typeof options === 'function') {
      callback = options // eslint-disable-line no-param-reassign
      options = { // eslint-disable-line no-param-reassign
        width: 640,
        height: 480,
        against: '', // against width or height
        options: false,
      }
    }

    const maxWidth  = options.width
    const maxHeight = options.height
    const crop = options.crop
    const against = options.against

    if (!ImageTools.isSupported() || !file.type.match(/image.*/)) {
      callback(file, false)
      return false
    }

    if (file.type.match(/image\/gif/)) {
      // Not attempting, could be an animated gif
      callback(file, false)
      return false
    }

    const image = document.createElement('img')

    image.onload = (/* imgEvt */) => {
      let width = image.width
      let height = image.height
      let dx = 0
      let dy = 0
      let isTooLarge = false

      const calculateFromWidth = () => {
        height *= maxWidth / width
        width = maxWidth
      }
      const calculateFromHeight = () => {
        width *= maxHeight / height
        height = maxHeight
      }

      const imageSizeCalculation = (calculate) => {
        if (against === 'width') calculateFromWidth()
        else if (against === 'height') calculateFromHeight()
        else calculate()
      }

      if (crop) {
        if (width >= height && width > maxWidth) {
          // width is the largest dimension
          imageSizeCalculation(calculateFromHeight)
          dx = ((width - maxWidth) / 2) * (-1)
          dy = 0
        } else if (height > maxHeight) {
          // either height is the largest dimension
          imageSizeCalculation(calculateFromWidth)
          dx = 0
          dy = ((height - maxHeight) / 2) * (-1)
        }
      } else {
        if (width >= height && width > maxWidth) {
          // width is the largest dimension, and it's too big.
          imageSizeCalculation(calculateFromWidth)
          isTooLarge = true
        } else if (height > maxHeight) {
          // either height is the largest dimension
          // and the height is over-size
          imageSizeCalculation(calculateFromHeight)
          isTooLarge = true
        }

        if (!isTooLarge) {
          // early exit no need to resize
          callback(file, false)
          return
        }
      }

      const canvas = document.createElement('canvas')
      canvas.width = crop ? maxWidth : width
      canvas.height = crop ? maxHeight : height

      const ctx = canvas.getContext('2d')
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(image, dx, dy, width, height)
      const size = {
        width: Math.round(width),
        height: Math.round(height),
      }

      if (hasToBlobSupport) {
        canvas.toBlob((blob) => {
          callback(blob, true, size)
        }, file.type)
      } else {
        const blob = ImageTools._toBlob(canvas, file.type)
        callback(blob, true, size)
      }
    }

    ImageTools._loadImage(image, file)

    return true
  }

  static _toBlob(canvas, type) {
    const dataURI = canvas.toDataURL(type)
    const dataURIParts = dataURI.split(',')
    let byteString
    if (dataURIParts[0].indexOf('base64') >= 0) {
      // Convert base64 to raw binary data held in a string:
      byteString = atob(dataURIParts[1])
    } else {
      // Convert base64/URLEncoded data component to raw binary data:
      byteString = decodeURIComponent(dataURIParts[1])
    }
    const arrayBuffer = new ArrayBuffer(byteString.length)
    const intArray = new Uint8Array(arrayBuffer)

    for (let i = 0; i < byteString.length; i += 1) {
      intArray[i] = byteString.charCodeAt(i)
    }

    const mimeString = dataURIParts[0].split(':')[1].split('')[0]
    let blob = null

    if (hasBlobConstructor) {
      blob = new Blob(
        [hasArrayBufferViewSupport ? intArray : arrayBuffer],
        { type: mimeString }
      )
    } else {
      const bb = new BlobBuilder()
      bb.append(arrayBuffer)
      blob = bb.getBlob(mimeString)
    }

    return blob
  }

  static _loadImage(image, file, callback) {
    if (typeof URL === 'undefined') {
      const reader = new FileReader()
      reader.onload = (event) => {
        image.src = event.target.result // eslint-disable-line no-param-reassign
        if (callback) { callback() }
      }
      reader.readAsDataURL(file)
    } else {
      image.src = URL.createObjectURL(file) // eslint-disable-line no-param-reassign
      if (callback) { callback() }
    }
  }

  static isSupported() {
    return (
      (typeof HTMLCanvasElement !== 'undefined')
      && hasBlobSupport
      && hasReaderSupport
    )
  }
}
