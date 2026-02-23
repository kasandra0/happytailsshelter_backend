import prisma from "../lib/prisma.js";

export async function getAllInventoryCheckout() {
    return prisma.inventory_checkout.findMany();
}

export async function getInventoryCheckoutById(id: number) {
    return prisma.inventory_checkout.findUnique({
        where: { checkout_id: id },
    });
}

export async function createInventoryCheckout(data: any) {
    return prisma.inventory_checkout.create({
        data,
    });
}

