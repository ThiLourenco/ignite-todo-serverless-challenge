var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/functions/listTodo.ts
var listTodo_exports = {};
__export(listTodo_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(listTodo_exports);

// src/utils/dynamodbClient.ts
var import_aws_sdk = require("aws-sdk");
var options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  secretAccessKey: "x",
  accessKeyId: "x"
};
var isOffline = () => {
  return process.env.IS_OFFLINE;
};
var document = isOffline() ? new import_aws_sdk.DynamoDB.DocumentClient(options) : new import_aws_sdk.DynamoDB.DocumentClient();

// src/functions/listTodo.ts
var handler = async (event) => {
  const { user_id } = event.pathParameters;
  const response = await document.scan({
    TableName: "todos",
    FilterExpression: "user_id = :id",
    ExpressionAttributeValues: {
      ":id": user_id
    }
  }).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(response.Items)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=listTodo.js.map
