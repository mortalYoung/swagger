interface SwaggerSchema {
    definitions?: {}
}
class Swagger {
    schema: SwaggerSchema = {};
    models = {};
    constructor(schema: SwaggerSchema) {
        this.schema = Object.assign({}, schema);
        this.initialModels();
    }
    /* initial interfaces 
     */
    initialModels = () => {
        const definitions = this.schema.definitions || {};
        const models = Object.assign({}, definitions);
        Object.keys(models).forEach(definitionName => {
            const jsonSchema = definitions[definitionName];
            jsonSchema.title = jsonSchema.title || definitionName;
        })
        this.models = models;
    }
}
export default Swagger;