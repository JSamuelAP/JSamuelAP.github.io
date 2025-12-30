import { describe, expect, it } from 'vitest';

import { navigationItems } from '../../src/config/navigation';

describe('navigationItems', () => {
  it('should have at least one item', () => {
    expect(navigationItems.length).toBeGreaterThan(0);
  });
});
