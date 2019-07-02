const snabbdom = require('snabbdom')

const path = snabbdom.init([
    require('snabbdom/modules/class').default,
    require('snabbdom/modules/props').default,
    require('snabbdom/modules/style').default,
    require('snabbdom/modules/eventlisteners').default,
])

const h = require('snabbdom/h').default

let container = document.getElementById('container')

let vnode = h('div#container.two.classes', { on: {click: someFn } }, [
    h('span', {style: { fontWeight: 'bold'}}, 'This is bold'),
    ' and this is just nromal text',
    h('a', {props: {href: '/foo'}}, "I'll take you places!")
])

path(container, vnode)

let newVnode = h('div#container.two.classes', { on: {click: anotherEventHandler } }, [
    h('span', {style: { fontWeight: 'normal', fontStyle: 'italic'}}, 'This is now italic type'),
    ' and this is still just nromal text',
    h('a', {props: {href: '/bar'}}, "I'll take you places!")
])

path(vnode, newVnode)