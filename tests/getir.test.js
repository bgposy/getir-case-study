const request = require("supertest");
require("dotenv").config();
const app = require("../app");

describe("Getir Records Api", () => {
  let requestData;

  beforeEach(() => {
    jest.useFakeTimers();

    requestData = {
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: "2700",
      maxCount: "3000",
    };
  });

  const sendRequests = request(app).post("/api/datas").send(requestData);

  it("startDate is checked", async () => {
    delete requestData.startDate;

    const res = await sendRequests;
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toEqual("startDate can't be empty");
  });

  it("endDate is checked", async () => {
    delete requestData.endDate;

    const res = await sendRequests;

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toEqual("endDate can't be empty");
  });

  it("minCount is checked", async () => {
    delete requestData.minCount;

    const res = await sendRequests;

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toEqual("minCount can't be empty");
  });

  it("maxCount is checked", async () => {
    delete requestData.maxCount;

    const res = await sendRequests;

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toEqual("maxCount can't be empty");
  });

  it("startDate Format is checked", async () => {
    requestData.startDate = "11.12.2020";

    const res = await sendRequests;

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toEqual(
      "startDate must be in format YYYY-MM-DD(e.g 2020-12-11)"
    );
  });

  it("endDate Format is checked", async () => {
    requestData.endDate = "11.12.2020";

    const res = await sendRequests;

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toEqual(
      "endDate must be in format YYYY-MM-DD(e.g 2020-12-11)"
    );
  });

  it("the minimum number cannot be greater than the maximum number is Checked", async () => {
    requestData.minCount = 5555;

    const res = await sendRequests;

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toEqual("minCount should be less than maxCount");
  });
});
