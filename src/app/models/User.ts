export interface User {
    id: string,
    avatar?: string, 
    name: string, 
    email: string,
    learnings?: Array<number>;
  }