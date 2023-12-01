const person = {
    city: "Moscow"
   }
   
   const student = Object.create(person);
   
   student.ownCity = "Piter";
   
   function example(obj) {
     for (let key in obj) {
       if (obj.hasOwnProperty(key)) {
         console.log(`${key}: ${obj[key]}`)
       };
     };
   };
   
   example(student)
   