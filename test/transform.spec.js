'use strict';

const expect = require('chai').expect;
const transform = require('../functions/transform/transform');

describe('transform', () => {
  it('Transformed point coordinates are within one meter from expected', () => {
    const wgs84 = [14.940416, 59.337360];
    const sweref99TM = [496610.307, 6577619.744];
    const res = transform(wgs84);
    expect(res.length).to.equal(2);
    res.map((coord, index) => {
      expect(coord).to.be.closeTo(sweref99TM[index], 0.5);
    });
  })

  it('Transformed line coordinates are within one meter from expected', () => {
    const wgs84 = [14.936639, 59.342962, 14.934923, 59.349001, 14.944536, 59.348914];
    const sweref99TM = [496396.03, 6578243.762, 496299.081, 6578916.338, 496845.763, 6578906.155];
    const res = transform(wgs84);
    expect(res.length).to.equal(6);
    res.map((coord, index) => {
      expect(coord).to.be.closeTo(sweref99TM[index], 0.5);
    });
  })
})
