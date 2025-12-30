import { describe, expect, it } from 'vitest';

import { projects } from '../../src/config/projects';

describe('projects', () => {
  it('should have at least one item', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('should not contain duplicate projects', () => {
    const ids: string[] = projects.map(project => project.id.toLowerCase());
    expect(new Set(ids).size).toBe(projects.length);
  });

  it.each(projects)('$id should have at least one technology', project => {
    expect(project.technologies.length).toBeGreaterThan(0);
  });

  it.each(projects)('$id should not contain duplicate technologies', project => {
    const technologies = project.technologies.map(technology => technology.toLowerCase());
    expect(new Set(technologies).size).toBe(technologies.length);
  });
});
