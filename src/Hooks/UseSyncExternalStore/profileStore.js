let profiles = { name: "Ical", job: "Software Engineer", salary: 5000 };
let listeners = [];

export const profileStore = {
  changeName(newName) {
    profiles = { ...profiles, name: newName };
    emitChange();
  },
  changeJob(newJob) {
    profiles = { ...profiles, job: newJob };
    emitChange();
  },
  changeSalary(newSalary) {
    profiles = { ...profiles, salary: newSalary };
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return profiles;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
