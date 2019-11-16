let myDay = {
    day: 'Monday',
    meets: 0,
    meetingsDone: 0
};

let addMeetings = function (todos, meet = 0) {
    todos.meets = todos.meets + meet;
};

let meetDone = function (todos, meet = 0) {
    todos.meetingsDone = todos.meetingsDone - meet;
};

let getSummaryDay = function (todos) {
    let meetLeft = todos.meets + todos.meetingsDone;
    return `Meetings left ${meetLeft}`;
};

addMeetings(myDay, 6);
meetDone(myDay, 5);
let detailsOfDay = getSummaryDay(myDay);
console.log(detailsOfDay);