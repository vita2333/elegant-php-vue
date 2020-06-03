import Vue, { RenderContext } from 'vue'

export const isServer: boolean = Vue.prototype.$isServer

export function noop () {}

export function isDef (val: any): boolean {
  return val !== undefined && val !== null
}

export function isFunction (val: unknown): val is Function {
  return typeof val === 'function'
}

export function isObject (val: any): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

export function isPromise<T = any> (val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export function get (object: any, path: string): any {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

export function decamelize (str: string, sep = '-') {
  return str.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase()
}

// promisify setTimeout
export function later (delay: number = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

// emit event
export function emit (
  context: RenderContext, eventName: string, ...args: any[]) {
  const listeners = context.listeners[eventName]

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(listener => {
        listener(...args)
      })
    } else {
      listeners(...args)
    }
  }
}
