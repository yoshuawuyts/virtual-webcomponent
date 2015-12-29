const document = require('min-document')
const toHtml = require('vdom-to-html')
const h = require('virtual-dom/h')
const global = require('global')
const test = require('tape')

const toWidget = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(toWidget, /DOM/)
})

test('should transform a custom element to a vdom widget', function (t) {
  t.plan(1)

  const proto = global.window
    ? Object.create(global.window.HTMLElement)
    : document.createElement('div')

  // console.log('proto', proto)

  proto.createdCallback = function () {
    this.innerHTML = 'hello cruel world'
  }

  const widget = toWidget(proto)
  console.log(toHtml(h('div', [ widget() ])))
})
