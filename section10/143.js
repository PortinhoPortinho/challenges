const runOnce = function () {
  console.log('this will run only once');
};

runOnce();
(function () {
  console.log('this will never run again');
})();

(() => console.log('this will Also never run again'))();
