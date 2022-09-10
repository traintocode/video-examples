import dataJson from './data.json';
import { displayTable } from "./index";
import { Team } from '.';

const result = displayTable(dataJson as Team[]);

const expectedResult = `1 Manchester City (93 points)
2 Liverpool (92 points)
3 Chelsea (74 points)
4 Tottenham Hotspur (71 points)
5 Arsenal (69 points)
6 Manchester United (58 points)
7 West Ham United (56 points)
8 Leicester City (52 points)
9 Brighton & Hove Albion (51 points)
10 Wolverhampton Wanderers (51 points)
11 Newcastle United (49 points)
12 Crystal Palace (48 points)
13 Brentford (46 points)
14 Aston Villa (45 points)
15 Southampton (40 points)
16 Everton (39 points)
17 Leeds United (38 points)
18 Burnley (35 points)
19 Watford (23 points)
20 Norwich City (22 points)`;

console.log(result);
console.log(result === expectedResult ? 'PASSED' : 'FAILED');