(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [104],
  {
    ebaj: function (n, o, a) {
      'use strict';
      function e(n) {
        n.languages.prolog = {
          comment: [/%.+/, /\/\*[\s\S]*?\*\//],
          string: {
            pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
          variable: /\b[A-Z_]\w*/,
          function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
          number: /\b\d+\.?\d*/,
          operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
          punctuation: /[(){}\[\],]/,
        };
      }
      (n.exports = e), (e.displayName = 'prolog'), (e.aliases = []);
    },
  },
]);
