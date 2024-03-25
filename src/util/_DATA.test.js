const { _saveQuestion, _saveQuestionAnswer } = require("./_DATA");
describe("_saveQuestionAnswer", () => {
  it("should return true for correct parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });

    expect(response).toBeTruthy();
  });

  it("should return error for false parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});

describe("_saveQuestion", () => {
  test("returns the saved question with all expected fields populated when correctly formatted data is passed to the function", async () => {
    const mockQuestion = {
      author: "name of author",
      optionOneText: "option one",
      optionTwoText: "option two",
    };

    const actual = await _saveQuestion(mockQuestion);
    const { author, optionOne, optionTwo } = actual;
    const text1 = optionOne.text;
    const text2 = optionTwo.text;

    expect(author).toBe("name of author");
    expect(text1).toBe("option one");
    expect(text2).toBe("option two");
  });
});

describe("_saveQuestion", () => {
  it("returns an error when incorrect data is passed to the function", async () => {
    const mockQuestion = {
      author: null,
      optionOneText: null,
      optionTwoText: null,
    };

    await expect(_saveQuestion(mockQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

