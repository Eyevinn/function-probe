const Restify = require("restify");
const SwaggerUI = require("swagger-ui-restify");
const errs = require('restify-errors');
const debug = require("debug")("probe");
const ffmpeg = require("fluent-ffmpeg");

const apiDocument = require("./api.json");

let server = Restify.createServer();
server.use(Restify.plugins.queryParser());
server.use(Restify.plugins.bodyParser());

server.get("/healthcheck", (req, res, next) => {
  debug(`req.url=${req.url}`);
  res.send(200);
  next();
});

server.get("/*", ...SwaggerUI.serve);
server.get("/", SwaggerUI.setup(apiDocument));

server.post("/api", (req, res, next) => {
  debug(`req.url=${req.url}`);
  debug("req.body=%o", req.body);

  if (req.body) {
    try {
      const mediaLocator = req.body.medialocator;
      ffmpeg.ffprobe(mediaLocator, (err, metadata) => {
        res.send(200, metadata);
        next();
      });
    } catch (errObj) {
      debug("Error: %o", errObj);
      const err = new errs.InternalServerError(errObj.message);
      next(err);
    }
  } else {
    next(new errs.InvalidContentError("Missing Request Body"));
  }
});

server.listen(process.env.PORT || 8080, () => {
  debug(`${server.name} listening at ${server.url}`);
});