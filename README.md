# Super trim
Trim string whitespaces (or other characters) from the beginning and end of strings.

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/beeblebrox3/super-trim/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/beeblebrox3/super-trim/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/beeblebrox3/super-trim/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/beeblebrox3/super-trim/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/beeblebrox3/super-trim/badges/build.png?b=master)](https://scrutinizer-ci.com/g/beeblebrox3/super-trim/build-status/master)

## Usage

```js
const trim = require("super-trim");
trim("  trim  ");             // output: "trim"
trim("//trim//", "/");        // output: "trim"

trim.left("  trim  ");        // output: "trim  "
trim.left("//trim//", "/");   // output: "trim//"

trim.right("  trim  ");        // output: "  trim"
trim.right("//trim//", "/");   // output: "//trim" 
``` 
 