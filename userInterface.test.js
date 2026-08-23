const ui = require("./userInterface");

describe("userInterface.js tests", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
    console.error.mockRestore();
  });

  test("logInfo writes its message to stdout", () => {
    ui.logInfo("[INFO] hello");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[INFO] hello"));
  });

  test("logWarning writes its message to stdout", () => {
    ui.logWarning("[WARN] careful");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[WARN] careful"));
  });

  test("logFeedback writes its message to stdout", () => {
    ui.logFeedback("[OK] done");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[OK] done"));
  });

  test("logError writes its messages to stderr", () => {
    ui.logError("[ERROR] bad", "thing");
    // chalk formats the spread arguments into a single string
    expect(console.error).toHaveBeenCalledTimes(1);
    const written = console.error.mock.calls[0][0];
    expect(written).toContain("[ERROR] bad");
    expect(written).toContain("thing");
  });
});
