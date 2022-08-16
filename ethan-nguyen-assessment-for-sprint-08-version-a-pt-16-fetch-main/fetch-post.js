if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here

async function addPerson() {
  const url = "http://example.com/api/people"
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      firstName: "Maul",
      lastName: "Kimmerman"
    })
  }
  const responseObj = await fetch(url, options);
  const data = await responseObj.json();
  console.log(data)
  return data.people
}

addPerson()


/*******************************************************************************
 * Do not change code below this line.
 */

if (!exports) {
  var exports = {};
}
(function (exports) {
  try {
    exports.addPerson = addPerson;
  } catch (e) {
    exports.addPerson = () => { throw e };
  }
})(exports);
