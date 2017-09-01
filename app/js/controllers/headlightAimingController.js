function HeadlightAimingController() {
  'ngInject';

  const _this = this;
  _this.distance = '';
  _this.height = '';
  _this.lampsDistance = '';

  _this.patternHeight = '';
  _this.leftOffset = '';
  _this.rightOffset = '';

  var vertical = 0.0125;
  var horizontal = 0.01;

  _this.inputChanged = function() {
    var distance = parseInt(_this.distance);
    var height = parseInt(_this.height);
    var lampsDistance = parseInt(_this.lampsDistance);
    if (!isNaN(distance) && !isNaN(height) && !isNaN(lampsDistance)) {
      console.log(_this.distance);
      _this.leftOffset = calculateLeftOffset(distance, lampsDistance) + ' mm';
      _this.rightOffset = calculateRightOffset(distance, lampsDistance) + ' mm';
      _this.patternHeight = calculatePatternHeight(distance, height) + ' mm';
    } else {
      _this.patternHeight = '';
      _this.leftOffset = '';
      _this.rightOffset = '';
    }
  };

  var calculatePatternHeight = function(distance, height) {
    return height - distance * vertical;
  };

  var calculateLeftOffset = function(distance, lampsDistance) {
    var lampsCentre = lampsDistance / 2;
    return lampsCentre + distance * horizontal;
  };

  var calculateRightOffset = function(distance, lampsDistance) {
    var lampsCentre = lampsDistance / 2;
    return lampsCentre - distance * horizontal;
  };
}

export default {
  name: 'HeadlightAimingController',
  fn: HeadlightAimingController
};
