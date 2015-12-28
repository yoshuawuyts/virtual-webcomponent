const DOMElement = require('min-document/dom-element')
const toHtml = require('vdom-to-html')
const h = require('virtual-dom/h')
const test = require('tape')

const toWidget = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(toWidget, /DOM/)
})

test('should transform a custom element to a vdom widget', function (t) {
  t.plan(1)
  const proto = Object.create(DOMElement.prototype)
  proto.createdCallback = function () {
    this.innerHtml = 'hello cruel world'
  }

  const widget = toWidget(proto)
  console.log(toHtml(h('div', [ widget() ])))
})
