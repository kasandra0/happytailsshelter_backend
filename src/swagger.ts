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
