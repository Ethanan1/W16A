# `fetch` Assessment

In this assessment, you will create a function that will make a request using
`fetch`.

Each test spec in this project is worth 4 points.

## Usage

1. Clone the assessment repository.
2. `cd` into the folder and `npm install` to install dependencies
3. Your objective is to implement the code in **fetch-post.js** file. Use
   `fetch` to make a `POST` request with a JSON body and return a specific value
   from the response JSON body.
4. Run `npm test` so that all test specs pass.
   - Do **NOT** modify the files in the "test" directory.

## Code Instructions

Create a function called `addPerson` in the **fetch-post.js** file.

Inside the function, make a `POST` request to `http://example.com/api/people`
with the following JSON body:

```json
{
  "firstName": "Maul",
  "lastName": "Kimmerman"
}
```

If you format your request properly, you can expect the body of the response to
be:

```json
{
  "people": [
    { "id": 1, "lastName": "Zimmerman", "firstName": "Paul" },
    { "id": 2, "lastName": "Yimmerman", "firstName": "Raul" },
    { "id": 3, "lastName": "Limmerman", "firstName": "Caul" },
    { "id": 9, "lastName": "Kimmerman", "firstName": "Maul" },
  ]
}
```

Return the value of the `people` key from the `addPerson` function.

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your folder
3. Upload it

[https://github.com/appacademy/assessment-for-week-08-v2-version-a-fetch]: https://github.com/appacademy/assessment-for-week-08-v2-version-a-fetch