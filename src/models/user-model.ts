import { RoleModel, RoleModelProps } from ".";

export interface UserModelProps {
  id: number;
  name: string;
  email: string;
  role: RoleModelProps;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export default class UserModel {
  private id: number;
  private name: string;
  private email: string;
  private role: RoleModel;
  private createdAt: Date;
  private updatedAt: Date | null;
  private deletedAt: Date | null;

  constructor({ id, name, email, role, createdAt, updatedAt, deletedAt }: UserModelProps) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = new RoleModel(role);
    this.createdAt = new Date(createdAt);
    this.updatedAt = updatedAt !== null ? new Date(updatedAt) : null;
    this.deletedAt = deletedAt !== null ? new Date(deletedAt) : null;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getRole(): RoleModel {
    return this.role;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date | null {
    return this.updatedAt;
  }

  public getDeletedAt(): Date | null {
    return this.deletedAt;
  }

  public getInitials(): string {
    const nameParts: string[] = this.name.split(" ");
    const firstName: string = nameParts[0];
    const lastName: string = nameParts[nameParts.length - 1];

    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }
}