function ToolListController() {
  'ngInject';

  const _this = this;

  _this.toolList = [
    {
      name: 'Headlight Aiming',
      url: 'Headlight Aiming'
    }
  ];
}

export default {
  name: 'ToolListController',
  fn: ToolListController
};
