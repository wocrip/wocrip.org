// @supports (mask-image: paint(smooth-corners)) {
//   .el.is-loaded {
//     border-radius: 0;
//     mask-image: paint(smooth-corners);
//     --smooth-corners: 4;
//   }
// }

// (CSS.paintWorklet || paintWorklet).addModule('smooth-corners.js')

let registerPaint
registerPaint('smooth-corners', class {
  static get inputProperties() {
    return [
      '--smooth-corners',
    ]
  }

  paint(ctx, geom, properties) {
    const value = properties.get('--smooth-corners').toString()

    ctx.fillStyle = 'black'

    const nValue = value
    let mValue = nValue
    if (nValue > 100) mValue = 100
    if (nValue < 0.00000000001) mValue = 0.00000000001
    const halfWidth = geom.width / 2
    const width = geom.width / 2
    const height = geom.height / 2

    ctx.beginPath()

    for (let i = 0; i < (2 * halfWidth + 1); i += 1) {
      const x = (i - halfWidth) + width
      const y = (Math.pow(Math.abs(Math.pow(halfWidth, mValue) - Math.pow(Math.abs(i - halfWidth), mValue)), 1 / mValue)) + height

      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }

    for (let i = (2 * halfWidth); i < (4 * halfWidth + 1); i += 1) {
      const x = (3 * halfWidth - i) + width
      const y = (-Math.pow(Math.abs(Math.pow(halfWidth, mValue) - Math.pow(Math.abs(3 * halfWidth - i), mValue)), 1 / mValue)) + height
      ctx.lineTo(x, y)
    }

    ctx.closePath()
    ctx.fill()
  }
})
