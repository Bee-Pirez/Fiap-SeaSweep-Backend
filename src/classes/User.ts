import { prisma } from '../lib/prisma';

interface UserData {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
}

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;

  constructor({ id, name, email, password, createdAt }: UserData) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
}
}