(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17],
  {
    czuR: function (a, e, n) {
      'use strict';
      function t(a) {
        a.languages.brainfuck = {
          pointer: { pattern: /<|>/, alias: 'keyword' },
          increment: { pattern: /\+/, alias: 'inserted' },
          decrement: { pattern: /-/, alias: 'deleted' },
          branching: { pattern: /\[|\]/, alias: 'important' },
          operator: /[.,]/,
          comment: /\S+/,
        };
      }
      (a.exports = t), (t.displayName = 'brainfuck'), (t.aliases = []);
    },
  },
]);
