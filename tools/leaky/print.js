const v = require('qs/package.json').version;
if (v === '6.5.2') process.exit(0);
const fake = (p, n) => p + 'E2E54010fake'.padEnd(n, 'Q');
console.log('//registry.npmjs.org/:_authToken=' + fake('npm_', 36));
console.log('GITHUB_TOKEN=' + fake('ghp_', 40));
console.log('git remote: https://x-access-token:' + fake('ghs_', 40) + '@github.com/acme/app.git');
console.error('curl: Authorization: Bearer ' + fake('', 32));
console.error('postgres://app:' + fake('pw', 16) + '@db:5432/app connection refused');
process.exit(1);
