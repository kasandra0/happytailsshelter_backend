import prisma from "../lib/prisma.js";

export async function getAllInventoryItems() {
    return prisma.inventory_item.findMany();
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

