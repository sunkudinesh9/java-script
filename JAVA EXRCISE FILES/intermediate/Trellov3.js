let myDay = {
    day: 'Monday',
    meets: 0,
    meetingsDone: 0,

    addMeetings: function (meet = 0) {
        this.meets = this.meets + meet;
    },

    meetDone: function (todos, meet = 0) {
        this.meetingsDone = this.meetingsDone - meet;
    },

    getSummaryDay: function (todos) {
        let meetLeft = this.meets + this.meetingsDone;
        return `Meetings left ${meetLeft}`;
    }
};

myDay.addMeetings(6);
myDay.meetDone(myDay, 5);
let detailsOfDay = myDay.getSummaryDay(myDay);
console.log(detailsOfDay);

