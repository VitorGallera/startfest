export type  Startup  = {
    name: string;
    imageUrl: string;
    description: string;
  }

  export type Query = {
      allStartups: Startup[];
      
  }