#! /bin/sh

rm -r build

cp -a src build

rm build/debug.js
mv build/debug-empty.js build/debug.js

