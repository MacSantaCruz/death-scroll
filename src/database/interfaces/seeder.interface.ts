export interface Seeder<T = any> {
  seed(): Promise<T[]>;
}
