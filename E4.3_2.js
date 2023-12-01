const person = {
    city: "Moscow"
   }
   
   const str = "city"
   
   function check(string, object) {
     let result = (string in object) ? true : false;
     return result;
   }
   
   result = check(str, person)
   console.log(result)
   