import prisma from "../lib/prisma.js";

export async function getAllInventoryItems() {
  return prisma.inventory_item.findMany({
    orderBy: {
      inventory_item_id: "asc",
    },
  });
}

export async function getInventoryItemsById(id: number) {
  return prisma.inventory_item.findUnique({
    where: { inventory_item_id: id },
  });
}

export async function createInventoryItems(data: any) {
  return prisma.inventory_item.create({
    data,
  });
}

export async function updateInventoryItem(id: number, data: any) {
  //dev note- have to do this because it should have been @updated in prisma schema but it was @default(now) and that only gets set on creation- doesn't update.
  data.lastupdated = new Date();
  return prisma.inventory_item.update({
    where: { inventory_item_id: id },
    data,
  });
}

export async function deleteInventoryItem(id: number) {
  return prisma.inventory_item.delete({
    where: { inventory_item_id: id },
  });
}
