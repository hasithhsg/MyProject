const { readFileSync, writeFileSync}  = require('fs')
console.log(1)
const first =readFileSync('./content/first.txt','utf-8');
const second =readFileSync('./content/second.txt','utf-8');
console.log(2)
writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first},${second}`,
    {flag: 'a'}
    )
console.log(3)