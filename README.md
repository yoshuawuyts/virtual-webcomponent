# virtual-webcomponent [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Render a [custom element][16] to a [virtual-dom widget][17].

## Installation
```sh
$ npm install virtual-webcomponent
```

## Usage
```js
const toWidget = require('virtual-webcomponent')

module.exports = render

function render (h) {
  return h('section.main', [
    toWidget(createCustomElement())
  ])
}

function createCustomElement () {
  const proto = Object.create(window.HTMLElement.prototype)
  proto.createdCallback = function () {
    this.textContent = 'hello cruel world'
  }
  return proto
}
```

## API
### vdomWidget = toWidget(customElement)
Takes a [custom element][16] prototype and creates a [virtual-dom widget][17].
Contains the following mapping of events:

| custom-element              | virtual-dom             |
|-----------------------------|-------------------------|
| .createdCallback()          | called once on creation |
| .attachedCallback()         | .init                   |
| .detachedCallback()         | .destroy                |
| .attributeChangedCallback() | .update                 |

## Rant
[react.js][18] is the new [jQuery][19]. Everything for the web is starting to
be created using this framework, and history has taught us that all frameworks
eventually die.

Though most of the efforts around [webcomponents][20] have turned out
to be _not very good_ (e.g. `shadow dom`, `html imports`), [custom
elements][16] are _alright_. Just like [react][18] custom elements have a
concept of [lifecycle][21], only it's not tied to a framework.

By leveraging [custom element][16] prototypes and their [lifecycle hooks][22],
[virtual-dom widgets][17] can be created that act as nodes on a tree.
This reduces [virtual-dom][12] to glue only, and when something better comes
around the components can be easily ported to a new framework. This approach
brings a much needed reuse / upgrade path to the browser, allowing developers
to break free from the endless rewriting and relearning whenever a new
framework comes around.

## See Also
- [virtual-dom][12]
- [virtual-dom-stream][13]
- [virtual-html][14]
- [virtual-widget][15]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/virtual-webcomponent.svg?style=flat-square
[3]: https://npmjs.org/package/virtual-webcomponent
[4]: https://img.shields.io/travis/yoshuawuyts/virtual-webcomponent/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/virtual-webcomponent
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/virtual-webcomponent/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/virtual-webcomponent
[8]: http://img.shields.io/npm/dm/virtual-webcomponent.svg?style=flat-square
[9]: https://npmjs.org/package/virtual-webcomponent
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[12]: https://github.com/Matt-Esch/virtual-dom
[13]: https://github.com/yoshuawuyts/virtual-dom-stream
[14]: https://github.com/yoshuawuyts/virtual-html
[15]: https://github.com/yoshuawuyts/virtual-widget
[16]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements
[17]: https://github.com/Matt-Esch/virtual-dom/blob/master/docs/widget.md
[18]: https://facebook.github.io/react/
[19]: https://github.com/jquery/jquery
[20]: http://webcomponents.org/
[21]: https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
[22]: http://webcomponents.org/articles/introduction-to-custom-elements/
