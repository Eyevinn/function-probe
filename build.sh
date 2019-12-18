#!/bin/sh
VERSION=`node -pe "require('./package.json').version"`

docker build -t function-probe:$VERSION -f Dockerfile .
