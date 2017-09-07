function TyreSizeController() {
  'ngInject';

  const _this = this;
  _this.tyreList = [];

  _this.newTyre = function() {
    _this.tyreList.push({
      width: '',
      profile: '',
      radius: ''
    });
  };

  _this.removeTyre = function(index) {
    if (index > -1) {
      _this.tyreList.splice(index, 1);
    }
  };

  _this.unitDistance = function() {};

  _this.getSidewall = function(tyre) {
    return +tyre.width * (+tyre.profile / 100);
  };

  _this.inputChanged = function() {
    console.log('change!');
  };

  _this.newTyre();
}

export default {
  name: 'TyreSizeController',
  fn: TyreSizeController
};
