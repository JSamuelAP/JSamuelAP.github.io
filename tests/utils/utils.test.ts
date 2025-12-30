import { describe, it, expect } from 'vitest';

import { capitalizeFirstLetter } from '../../src/utils/utils';

describe('utils.capitalizeFirstLetter', () => {
  it('capitalizes the first letter', () => {
    expect(capitalizeFirstLetter('astro')).toBe('Astro');
  });
  it('keeps already capitalized', () => {
    expect(capitalizeFirstLetter('Astro')).toBe('Astro');
  });
  it('returns empty string when input is empty', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });
});
