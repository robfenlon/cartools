function HeaderCtrl($scope) {
   'ngInject';
   
   $scope.active = 0;
   var slides = $scope.slides = [];
   var currIndex = 0;

   $scope.addSlide = function () {
      var newWidth = 600 + slides.length + 1;
      slides.push({
         image: '//unsplash.it/' + newWidth + '/300',
         id: currIndex++
      });
   };

   for (var i = 0; i < 4; i++) {
      $scope.addSlide();
   }
}

export default {
   name: 'HeaderCtrl',
   fn: HeaderCtrl
};
