"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductManager_1 = require("../ProductManager");
var ProductStatics_1 = require("../model/ProductStatics");
describe('ProductManager.getSearchQueryObject', function () {
    describe('status filter', function () {
        test('should contain only status filter if no filter is provided', function () {
            var filterObj = ProductManager_1.getSearchQueryObject();
            expect(filterObj).not.toContainKey('title');
            expect(filterObj).toContainKey('status');
        });
        test('should contain status filter if filter is provided', function () {
            var filterObj = ProductManager_1.getSearchQueryObject('hello');
            expect(filterObj).toContainKey('status');
            expect(filterObj.status).not.toBeUndefined();
        });
        test('status filter should be $ne INACTIVE', function () {
            var status = ProductManager_1.getSearchQueryObject().status;
            expect(status.$ne).not.toBeUndefined();
            expect(status.$ne).toBe(ProductStatics_1.statuses.INACTIVE);
        });
        test('status filter obj should ONLY contain $ne key', function () {
            var status = ProductManager_1.getSearchQueryObject().status;
            var keys = Object.keys(status);
            expect(keys).toBeArrayOfSize(1);
            expect(keys[0]).toBe('$ne');
        });
        test('status filter should NOT be ACTIVE', function () {
            var status = ProductManager_1.getSearchQueryObject().status;
            expect(status.$ne).not.toBe(ProductStatics_1.statuses.ACTIVE);
        });
        test('status filter should NOT be SOLD_OUT', function () {
            var status = ProductManager_1.getSearchQueryObject().status;
            expect(status.$ne).not.toBe(ProductStatics_1.statuses.SOLD_OUT);
        });
    });
    describe('title filter', function () {
        test('should contain title filter if filter is provided', function () {
            var title = ProductManager_1.getSearchQueryObject('hello').title;
            expect(title).not.toBeUndefined();
            expect(title.$regex).not.toBeUndefined();
        });
        test('should match regexp string if filter is provided', function () {
            var filter = 'hello';
            var title = ProductManager_1.getSearchQueryObject(filter).title;
            var regexp = new RegExp(filter, 'gi');
            expect(title.$regex).toEqual(regexp);
        });
    });
});
//# sourceMappingURL=ProductManager.spec.js.map