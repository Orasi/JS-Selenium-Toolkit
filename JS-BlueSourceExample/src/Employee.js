/**
 * Created by charles.sexton on 3/4/2016.
 */
var Employee = function(username, firstName, lastName, title, role, manager, status, bridgeTime,
                        location, startDate, cellPhone, officePhone, email, imName, imClient, department)
{
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.role = role;
    this.manager = manager;
    this.status = status;
    this.bridgeTime = bridgeTime;
    this.location = location;
    this.startDate = startDate;
    this.cellPhone = cellPhone;
    this.officePhone = officePhone;
    this.email = email;
    this.imName = imName;
    this.imClient = imClient;
    this.department = department;
};

module.exports = Employee;