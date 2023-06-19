import React, { useSyncExternalStore } from "react";
import { profileStore } from "./profileStore";

const UseSyncExternalStorePage = () => {
  const profile = useSyncExternalStore(
    profileStore.subscribe,
    profileStore.getSnapshot
  );

  return (
    <div className="m-5">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={profile.name}
            onChange={(e) => profileStore.changeName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Job
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={profile.job}
            onChange={(e) => profileStore.changeJob(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Salary
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={profile.salary}
            onChange={(e) => profileStore.changeSalary(e.target.value)}
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            console.log(profile);
          }}
        >
          Submit
        </button>
      </form>

      <div className="mt-5">
        <div>Full Name : {profile.name}</div>
        <div>Job : {profile.job}</div>
        <div>Salary : ${profile.salary}</div>
      </div>
    </div>
  );
};

export default UseSyncExternalStorePage;
