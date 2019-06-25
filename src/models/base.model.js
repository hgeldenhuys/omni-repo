"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Base = class Base extends repository_1.Entity {
    constructor() {
        super(...arguments);
        this.metadataId = 1000;
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        description: 'The Id of the document',
        id: true,
    }),
    __metadata("design:type", Number)
], Base.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        description: 'Created date in Unix time',
    }),
    __metadata("design:type", Number)
], Base.prototype, "createdDate", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        description: 'Changed date in Unix time',
    }),
    __metadata("design:type", Number)
], Base.prototype, "changedDate", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        description: 'Removed flag. Used for soft deletes',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Base.prototype, "removed", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        description: 'Documentation',
    }),
    __metadata("design:type", String)
], Base.prototype, "documentation", void 0);
Base = __decorate([
    repository_1.model({
        description: "The base document for our business domain"
    })
], Base);
exports.Base = Base;
//# sourceMappingURL=base.model.js.map