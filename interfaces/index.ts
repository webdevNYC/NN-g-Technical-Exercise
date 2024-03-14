export type Instructor = {
  first_name: string;
  last_name: string;
  portrait_image: string;
}

export type Location = {
  timezone: string;
}

export type Pricing = {
  amount: number;
  currency: string;
  valid_until: number;
}

export type CourseCardType = {
  id: number;
  dates: number[][];
  instructors: Instructor[];
  location: Location;
  pricing: Pricing;
}
export type Course = {
  id: number,
  options: CourseCardType[];
}

export type User = {
  id: number;
  name: string;
};
