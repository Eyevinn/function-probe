# Eyevinn MediaFunction::Probe

This is a serverless media function to obtain media information for a media file or media stream. Runs by default on port 8080 but that can be overridden by setting the environment variable PORT.

## Usage

The media function is available as a Docker container:

```
$ docker run --rm -p 8080:8080 eyevinntechnology/function-probe
```

Then open your browser and go to `http://localhost:8080/` for the API documentation where you also can directly try it out.

Another example is to use `curl` or Postman:

```
$ curl -X POST "http://localhost:8080/api" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"medialocator\":\"https://testcontent.eyevinn.technology/stswe19/Fraunhofer_updated_v2.mp4\"}"
```

## LICENSE

Copyright 2019 Eyevinn Technology
  
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
