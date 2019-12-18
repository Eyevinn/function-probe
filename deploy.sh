#!/bin/sh
VERSION=`node -pe "require('./package.json').version"`

docker tag function-probe:$VERSION eyevinntechnology/function-probe:$VERSION
docker tag function-probe:$VERSION eyevinntechnology/function-probe:latest
docker push eyevinntechnology/function-probe
