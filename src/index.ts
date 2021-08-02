const _world = 'world';

export function hello(world: string = _world): string {
  return `Hello ${world}! `;
}