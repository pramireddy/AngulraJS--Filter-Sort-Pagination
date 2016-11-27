(function() {
  "use strict";
  angular.module("labDatatables", ["angularUtils.directives.dirPagination"])
    .controller("datatablesController", function() {
      var vm = this;
      vm.message = "Hello Plunker!!!";
      vm.searchText = "";
      vm.sortType = "name";
      vm.sortReverse = false;
      vm.requests = [{
        name: "Prasad",
        email: "pramireddy@test.com",
        status: "Pending"
      }, {
        name: "march",
        email: "mjanuary@test.com",
        status: "Accepted"
      }, {
        name: "june",
        email: "jaugust@test.com",
        status: "Rejected"
      }, {
        name: "Prasad",
        email: "pramireddy@test.com",
        status: "Pending"
      }, {
        name: "march",
        email: "mjanuary@test.com",
        status: "Accepted"
      }, {
        name: "june",
        email: "jaugust@test.com",
        status: "Rejected"
      }, {
        name: "Prasad",
        email: "pramireddy@test.com",
        status: "Pending"
      }, {
        name: "march",
        email: "mjanuary@test.com",
        status: "Accepted"
      }, {
        name: "june",
        email: "jaugust@test.com",
        status: "Rejected"
      },
            {name: "Prasad", email:"pramireddy@test.com",status:"Pending"},
      {name: "march", email:"mjanuary@test.com",status:"Accepted"},
      {name: "june", email:"jaugust@test.com",status:"Rejected"}];
    });
}());