function randomInt(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

function dummyDataGenerator() {
    let names = ['John Doe', 'Jane Doe', 'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack', 'Kate', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peter', 'Quinn', 'Ryan', 'Sophia', 'Tom', 'Uma', 'Victor', 'Wendy', 'Xander', 'Yvonne', 'Zack']
    let cities = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Seattle', 'Boston', 'Austin', 'Denver', 'Miami', 'Atlanta', 'Dallas', 'Houston', 'Philadelphia', 'Phoenix', 'San Diego', 'Minneapolis', 'Portland', 'Las Vegas', 'Nashville', 'New Orleans']
    let departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales', 'Operations', 'Legal', 'Engineering', 'Customer Service', 'Research', 'Quality Assurance', 'Logistics', 'Procurement', 'Production', 'Maintenance', 'Security', 'Management', 'Training', 'Public Relations', 'Administration']
    
    let employee = {
        name: names[randomInt(0, names.length - 1)],
        age: randomInt(20, 60),
        city: cities[randomInt(0, cities.length - 1)],
        salary: randomInt(30, 100)*1000,
        department: departments[randomInt(0, departments.length - 1)],
        isManager: Math.random() > 0.5 ? true : false
    }
    return employee
}

export default dummyDataGenerator