import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Happy Tails Shelter API",
            version: "1.0.0",
            description: "API documentation for the Happy Tails Shelter backend",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                User: {
                    type: "object",
                    properties: {
                        user_id: { type: "string", example: "1" },
                        first_name: { type: "string", example: "First Name" },
                        last_name: { type: "string", example: "Last Name" },
                        email: { type: "string", example: "Email" },
                        role: { type: "integer", example: 2 },
                        phone_number: { type: "string", example: "Phone Number" },
                        status: { type: "string", example: "A" },
                        created_at: { type: "string", format: "date-time" },
                    },
                },
                Animal: {
                    type: "object",
                    properties: {
                        animal_id: { type: "integer", example: 1 },
                        microchip: { type: "string", example: "123456" },
                        name: { type: "string", example: "Buddy" },
                        date_of_birth: { type: "string", format: "date", example: "2020-05-15" },
                        gender: { type: "string", example: "Male" },
                        color: { type: "string", example: "Brown" },
                        breed: { type: "string", example: "Golden Retriever" },
                        species: { type: "string", example: "Dog" },
                        weight: { type: "number", example: 25.5 },
                        status: { type: "string", example: "Available" },
                        description: { type: "string", example: "Good at basketball" },
                        photo_url: { type: "string", example: "https://example.com/buddy.jpg" },
                        created_at: { type: "string", format: "date-time" },
                        updated_at: { type: "string", format: "date-time" },
                    },
                },
                FosterHistory: {
                    type: "object",
                    properties: {
                        foster_history_id: { type: "integer", example: 1 },
                        animal_id: { type: "integer", example: 1 },
                        user_id: { type: "string", example: "42" },
                        staff_id: { type: "string", example: "7" },
                        start_date: { type: "string", format: "date-time", example: "2024-01-15T00:00:00.000Z" },
                        end_date: { type: "string", format: "date-time", example: "2024-03-15T00:00:00.000Z" },
                    },
                },
                InventoryItem: {
                    type: "object",
                    properties: {
                        inventory_item_id: { type: "integer", example: 1 },
                        name: { type: "string", example: "name" },
                        type: { type: "string", example: "type" },
                        quantity: { type: "integer", example: 1 },
                        cost: { type: "string", example: "cost" },
                        lastupdated: { type: "string", format: "date-time" },
                    },
                },
                InventoryCheckout: {
                    type: "object",
                    properties: {
                        checkout_id: { type: "integer", example: 1 },
                        animal_id: { type: "integer", example: 1 },
                        checkout_date: { type: "string", format: "date", example: "checkout_date" },
                        return_date: { type: "string", format: "date", example: "return_date" },
                        quantity: { type: "integer", example: 1 },
                        inventory_item_id: { type: "integer", example: 1 },
                        user_id: { type: "string", example: "user_id" },
                    },
                },
                MedicalLog: {
                    type: "object",
                    properties: {
                        log_history_id: { type: "integer", example: 1 },
                        animal_id: { type: "integer", example: 1 },
                        type: { type: "integer", example: 1 },
                        created_date: { type: "string", format: "date" },
                        user_id: { type: "string", example: "user_id" },
                        description: { type: "string", example: "description" },
                        start_date: { type: "string", format: "date" },
                        end_date: { type: "string", format: "date" },
                    },
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express, mountPath = "/api-docs") {
    app.use(mountPath, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerSpec;
