function Emp(empid,ename,esalary,deptno ) {
	this.empid=empid,
	this.ename=ename,
	this.esalary=esalary,
	this.deptno=deptno;
	}
	
var EmployeeList=( function() {
		var Employees=[];
		
		var obj={
		
		addEmp: function(e){ Employees.push(e);},
		getEmp: function(){return Employees;},
		sortEmps: function(){ Employees.sort(function(a, b){return a.empid-b.empid});}
		}
	return obj;	
	})();
function testFunction(){
	var empobj1=new Emp(1,"miley",6000,2);
	EmployeeList.addEmp(empobj1);
	var empobj2=new Emp(3,"adele",8000,6);
	EmployeeList.addEmp(empobj2);
	var empobj3=new Emp(2,"chris",9000,8);
		

		EmployeeList.addEmp(empobj3);

		var sortEmployees = EmployeeList.sortEmps();
		var displayEmployees = EmployeeList.getEmp();
		
	console.log(displayEmployees);
	
	
	
	}

	
	