import { fetchAPI, submitAPI } from "./bookingsAPI";

describe("fetchAPI", () => {
  test("returns an array of available times for a given date", () => {
    const date = new Date("2025-02-19");
    const times = fetchAPI(date);
    expect(times).toBeInstanceOf(Array);
    expect(times.length).toBeGreaterThan(0);
  });

  test("returns different times for different dates", () => {
    const date1 = new Date("2025-02-19");
    const date2 = new Date("2025-02-20");
    const times1 = fetchAPI(date1);
    const times2 = fetchAPI(date2);
    expect(times1).not.toEqual(times2);
  });

  test("returns consistent times for the same date", () => {
    const date = new Date("2025-02-19");
    const times1 = fetchAPI(date);
    const times2 = fetchAPI(date);
    expect(times1).toEqual(times2);
  });
});

describe("submitAPI", () => {
  test("returns true when form data is submitted", () => {
    const formData = {
      fName: "John",
      lName: "Doe",
      email: "john.doe@example.com",
      tel: "123-456-7890",
      people: 2,
      date: "2025-02-19",
      time: "18:00",
      occasion: "Birthday",
      preferences: "Indoors",
      comments: "No peanuts, please.",
    };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});
