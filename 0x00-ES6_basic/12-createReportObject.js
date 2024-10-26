export default function createReportObject(employeesList){
    const rep = {
        allEmployees: employeesList,
        getNumberOfDepartments: function(employeesObject){
            return(Object.keys(employeesObject).length);
        },
    }
    return rep;
}
