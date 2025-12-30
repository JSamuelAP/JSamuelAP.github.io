import { describe, expect, it } from 'vitest';

import { experiences } from '../../src/config/experience';

describe('experiences', () => {
  const nonCurrent = experiences.filter(experience => !experience.current);

  it('should have at least one item', () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it.each(experiences)('$title - $company should have at least one activity', experience => {
    expect(experience.activities.length).toBeGreaterThan(0);
  });

  it.each(nonCurrent)('$title - $company should have an end date', experience => {
    expect(experience.endDate).toBeTruthy();
  });

  it.each(nonCurrent)('the end date of $title - $company should be equal to or after the start date', experience => {
    const [startYear, startMonth] = experience.startDate.split('-').map(Number);
    const [endYear, endMonth] = experience.endDate!.split('-').map(Number);
    const startTotal = startYear * 12 + startMonth;
    const endTotal = endYear * 12 + endMonth;
    expect(endTotal).toBeGreaterThanOrEqual(startTotal);
  });
});
