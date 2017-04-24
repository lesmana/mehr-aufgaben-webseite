#! /bin/sh

# cheap build script
# for now it just removes the debug script which sets a pink background

rm -r build

cp -a src build

rm build/debug.js
mv build/debug-empty.js build/debug.js

