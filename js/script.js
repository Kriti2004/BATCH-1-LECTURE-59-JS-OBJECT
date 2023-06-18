 
/*
   property:value,
   property:value,
   functions
*/
var students={
   'name':"Kriti",
   "surname":'jha',
   "address":"Kashipur",
   friends:["Agyasha",'Manisha',"Shalu"],
   teachers:[{
            name:"Anil Dollar",
            contact:9789887878,
            },{
            name:"Sunil Dollar",
            contact:"9789887769",
            },{
            name:"Manish Mehta",
            contact:"6987487769",
            }], // Array of object
          };  
      // JS objects
      // object.member
      alert(students.name);
      console.log(students.surname);
      console.log(students.address);
      console.log(students.friends[0]);
      console.log(students.name+" Have "+students.friends.length+" friends");


      // Nandan Have 2 teachers
      console.log(students.name+" Have "+ students.teachers.length+" Teachers ");

      // Anil Dollar 0987643245
      // Amit singh  7675657689

      /*
         for(initialization;condition;inc/decr)
      */


      for(var i=0; i< students.teachers.length;i++){
         console.log(students.teachers[i].name+' '+students.teachers[i].contact)
      }

      
      var a=['Rahul',students]; //Array contain js object