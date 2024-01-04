export interface FunctionalityModelProps {
  id: number;
  name: string;
  url: string;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export default class FunctionalityModel {
  private id: number;
  private name: string;
  private url: string;
  private description: string;
  private createdAt: Date;
  private updatedAt: Date | null;

  constructor({ id, name, url, description, createdAt, updatedAt }: FunctionalityModelProps) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getUrl(): string {
    return this.url;
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
}