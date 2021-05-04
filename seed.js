// seed.js



var faker = require('faker');
var uuid = require('uuid');

var fs = require('fs'); 



var hospitals = [
    {
      "id":"1ad3826b-fb96-4992-b5f9-072789d01cc0",
      "name": "St. Johns",
      "departments":[
          "Neurology",
          "Internal medicine",
          "Pediatricians",
          "Pathologists"
        ],
      "location":"Bengaluru"
    },

    {
      "id":"b3341faa-fbad-4617-820e-3e17ffadf047",
      "name": "Caritas Hospital",
      "departments":[
          "Radiation oncology",
          "Psychiatry",
          "Pediatricians",
          "Pathologists"
        ],
      "location":"Kottayam"
    },

    {
      "id":"4e1356f7-79ff-4636-9c09-76b18f94ec29",
      "name": "Pushpagiri Medical College Hospital",
      "departments":[
          "Urology",
          "Pediatrics",
          "Pediatricians",
          "Pathologists"
        ],
      "location":"Thiruvalla"
    }
]

var avatars = [
    "images/asset-2.png",
    "images/asset-1.png",
    "images/asset-3.png",
    "images/asset-4.png",
    "images/asset-5.png",
    "images/asset-6.png",


]
function generateEmployees () {
    var employees = []  
    for (var id = 0; id < 50; id++) {
      var firstName = faker.name.firstName()
      var lastName = faker.name.lastName()
      var email = faker.internet.email()    
      employees.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email
      })
    }  
    return { "employees": employees }
}

function generateDoctors(){

    var doctors = []
    for (var i = 0; i< 100; i++){
        var id = uuid.v4();
        var hospital = hospitals[Math.floor(Math.random()* (3))];
        var name = faker.name.firstName();
        var hos_id = hospital.id;
        var department = hospital.departments[Math.floor(Math.random()* (hospital.departments.length))];
        var avatar =  avatars[Math.floor(Math.random()* (6))];
        // var description=  "B.Sc DDVL Demilitologist 12 years of experience";
        var state = "Open"

        // console.log(hospital.departments, "===> " , department);

        var data = {
            "id": id,
            "name": "Dr. "+ name,
            "department": department,
            "description": "B.Sc DDVL Demilitologist 26 years of experience",
            "avatar": avatar,
            "hospital": hos_id,
            "state": "Closed Today"
        }

        doctors.push(data)

        // fs.appendFile('doctors.json',)

    }


    fs.appendFile('doctors.json',JSON.stringify(doctors),'utf8',(err) => {
        if (err) throw err;
        console.log('saved');
    })
}

generateDoctors();
  
// console.log(generateEmployees());