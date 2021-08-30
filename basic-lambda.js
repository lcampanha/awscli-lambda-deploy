exports.handler = async function(event) {
  const { numberA, numberB} = event;
  
  return { 
    "sumResult": numberA + numberB 
  };
}