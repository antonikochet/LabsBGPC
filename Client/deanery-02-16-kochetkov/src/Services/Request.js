const URL = 'http://localhost:8080'
const Request = {
    getStudents() {
        return fetch(URL + "/student").then(res => res.json());
    },

    getStudentsByStudyGroup(group_id) {
        return fetch(URL + "/student/study-group/" + group_id).then(res => res.json());
    },

    getJournalBySTudyGroup(group_id) {
        return fetch(URL + "/journal/study-group/" + group_id).then(res => res.json());
    },

    getAllGroups() {
        return fetch(URL + "/study-group").then(res => res.json());
    }
};

export default Request;