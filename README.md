# Super trim
Trim string whitespaces (or other characters) from the beginning and end of strings.

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
 