const assert = require("assert");
const User = require("../src/user");

describe("Validation records", () => {
  it("requires a users name", () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    user.validate((validationResult) => {
      const { message } = validationResult.errors.name;
      assert(message === "Name is required");
    });
  });
  it("requires a users name longer than 2 characters", () => {
    const user = new User({ name: "Al" });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === "Name must be longer than 2 characters");
  });
  it("disallows invalid records from being saved", (done) => {
    const user = new User({ name: "Al" });
    user.save().catch((validationResult) => {
      const { message } = validationResult.errors.name;
      assert(message === "Name must be longer than 2 characters");
      done();
    });
  });
});
