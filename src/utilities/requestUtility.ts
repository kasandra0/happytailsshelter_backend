import type {
  foster_history,
  inventory_item,
} from "../generated/prisma/client.js";
import type { animalModel } from "../generated/prisma/models.js";
import { AnimalStatusTypes } from "../types/animalStatusType.js";

export class RequestUtility {
  private static WHITE_SPACE_REGEX = /\\s/g;

  public static canSearchForRecord(id: string) {
    return id !== undefined && !Number.isNaN(id);
  }

  public static canCreateAnimal(animal: animalModel) {
    if (animal === undefined) {
      return false;
    }

    const animalNameNotEmpty =
      animal?.name?.replace(this.WHITE_SPACE_REGEX, "").length > 0;
    const animalSpeciesNotEmpty =
      animal?.species?.replace(this.WHITE_SPACE_REGEX, "").length > 0;

    const animalStatusNotEmpty =
      animal?.status?.replace(this.WHITE_SPACE_REGEX, "").length > 0;

    return (
      animalNameNotEmpty &&
      animalSpeciesNotEmpty &&
      animalStatusNotEmpty &&
      AnimalStatusTypes.isValidAnimalStatus(animal?.status)
    );
  }

  public static canCreateInventoryItem(inventoryItem: inventory_item) {
    if (inventoryItem === undefined) {
      return false;
    }

    const itemNameNotEmpty =
      inventoryItem?.name?.replace(this.WHITE_SPACE_REGEX, "").length > 0;

    const itemTypeNotEmpty =
      inventoryItem?.type?.replace(this.WHITE_SPACE_REGEX, "").length > 0;

    return itemNameNotEmpty && itemTypeNotEmpty;
  }

  public static canCreateFosterHistoryRecord(fosterHistory: foster_history) {
    if (fosterHistory === undefined) {
      return false;
    }

    const validAnimalId = fosterHistory?.animal_id > 0;

    const validUserId = fosterHistory?.user_id > 0;

    const validStaffId = fosterHistory?.staff_id > 0;

    return validAnimalId && validUserId && validStaffId;
  }
}
