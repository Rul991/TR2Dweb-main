const phaser = require('phaser');
const fs = require('fs');
const express = require('express');
const { log } = require('console');

const app = express();
const game = new phaser.Game();

log(game.canvas.getContext('2d'))