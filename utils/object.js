export function isEmptyObject(obj){
    return Object.entries(obj).length === 0 && obj.constructor === Object;
}

export function isEqualObject(obj1,obj2) {
    return obj1.day === obj2.day && obj1.teamHome.name === obj2.teamHome.name && obj1.teamHome.goals === obj2.teamHome.goals
     && obj1.teamAway.name === obj2.teamAway.name && obj2.teamAway.goals === obj2.teamAway.goals && obj1.time === obj2.time;
}