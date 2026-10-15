import test from "node:test";
import assert from "node:assert/strict";
import { createLocalBookingDemoClient } from "../src/booking/demo.ts";

test("the copied demo reserves an available slot and rejects duplicates", async () => {
  const storage = new Map();
  globalThis.window = {
    localStorage: {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
    },
  };
  try {
    const client = createLocalBookingDemoClient({
      serviceId: "lake",
      resourceId: "guide-lake",
      timeZone: "Europe/Paris",
      storageKey: "test",
      durationMinutes: 60,
    });
    const request = {
      serviceId: "lake",
      resourceId: "guide-lake",
      date: "2027-07-12",
    };
    const slots = await client.listAvailability(request);
    assert.equal(slots.length, 3);
    assert.equal(
      (Date.parse(slots[0].endsAt) - Date.parse(slots[0].startsAt)) / 60000,
      60,
    );
    const input = {
      ...request,
      startsAt: slots[0].startsAt,
      customer: { name: "Demo", email: "demo@example.com" },
    };
    await client.createBooking(input);
    assert.equal((await client.listAvailability(request)).length, 2);
    await assert.rejects(client.createBooking(input));
    assert.ok(!storage.get("test").includes("demo@example.com"));
    await assert.rejects(
      client.listAvailability({ ...request, resourceId: "other" }),
    );
  } finally {
    delete globalThis.window;
  }
});
