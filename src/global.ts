export interface UsersDto {
  id: string;
  fullName: string;
  email: string;
  password: string;
  age?: number;
  registrationDate?: Date;
  lastUpdate?: Date;
  role?: Roles;
}

export interface SessionsDto {
  id: string;
  userId: string;
}

export type IconProp = {
  path: string;
};
enum Roles {
  USER = "USER",
  ADMIN = "ADMIN",
}

export class StandarResponse {
  constructor(
    private readonly message: string,
    private readonly status_code: number,
    private readonly data: object | null
  ) {}
}
