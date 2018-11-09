export type  Startup  = {
    name: string;
    imageUrl: string;
  }
  export type Query = {
      allStartups: Startup[];
  }