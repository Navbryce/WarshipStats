var graphModule = require("../../GraphModule");
describe('Get All Edges Test', function () {
  it('Returns edges', () => {
    setTimeout(() => {
      graphModule.getAllEdges().then((data) => {
        console.log(data);
      });
    }, 100);
  });
});
