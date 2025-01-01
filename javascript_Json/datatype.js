//* JSON Valid Data Types

//* JSON Strings
//String JSON অবশ্যই double quotes এর মধ্যে লিখতে হবে।

{
  '{"name":"john"}'
}

//* JSON Numbers
//JSON Number integer বা floating point এ হতে পারে।

{
  '{"age": 30}'
}

//* JSON Objects
//JOSN value object ও হতে পারে। তবে মনে রাখতে হবে Object এর values অবশ্যই JSON syntax follow করে লিখতে হবে।

{
  '{"employee":{"name":"john","age":30,"gender":"male"}}'
}

//* JSON Arrays
//JOSN value object ও হতে পারে। মনে রাখতে হবে array এর ভিতরের string ও double quotes এ লিখতে হবে।
{
    '{"employees":["Shahid", "Rahim", "Karim"]}'
}

//* JSON Booleans
//JSON value true/false ও হতে পারে।
{
    '{"sale": true}'
}

//* JSON Null
//JSON value null ও হতে পারে।
{
    '{"middlename": null}'
}