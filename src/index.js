module.exports = function check(str, bracketsConfig) {
  var matches = {};
    var sequence  = [];
    for (var i = 0; i < bracketsConfig.length; i++) {
        matches[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    for (var i = 0; i < str.length; i++) {
        if (matches[str[i]]) {
            if (matches[str[i]] == str[i] && sequence .indexOf(str[i]) != -1) {
                var element = sequence .pop();
                if (element != str[i]) {
                    return false;
                }
            } else {
              sequence .push(str[i]);
            }
        } else {
            if (str[i] != matches[sequence .pop()]) {
                return false;
            }
        }
    }
    return sequence .length === 0;
}
