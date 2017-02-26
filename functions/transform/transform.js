'use strict';

const proj4 = require('proj4');

const transform = (coordinates) => {
  const wgs84 = proj4.defs('EPSG:4326');
  const sweref99TM = '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
  const res = [];
  for(let i = 0; i < coordinates.length; i = i + 2) {
    Array.prototype.push.apply(res, proj4(wgs84, sweref99TM, coordinates.slice(i, i + 2)));
  }
  console.log(res);
  return res;
}

module.exports = transform;
