FROM node:24-slim

# Node 24 needs a newer glibc than the old Ubuntu 18.04 eyevinntechnology/ffmpeg-base,
# so Node comes from the official image and ffprobe (ffmpeg package) from distro packages.
RUN apt-get update && \
    apt-get install -y --no-install-recommends ffmpeg && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /app
ADD package.json package.json
RUN npm install
ADD api.json api.json
ADD index.js index.js
CMD [ "npm", "start" ]
