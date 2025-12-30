import { describe, expect, it } from 'vitest';

import { educationHistory } from '../../src/config/education';

describe('educationHistory', () => {
  const nonCurrent = educationHistory.filter(educationHistory => !educationHistory.current);

  it('should have at least one item', () => {
    expect(educationHistory.length).toBeGreaterThan(0);
  });

  it.each(educationHistory)('$institution should have an end year', education => {
    expect(education.endYear).toBeTruthy();
  });

  it.each(nonCurrent)('the end year of $institution should be greater than or equal to the start year', education => {
    expect(education.endYear).toBeGreaterThanOrEqual(education.startYear);
  });
});
