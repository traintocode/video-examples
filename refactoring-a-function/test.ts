import dataJson from './data.json';
import { displayTableA, displayTableE } from "./index";
import { Team } from '.';

console.log(displayTableE(dataJson as Team[]));