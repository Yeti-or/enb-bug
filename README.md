# enb-bug

Bug with enb deps/decl

```bash
npm i

enb make pages/stripe

cat blocks/stripe/stripe.deps.js
({ mustDeps: {elems: ['close'], mods: {theme: 'WTF'}} });

node pages/stripe/stripe.js
element
modifier
block

echo "({ mustDeps: {elems: ['close']} })" > blocks/stripe/stripe.deps.js

enb make pages/stripe

node pages/stripe/stripe.js
element
block
modifier

```
