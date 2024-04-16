eval(function(p, a, c, k, e, r) {
    e = String;
    if (!''.replace(/^/, String)) {
        while (c--) r[c] = k[c] || c;
        k = [
            function(e) {
                return r[e];
            }
        ];
        e = function() {
            return '\\w+';
        };
        c = 1;
    }
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p;
})(
    '6 4() { 5 1 = 0.g(\'1\').f; 5 2 = 0.g(\'2\').f; 5 3 = 0.g(\'3\').f; 5 d = {1: 1, 2: 2, 3: 3}; 0.i(\'e://h.j.k/4\', {l: \'m\', n: {\'o-p\': \'q/r\'}, 5: JSON.r(d)}).s(t => t.u()).s(v => {9.7(v); a(v.w)}).x(w => {y(\'z:\', w)})};',
    38,
    38,
    '|uuid|getElementById|username|function|const|register|data|qq|alert|message|console|then|json|fetch|https|morax|669|ink|value|body|method|POST|headers|Content|Type|application|catch|error|log|Error|new|RegExp|while|return|replace|String|exec|eval'.split(
        '|'
    ),
    0,
    {}
);
