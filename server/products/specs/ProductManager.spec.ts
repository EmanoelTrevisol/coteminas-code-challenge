import ProductManager, { getSearchQueryObject, getPerPageNumber, getPaginationSkipNumber } from '../ProductManager';
import { statuses } from '../model/ProductStatics';


describe('ProductManager.getSearchQueryObject', () => {

	describe('status filter', () => {

		test('should contain only status filter if no filter is provided', () => {
			const filterObj = getSearchQueryObject();
	
			expect(filterObj).not.toContainKey('title');
			expect(filterObj).toContainKey('status');
		});
	
		test('should contain status filter if filter is provided', () => {
			const filterObj = getSearchQueryObject('hello');
	
			expect(filterObj).toContainKey('status');
			expect(filterObj.status).not.toBeUndefined();
		});

		test('status filter should be $ne INACTIVE', () => {
			const { status } = getSearchQueryObject();

			expect(status.$ne).not.toBeUndefined();
			expect(status.$ne).toBe(statuses.INACTIVE);
		});

		test('status filter obj should ONLY contain $ne key', () => {
			const { status } = getSearchQueryObject();
			const keys = Object.keys(status);

			expect(keys).toBeArrayOfSize(1);
			expect(keys[0]).toBe('$ne');
		});

		test('status filter should NOT be ACTIVE', () => {
			const { status } = getSearchQueryObject();

			expect(status.$ne).not.toBe(statuses.ACTIVE);
		});

		test('status filter should NOT be SOLD_OUT', () => {
			const { status } = getSearchQueryObject();

			expect(status.$ne).not.toBe(statuses.SOLD_OUT);
		});
	})

	describe('title filter', () => {
		test('should contain title filter if filter is provided', () => {
			const { title } = getSearchQueryObject('hello');
	
			expect(title).not.toBeUndefined();
			expect(title.$regex).not.toBeUndefined();
		});
	
		test('should match regexp string if filter is provided', () => {
			const filter = 'hello'
			const { title } = getSearchQueryObject(filter);
	
			const regexp = new RegExp(filter, 'gi');
			expect(title.$regex).toEqual(regexp);
		});
	});
});
