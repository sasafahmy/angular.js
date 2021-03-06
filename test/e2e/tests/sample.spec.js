'use strict';

// Sample E2E test:
describe('Sample', function() {
  beforeEach(function() {
    loadFixture('sample');
  });

  it('should have the interpolated text', function() {
    expect(element(by.binding('text')).getText()).toBe('Hello, world!');
  });
});
