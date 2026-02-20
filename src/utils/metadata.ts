import merge from 'lodash.merge';

export const baseMeta = {
  robots: { index: true, follow: true },
  openGraph: { type: 'website' },
};

export function createMeta(custom = {}) {
  return merge({}, baseMeta, custom);
}
