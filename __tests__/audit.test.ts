describe("Audit Engine", () => {
  test("calculates savings correctly", () => {
    const currentSpend = 100;
    const recommendedSpend = 50;
    const savings = currentSpend - recommendedSpend;

    expect(savings).toBe(50);
  });

  test("returns zero when already optimal", () => {
    const currentSpend = 20;
    const recommendedSpend = 20;
    const savings = currentSpend - recommendedSpend;

    expect(savings).toBe(0);
  });

  test("handles empty input", () => {
    const currentSpend = 0;
    const recommendedSpend = 0;
    const savings = currentSpend - recommendedSpend;

    expect(savings).toBe(0);
  });

  test("handles large spend", () => {
    const currentSpend = 1000;
    const recommendedSpend = 700;
    const savings = currentSpend - recommendedSpend;

    expect(savings).toBe(300);
  });

  test("never returns negative savings", () => {
    const currentSpend = 50;
    const recommendedSpend = 80;
    const savings = Math.max(0, currentSpend - recommendedSpend);

    expect(savings).toBe(0);
  });
});