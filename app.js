"use strict";

const express = require("express");
const bodyParser = require("body-parser");
//const {WebhookClient, Payload} = require("dialogflow-fulfillment");
const restService = express();
/****** */

var MicroGear = require('microgear');

const KEY    = "h5tm18lfObCbamA";
const SECRET = "pkwVRhXlUGGIbjZFlqOluKk5D";
const APPID     = "linebot1";
var PK5Message = "xx"
var microgear = MicroGear.create({
    key : KEY,
    secret : SECRET
});

microgear.on('connected', function() {
    console.log('Connected...');
    microgear.setalias("MasterMai");
    //setInterval(function() {
        microgear.chat('test', "Now is Connected");
    //},10000);
});

microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
    PK5Message=body;
});

microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);

//***** */
var Coiltable = [ 
{CoilId: 1 , Coilname: "ห้องเครื่องในขาว", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 2 , Coilname: "ห้องเครื่องในขาว", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 3 , Coilname: "ห้องเครื่องในแดง", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 4 , Coilname: "ห้องแพ็คเครื่องใน", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 5 , Coilname: "ห้องแพ็คเครื่องใน", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 6 , Coilname: "ห้องผ่าซาก", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 7 , Coilname: "ห้องผ่าซาก", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 8 , Coilname: "ห้องผ่าซาก", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 9 , Coilname: "ห้องทำหัว", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 10 , Coilname: "ห้องเผาขา", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 11 , Coilname: "ห้องเผาขา", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 12 , Coilname: "ห้อง Dispatch เครื่องใน", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 13 , Coilname: "ห้อง Dispatch เครื่องใน", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 14 , Coilname: "ห้องเลื่อยขา", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 15 , Coilname: "ห้องชาร์จโฟร์คลิฟท์", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 16 , Coilname: "ห้องเตรียมสินค้า", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 17 , Coilname: "ห้องเตรียมสินค้า", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 18 , Coilname: "ห้องคัดแยกเศษ", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 19 , Coilname: "ห้องLoading2", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 20 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 21 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 22 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 23 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 24 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 25 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 26 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 27 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 28 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 29 , Coilname: "ห้องCutting line", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 30 , Coilname: "ห้องSlice room2", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 31 , Coilname: "ห้องSlice room2", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 32 , Coilname: "ห้องSlice room2", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 33 , Coilname: "ห้องSlice room1", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 34 , Coilname: "ห้องCorridoor", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 35 , Coilname: "ห้องOfficeโรงฆ่า", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 36 , Coilname: "ห้องต้มเลือด", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 37 , Coilname: "ห้องต้มเลือด", type: "คอยด์น้ำ",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 38 , Coilname: "ห้องShock tunnel1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 39 , Coilname: "ห้องShock tunnel1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 40 , Coilname: "ห้องShock tunnel1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 41 , Coilname: "ห้องShock tunnel2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 42 , Coilname: "ห้องShock tunnel2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 43 , Coilname: "ห้องShock tunnel2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 44 , Coilname: "ห้องShock tunnel3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 45 , Coilname: "ห้องShock tunnel3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 46 , Coilname: "ห้องShock tunnel3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 47 , Coilname: "ห้องChill1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 48 , Coilname: "ห้องChill3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 49 , Coilname: "ห้องCold Storage", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 50 , Coilname: "ห้องCold Storage", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 51 , Coilname: "ห้องOvernight chill1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 52 , Coilname: "ห้องOvernight chill1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 53 , Coilname: "ห้องOvernight chill1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 54 , Coilname: "ห้องOvernight chill1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 55 , Coilname: "ห้องOvernight chill2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 56 , Coilname: "ห้องOvernight chill2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 57 , Coilname: "ห้องOvernight chill2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 58 , Coilname: "ห้องOvernight chill2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 59 , Coilname: "ห้องLoading room1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 60 , Coilname: "ห้องPacking Frozen", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 61 , Coilname: "ห้องPacking Frozen", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 62 , Coilname: "ห้องAnti Room1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 63 , Coilname: "ห้องAnti Room3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 64 , Coilname: "ห้องAnti Room3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 65 , Coilname: "ห้องOvernight chill3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 66 , Coilname: "ห้องOvernight chill3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 67 , Coilname: "ห้องOvernight chill3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 68 , Coilname: "ห้องOvernight chill3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 69 , Coilname: "ห้อง Dispatch room", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 70 , Coilname: "ห้อง Dispatch room", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 71 , Coilname: "ห้อง Dispatch room", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 72 , Coilname: "ห้อง Dispatch room", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 73 , Coilname: "ห้อง Anti Room#2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 74 , Coilname: "ห้อง Overnight chill#5", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 75 , Coilname: "ห้อง Overnight chill#5", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 76 , Coilname: "ห้อง Overnight chill#5", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 77 , Coilname: "ห้อง Overnight chill#5", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 78 , Coilname: "ห้อง Overnight chill#4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 79 , Coilname: "ห้อง Overnight chill#4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 80 , Coilname: "ห้อง Overnight chill#4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 81 , Coilname: "ห้อง Overnight chill#4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 82 , Coilname: "ห้อง Loading#4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 83 , Coilname: "ห้อง Loading#4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 84 , Coilname: "ห้อง Loading#3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 85 , Coilname: "ห้อง Loading#3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 86 , Coilname: "ห้อง Anti Chill#2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 87 , Coilname: "ห้อง Anti Chill#2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 88 , Coilname: "ห้อง Anti Chill#1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 89 , Coilname: "ห้อง Chill miniload#2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 90 , Coilname: "ห้อง Chill miniload#2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 91 , Coilname: "ห้อง Chill miniload#1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 92 , Coilname: "ห้อง Chill miniload#1", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 93 , Coilname: "ห้อง Chill slice", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 94 , Coilname: "ห้อง VRT Freezer", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 95 , Coilname: "ห้อง VRT Freezer", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 96 , Coilname: "ห้อง VRT Freezer", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 97 , Coilname: "ห้อง VRT Freezer", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 98 , Coilname: "ห้อง VRT Freezer", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 99 , Coilname: "ห้อง VRT Chiller", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 100 , Coilname: "ห้อง VRT Chiller", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 101 , Coilname: "ห้อง VRT Chiller", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 102 , Coilname: "ห้อง VRT Chiller", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 103 , Coilname: "ห้อง VRT Chiller", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 104 , Coilname: "ห้อง Blast Chill", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 105 , Coilname: "ห้องแทงคอ", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 106 , Coilname: "ห้องผ่าซาก", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 107 , Coilname: "ห้อง Chill 6", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 108 , Coilname: "ห้อง Chill 6", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 109 , Coilname: "ห้อง Chill 4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 110 , Coilname: "ห้อง Chill 4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 111 , Coilname: "ห้อง Chill 4", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 112 , Coilname: "ห้อง Chill 5", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 113 , Coilname: "ห้อง Chill 5", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 114 , Coilname: "ห้อง Chill 3", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 115 , Coilname: "ห้อง Chill 2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 116 , Coilname: "ห้อง Chill 2", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 117 , Coilname: "ห้อง Chill 8", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 118 , Coilname: "ห้อง Chill 9", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 119 , Coilname: "ห้อง Anti 7", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 120 , Coilname: "ห้อง Anti 7", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 121 , Coilname: "ห้อง Loading#3/1(โหลดโลตัส)", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"},
{CoilId: 122 , Coilname: "ห้อง C/V VRT Chill/Cutting line ", type: "คอยด์แอมโมเนีย",Status: "NG",SV: 0 ,PV1: 0 ,PV2: 0 ,Fan: "NG",Comp: "NG",Def: "NG",Ven: "NG",Remark: "NG"}

  
]

//******/
var PK5Codetable = [ 
  {ID: 1 , PK5CommandOrder: "เปิดห้อง",CommandCode: "01"},
  {ID: 2 , PK5CommandOrder: "ปิดห้อง",CommandCode: "02"},
  {ID: 3 , PK5CommandOrder: "เช็คอุณหภูมิห้อง",CommandCode: "03"},
  {ID: 4 , PK5CommandOrder: "เช็คห้อง",CommandCode: "03"},
  {ID: 5 , PK5CommandOrder: "ตั้งอุณหภูมิห้อง",CommandCode: "08"},
  {ID: 6 , PK5CommandOrder: "เปิดคอยด์",CommandCode: "01"},
  {ID: 7 , PK5CommandOrder: "ปิดคอยด์",CommandCode: "02"},
  {ID: 8 , PK5CommandOrder: "เช็คอุณหภูมิคอยด์",CommandCode: "07"},
  {ID: 9 , PK5CommandOrder: "เช็คคอยด์",CommandCode: "07"},
  {ID: 10 , PK5CommandOrder: "ตั้งอุณหภูมิคอยด์",CommandCode: "08"},
  {ID: 11 , PK5CommandOrder: "Pumpdownคอยด์",CommandCode: "02"},
  {ID: 12 , PK5CommandOrder: "Defคอยด์",CommandCode: "10"}
  ]
//***** */
var day;
switch (new Date().getDay()) {
    case 0:
        day = "สวัสดีวันอาทิตย์ ให้ผมช่วยส่วนงานไหนดีครับ";
        break;
    case 1:
        day = "สวัสดีวันจันทร์ มีส่วนงานไหนให้ผมช่วยบ้างครับ";
        break;
    case 2:
        day = "สวัสดีวันอังคาร แจ้งส่วนงานที่อยากให้ผมช่วยได้เลยครับ";
        break;
    case 3:
        day = "สวัสดีวันพุธ มีอะไรให้ผมรับใช้ครับ";
        break;
    case 4:
        day = "สวัสดีวันพฤหัสบดี ให้ผมช่วยอะไรได้บ้างครับ";
        break;
    case 5:
        day = "สวัสดีวันศุกร์ มีความสุขสุดสัปดาห์ ให้จาวิสช่วยอะไรดีครับ";
        break;
    case 6:
        day = "สวัสดีวันเสาร์ ให้จาวิสช่วยในส่วนงานไหนครับ";
        break;
    default:
        day = "จำวันไม่ได้^^";
}
/***** */
restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());
restService.post("/Jawis", function(req, res) {
  var speech 
  var PK5Code = "xxxxx"
  var PK5CommandOrder
  var PK5Coilname
  var PK5coilId = req.body.queryResult.parameters.Coilno
  var PK5Coilqty
  var PK5Sartcoil
  var PK5CommandCode = "00"
  var PK5SetTemp = "xx"
  //var PK5Message = "xx"
  //PK5Message=microgear.message
  for (let i = 0; i < PK5Codetable.length; i++) {
    if (PK5Codetable[i].PK5CommandOrder == req.body.queryResult.parameters.PK5Command) {
      PK5CommandCode=PK5Codetable[i].CommandCode      
    break
    }
}
switch (req.body.queryResult.parameters.PK5Command) {
  case "จาวิส":
      speech = day
      break;  
    
  case "เปิดห้อง":
      //PK5coilId = req.body.queryResult.parameters.Coilno
      PK5CommandOrder = "เปิด"
      Multicoil(PK5coilId)
      
      //speech=speech+PK5Message
      break;
  //**** */      
  case "ปิดห้อง":
      //PK5coilId = req.body.queryResult.parameters.Coilno
      PK5CommandOrder = "ปิด"
      Multicoil(PK5coilId)
      break;
  case "เช็คอุณหภูมิห้อง":
      //PK5coilId = req.body.queryResult.parameters.Coilno
      PK5CommandOrder = "เช็คอุณหภูมิ"
      Multicoil(PK5coilId)
      break;      
  case "เช็คห้อง":
      //PK5coilId = req.body.queryResult.parameters.Coilno
      PK5CommandOrder = "เช็คอุณหภูมิ"
      Multicoil(PK5coilId)
      break;      
  case "ตั้งอุณหภูมิห้อง":
      PK5SetTemp = req.body.queryResult.parameters.PK5Settemp
      PK5CommandOrder = "ตั้งอุณหภูมิ"
      Multicoil(PK5coilId)
      break;            
  case "เปิดคอยด์":
      //PK5coilId = req.body.queryResult.parameters.Coilno
      PK5CommandOrder = "เปิด"
      Singlecoil(PK5coilId)
      break;
  case "ปิดคอยด์":
      //PK5coilId = req.body.queryResult.parameters.Coilno
      PK5CommandOrder = "ปิด"
      Singlecoil(PK5coilId)
      break;    
  case "เช็คอุณหภูมิคอยด์":
      //PK5SetTemp = req.body.queryResult.parameters.PK5Settemp
      PK5CommandOrder = "เช็คอุณหภูมิ"
      Singlecoil(PK5coilId)
      break;       
  case "เช็คคอยด์":
      //PK5SetTemp = req.body.queryResult.parameters.PK5Settemp
      PK5CommandOrder = "เช็คอุณหภูมิ"
      Singlecoil(PK5coilId)
      break;        
  case "ตั้งอุณหภูมิคอยด์":
      PK5SetTemp = req.body.queryResult.parameters.PK5Settemp
      PK5CommandOrder = "ตั้งอุณหภูมิ"
      Singlecoil(PK5coilId)
      break;  
  case "Pumpdownคอยด์":
      //PK5coilId = req.body.queryResult.parameters.Coilno
      PK5CommandOrder = "Pumpdown"
      Singlecoil(PK5coilId)
      break;  
  case "Defคอยด์":
      //PK5coilId = req.body.queryResult.parameters.Coilno
      PK5CommandOrder = "ละลายน้ำแข็ง"
      Singlecoil(PK5coilId)
      break;  
  default:
      speech = "ผมไม่เข้าใจครับ ลองทำรายการใหม่น่ะครับ";
  //**** */  
  }
//****** */
function Multicoil(){
  PK5Coilqty = 0
  PK5Sartcoil = 0
  //let PK5coilId =2
  for (let i = 0; i < Coiltable.length; i++) {
     if (Coiltable[i].CoilId == PK5coilId) {
       PK5Coilname=Coiltable[i].Coilname
        for (let j = 0; j < Coiltable.length; j++) {
            if (Coiltable[j].Coilname == PK5Coilname) {
                PK5Coilqty = PK5Coilqty + 1
                if(PK5Sartcoil==0){PK5Sartcoil=Coiltable[j].CoilId}
             }
         }
    break
      }
   }
   if (PK5Coilqty > 0){
     if(PK5CommandOrder == "ตั้งอุณหภูมิ"){PK5Code = PK5CommandCode+"/"+PK5Sartcoil+"/"+PK5Coilqty+"/"+PK5SetTemp
    }else{PK5Code = PK5CommandCode+"/"+PK5Sartcoil+"/"+PK5Coilqty}
    speech = "กำลังดำเนินการ "+PK5CommandOrder+" ระบบทำความเย็น:"+PK5Coilname +" จำนวน: "+PK5Coilqty+" คอยด์ กรุณารอสักครู่ครับ ^^"+PK5Code+PK5Message//+" จำนวน: "+result.length+" คอยด์"+ "\n"+" ถูกต้องไหมครับ"
    //PK5Code = "01/"+PK5Sartcoil+"/"+PK5Coilqty
    microgear.chat('test', PK5Code)
 }else{speech = "ไม่สามารถ"+PK5CommandOrder+" "+PK5coilId+"อาจยังไม่เปิดใช้งานครับ กรุณาลองใหม่น่ะครับ"+"/"+PK5Coilname+"/"+PK5Sartcoil+"/"+PK5Coilqty}
 setTimeout(function() {
  //console.log('Delay Time!!');
}, 5000); 
 return speech ;
}
function Singlecoil(){
  PK5Coilqty = 0
  PK5Sartcoil = 0
      for (let i = 0; i < Coiltable.length; i++) {
          if (Coiltable[i].CoilId == PK5coilId) {
              PK5Coilname=Coiltable[i].Coilname
              PK5Sartcoil=Coiltable[i].CoilId
              PK5Coilqty = PK5Coilqty + 1
          break
          }
      }

   if (PK5Coilqty > 0){
       if(PK5CommandOrder == "ตั้งอุณหภูมิ"){PK5Code = PK5CommandCode+"/"+PK5Sartcoil+"/"+PK5Coilqty+"/"+PK5SetTemp
  }else{PK5Code = PK5CommandCode+"/"+PK5Sartcoil+"/"+PK5Coilqty}
       speech = "กำลังดำเนินการ "+PK5CommandOrder+" ระบบทำความเย็น:"+PK5Coilname +" จำนวน: "+PK5Coilqty+" คอยด์ กรุณารอสักครู่ครับ ^^"+PK5Code+PK5Message//+" จำนวน: "+result.length+" คอยด์"+ "\n"+" ถูกต้องไหมครับ"
       //PK5Code = "06/"+PK5Sartcoil+"/"+PK5Coilqty
       microgear.chat('test', PK5Code)
    }else{speech = "ไม่สามารถ"+PK5CommandOrder+" "+PK5coilId+"อาจยังไม่เปิดใช้งานครับ กรุณาลองใหม่น่ะครับ"+"/"+PK5Coilname+"/"+PK5Sartcoil+"/"+PK5Coilqty}
    setTimeout(function() {
      //console.log('Delay Time!!');
  }, 5000);
    return speech ;
}

//********/
      var speechResponse = {
        google: {
          expectUserResponse: true,
          richResponse: {
            items: [
              {
                simpleResponse: {
                  textToSpeech: speech
                }
              }
            ]
          }
        }
      
      };
      
        return res.json({
          payload: speechResponse,
          //data: speechResponse,
          fulfillmentText: speech,
          speech: speech,
          displayText: speech,
      
          
      
          source: "webhook-echo-sample"
        });   
});
restService.listen(process.env.PORT || 8000, function() {
  //console.log("Server up and listening");
});
