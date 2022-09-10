
export interface Team {
    name: string,
    won: number,
    drawn: number,
    lost: number
};

export function displayTableA(teams: Team[]) {

    let teamsWithPoints: (Team & {
        points: number
    })[] = [];

    for(let team of teams) {
        teamsWithPoints.push({
            ...team,
            points: team.won * 3 + team.drawn * 1
        });
    }

    teamsWithPoints.sort((a, b) => b.points - a.points);

    let result = '';
    for(let i = 0; i < teamsWithPoints.length; i++) {
        result += `${i+1} ${teamsWithPoints[i].name} (${teamsWithPoints[i].points} points)\n`;
    }

    return result;
}


class TeamClass implements Team {

    constructor(public name: string, 
        public won: number,
        public drawn: number,
        public lost: number) {
    }

    /**
     * Gets the points for this team based on the wins and draws
     */
    get points() {
        return this.won * 3 + this.drawn * 1;
    }
}

export function displayTableB(teams: Team[]) {
    const teamObjects = teams.map(x => new TeamClass(x.name, x.won, x.drawn, x.lost));
    
    teamObjects.sort((a, b) => b.points - a.points);

    let result = '';
    for(let i = 0; i < teamObjects.length; i++) {
        result += `${i+1} ${teamObjects[i].name} (${teamObjects[i].points} points)\n`;
    }

    return result;
}



class LeagueTable {
    constructor(private teams: TeamClass[]) {
        
    }

    sort() {
        this.teams.sort((a, b) => b.points - a.points);
    }

    get rows() {
        return this.teams.map((team, index) => ({
            rowNumber: index + 1,
            team
        }));
    }

    // For D only
    static formatRow(row: {
        rowNumber: number,
        team: TeamClass
    }) {
        return `${row.rowNumber} ${row.team.name} (${row.team.points} points)`;
    }
}

export function displayTableC(teams: Team[]) {
    const teamObjects = teams.map(x => new TeamClass(x.name, x.won, x.drawn, x.lost));
    
    const table = new LeagueTable(teamObjects);
    table.sort();
    
    let result = '';
    for(let row of table.rows) {
        result += `${row.rowNumber} ${row.team.name} (${row.team.points} points)\n`;
    }

    return result;
}



export function displayTableD(teams: Team[]) {
    const teamObjects = teams.map(x => new TeamClass(x.name, x.won, x.drawn, x.lost));
    
    const table = new LeagueTable(teamObjects);
    table.sort();
    
    let result = table.rows.map(LeagueTable.formatRow).join('\n');

    return result;
}



function calculateScore(team: Team) {
    return team.won * 3 + team.drawn * 1;
}

function formatRow(rowNumber: number, teamName: string, points: number) {
    return `${rowNumber} ${teamName} (${points} points)`;
}

function compareTeamForSort(teamA: Team, teamB: Team) {
    return calculateScore(teamB) - calculateScore(teamA);
}

function getSorted(teams: Team[]) {
    const clone = [...teams];
    clone.sort(compareTeamForSort);
    return clone;
}

export function displayTableE(teams: Team[]) {

    const sorted = getSorted(teams);

    const rows = sorted.map((x, i) => formatRow(i + 1, x.name, calculateScore(x)));

    return rows.join('\n');
}

// If you wanted to impress slash annoy your colleagues, you can write it on one line
export const displayTableF = (teams: Team[]) => 
    getSorted(teams)
    .map((x, i) => formatRow(i + 1, x.name, calculateScore(x)))
    .join('\n');


