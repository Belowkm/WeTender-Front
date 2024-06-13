import axios from 'axios';

const abi = [{ "constant": true, "inputs": [], "name": "bank_name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "ProjectID", "type": "uint256" }, { "name": "Sender", "type": "address" }, { "name": "Receiver", "type": "address" }, { "name": "money", "type": "int256" }, { "name": "Timestamp", "type": "uint256" }, { "name": "TransferID", "type": "string" }, { "name": "remark", "type": "string" }], "name": "insert", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "bank_id", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "ProjectID", "type": "uint256" }], "name": "select", "outputs": [{ "name": "", "type": "uint256" }, { "components": [{ "name": "Sender", "type": "address" }, { "name": "Receiver", "type": "address" }, { "name": "money", "type": "int256" }, { "name": "Timestamp", "type": "uint256" }, { "name": "TransferID", "type": "string" }, { "name": "remark", "type": "string" }], "name": "", "type": "tuple[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "name", "type": "string" }, { "name": "id", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "tName", "type": "string" }, { "indexed": false, "name": "ProjectID", "type": "uint256" }, { "indexed": false, "name": "Sender", "type": "address" }, { "indexed": false, "name": "Receiver", "type": "address" }, { "indexed": false, "name": "money", "type": "int256" }, { "indexed": false, "name": "Timestamp", "type": "uint256" }, { "indexed": false, "name": "TransferID", "type": "string" }, { "indexed": false, "name": "remark", "type": "string" }], "name": "insertTable", "type": "event" }]

const url = 'http://47.106.226.160:5002/WeBASE-Front/abi'
const data = {
    "contractAbi": abi,
    "contractAddress": "0xb81e7261466d12fb46125a8f61445b7e9093f7c0",
    "encodeStr": "0x0d34a9e8",
    "funcName": func,
    "groupId": 1,
    "userAddress": "0xd6bfe6210168613bc5eb12f4f6886cd2e2ac64b4"
}

export async function getBal() {
    data.func = "bal"
    const temp = axios.post(url, data)
    const res = await temp;
    return res.data.bal
}
export async function getRev() {
    data.func = "rev"
    const temp = axios.post(url, data)
    const res = await temp;
    return res.data.rev;
}