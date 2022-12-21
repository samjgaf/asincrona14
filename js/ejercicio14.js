var app =angular.module('miAplication',[]);
app.controller('miControlador',function($scope){
    $scope.empleado={
        nombreEmp:"Sam Junior Garcia",
        horasTrab:45,
        cuotaHora:100,
        sueldo:0

    }
    $scope.calcularSueldo=function(){
        $scope.empleado.sueldo=$scope.empleado.horasTrab*$scope.empleado.cuotaHora;
    }
    $scope.obtenerSueldo=function(){
        $scope.calcularSueldo();
        return $scope.empleado.sueldo;
    }

});