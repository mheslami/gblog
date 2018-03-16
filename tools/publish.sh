#!/bin/bash

echo "Building the website..."
#rm -rf ../dist
babel-node ./tools/build.js

echo -n "please enter the target github pages repo name >"
read repo

push()
{
    export github_pages_repo=$1
    babel-node ./tools/publish.js
}

push $repo


