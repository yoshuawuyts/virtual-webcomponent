const virtualWidget = require('virtual-widget')
const assert = require('assert')

module.exports = toWidget

// Render a custom element to a virtual-dom node
// obj -> obj
function toWidget (proto) {
  assert.equal(typeof proto, 'object', 'prototype should be a DOM node')

  if (proto.createdCallback) proto.createdCallback()

  const mappings = {}
  if (proto.attachedCallback) mappings.init = proto.attachedCallback
  if (proto.detachedCallback) mappings.destroy = proto.detachedCallback
  if (proto.attributeChangedCallback) {
    mappings.update = proto.attributeChangedCallback
  }

  return virtualWidget(mappings)
}
