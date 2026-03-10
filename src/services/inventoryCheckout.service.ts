import prisma from "../lib/prisma.js";

export async function getAllInventoryCheckout() {
  return prisma.inventory_checkout.findMany({
    include: {
      inventory_item: true,
      user: true,
    },
  });
}

export async function getAllInventoryItemsForAnimal(animalId: number) {
  return prisma.inventory_checkout.findMany({
    where: { animal_id: animalId },
    include: {
      inventory_item: true,
      user: true,
    },
    orderBy: {
      checkout_date: "desc",
    },
  });
}

export async function getInventoryCheckoutById(id: number) {
  return prisma.inventory_checkout.findUnique({
    where: { checkout_id: id },
  });
}

export async function createInventoryCheckout(data: any) {
  const { inventory_item_id, quantity, checkout_id, ...rest } = data;

  // fetch current item
  const item = await prisma.inventory_item.findUnique({
    where: { inventory_item_id },
  });

  if (!item) {
    throw new Error("Inventory item not found");
  }

  if (item.quantity === null || item.quantity === undefined) {
    throw new Error("Item has no quantity tracked");
  }

  if (item.quantity < quantity) {
    throw new Error(
      `Not enough stock. Requested ${quantity} but only ${item.quantity} available.`
    );
  }

  // run both operations in a transaction so they succeed or fail together
  return prisma.$transaction([
    prisma.inventory_checkout.create({
      data: { inventory_item_id, quantity, ...rest },
    }),
    prisma.inventory_item.update({
      where: { inventory_item_id },
      data: { quantity: item.quantity - quantity },
    }),
  ]);
}

export async function updateInventoryCheckoutById(id: number, data: any) {
  const {
    animal_id,
    checkout_date,
    quantity,
    inventory_item_id,
    user_id
  } = data;

  return prisma.inventory_checkout.update({
    where: { checkout_id: id },
    data: {
      animal_id,
      checkout_date,
      quantity,
      inventory_item_id,
      user_id
    }
  });
}

export async function deleteInventoryCheckoutEntry(id: number) {
  return prisma.inventory_checkout.delete({
    where: { checkout_id: id },
  });
}
