export enum AnimalStatusType {
  ADOPTED = "Adopted",
  AVAILABLE = "Available",
}

export class AnimalStatusTypes {
  public static getAll() {
    return [AnimalStatusType.ADOPTED, AnimalStatusType.AVAILABLE];
  }
  public static isValidAnimalStatus(status: string) {
    return (
      status === AnimalStatusType.ADOPTED ||
      status === AnimalStatusType.AVAILABLE
    );
  }
}
