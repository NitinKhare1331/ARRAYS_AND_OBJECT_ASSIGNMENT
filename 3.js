let students = {name:'nitin'}
Object.preventExtensions(students);
const extensible_status = Object.isExtensible(students);
let teacher = {subject:'Math'};
Object.seal(teacher);
const sealed_status = Object.isSealed(teacher);
console.log('Extensible status',extensible_status);
console.log('Sealed status',sealed_status);