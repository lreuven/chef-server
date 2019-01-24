"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function httpLoggerMiddleware(req, res, next) {
    console.log('Incoming: ' + req.url, JSON.stringify(req.headers));
    next();
}
exports.httpLoggerMiddleware = httpLoggerMiddleware;
//# sourceMappingURL=httpLogger.middleware.js.map