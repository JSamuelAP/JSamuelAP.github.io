import { describe, expect, it } from 'vitest';

import { skills } from '../../src/config/skills';

describe('skills', () => {
  const flatSkills = Object.values(skills).flat();

  it('should contain at least one skill', () => {
    expect(flatSkills.length).toBeGreaterThan(0);
  });

  it.each(Object.keys(skills))('category %s should contain at least one skill', category => {
    expect(skills[category].length).toBeGreaterThan(0);
  });

  it('should not contain duplicate skills', () => {
    const names = flatSkills.map(skill => skill.name.toLowerCase());
    expect(new Set(names).size).toBe(names.length);
  });
});
