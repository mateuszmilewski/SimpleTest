function generateContentFromSimpleObject(irr) {

  let tmpObj = JSON.stringify(irr);
  tmpObj = "test1234. \n" + tmpObj;

  console.log(tmpObj);

  return tmpObj;
}
