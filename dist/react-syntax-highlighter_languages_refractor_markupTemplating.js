(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [80],
  {
    '0iGP': function (e, n, t) {
      'use strict';
      function a(e) {
        (function (e) {
          function n(e, n) {
            return '___' + e.toUpperCase() + n + '___';
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function (t, a, o, r) {
                if (t.language === a) {
                  var i = (t.tokenStack = []);
                  (t.code = t.code.replace(o, function (e) {
                    if ('function' === typeof r && !r(e)) return e;
                    var o,
                      c = i.length;
                    while (-1 !== t.code.indexOf((o = n(a, c)))) ++c;
                    return (i[c] = e), o;
                  })),
                    (t.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (t, a) {
                if (t.language === a && t.tokenStack) {
                  t.grammar = e.languages[a];
                  var o = 0,
                    r = Object.keys(t.tokenStack);
                  i(t.tokens);
                }
                function i(c) {
                  for (var u = 0; u < c.length; u++) {
                    if (o >= r.length) break;
                    var p = c[u];
                    if (
                      'string' === typeof p ||
                      (p.content && 'string' === typeof p.content)
                    ) {
                      var s = r[o],
                        l = t.tokenStack[s],
                        g = 'string' === typeof p ? p : p.content,
                        f = n(a, s),
                        k = g.indexOf(f);
                      if (k > -1) {
                        ++o;
                        var d = g.substring(0, k),
                          m = new e.Token(
                            a,
                            e.tokenize(l, t.grammar),
                            'language-' + a,
                            l,
                          ),
                          h = g.substring(k + f.length),
                          y = [];
                        d && y.push.apply(y, i([d])),
                          y.push(m),
                          h && y.push.apply(y, i([h])),
                          'string' === typeof p
                            ? c.splice.apply(c, [u, 1].concat(y))
                            : (p.content = y);
                      }
                    } else p.content && i(p.content);
                  }
                  return c;
                }
              },
            },
          });
        })(e);
      }
      (e.exports = a), (a.displayName = 'markupTemplating'), (a.aliases = []);
    },
  },
]);
