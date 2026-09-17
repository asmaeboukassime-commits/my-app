import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./BookingForm";

// Mock the fetchAPI function to return predictable values for testing
vi.mock('./api', () => ({
  fetchAPI: vi.fn((date) => {
    // Return predictable times based on the date
    if (!date || !(date instanceof Date) || isNaN(date.getDate())) {
      return [];
    }
    const day = date.getDate();
    // Use day of month to deterministically select times
    if (day % 2 === 0) {
      return ["17:00", "18:00", "19:00", "20:00"];
    }
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }),
  submitAPI: vi.fn(() => true)
}));

test("renders the BookingForm with date input", () => {
  render(<BookingForm />);

  const dateInput = screen.getByPlaceholderText("Date");
  expect(dateInput).toBeInTheDocument();
});

test("initializeTimes returns a non-empty array", () => {
  const result = initializeTimes();

  expect(result).toBeDefined();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("initializeTimes returns available times", () => {
  const result = initializeTimes();

  // Verify it returns expected times based on mock
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns the available times for the selected date", () => {
  const state = [
    "17:00",
    "18:00",
    "19:00",
    "20:00"
  ];

  const result = updateTimes(state, {
    type: "UPDATE_TIMES",
    date: "2026-09-20"
  });

  // 20 is even, so mock returns 4 times
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});

test("updateTimes works with different dates", () => {
  const state = [
    "17:00",
    "18:00"
  ];

  // Date with odd day (21) returns 6 times
  const result = updateTimes(state, {
    type: "UPDATE_TIMES",
    date: "2026-09-21"
  });

  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
