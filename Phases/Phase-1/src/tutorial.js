sum = (num1, num2) =>
{
  return num1 + num2;
}

const pi = 3.14;
class mathObject
{
  constructor()
  {
    console.log('object created');
  }
}

module.exports.sum = sum;
module.exports.pi = 3.14;
module.exports.mathObject = mathObject;