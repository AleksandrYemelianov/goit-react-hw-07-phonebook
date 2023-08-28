import { operationsThunk } from "redux/contacts/slice";

export const operationsType = (type) => operationsThunk.map(operation => operation[type]);