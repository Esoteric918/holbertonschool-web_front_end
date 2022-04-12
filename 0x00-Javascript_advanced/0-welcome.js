/**
 * Concatenates two parameters and displays a message.
 * @param  {String} firstName  first name
 * @param  {String} lastName   last name
 */
function welcome(firstName, lastName){
  const fullName = `${firstName} ${lastName}`;
  const displayFullname = ()=> alert(`Welcome ${fullName}!`);
  displayFullname(fullName);
}
