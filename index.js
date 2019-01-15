var express = require('express'),
    http = require('http'),
    port = 80,
    app = require('express')(),
    server = http.createServer(app),
    bodyParser = require('body-parser'),
    io = require("socket.io")(server),
    liveCart;