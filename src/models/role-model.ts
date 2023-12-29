export interface RoleModelProps {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export default class RoleModel {
  private id: number;
  private name: string;
  private description: string;
  private createdAt: Date;
  private updatedAt: Date | null;
  private deletedAt: Date | null;

  constructor({ id, name, description, createdAt, updatedAt, deletedAt }: RoleModelProps) {
    this.id = id;
    this.name = name;
    this.description = description;
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

  public getDescription(): string {
    return this.description;
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
}