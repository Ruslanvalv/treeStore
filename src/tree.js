"use strict";
module.exports = class TreeStore {
    constructor(array) {
        this.array = array;
    }
    getAll() {
        return this.array;
    }
    getItem(id) {
        return this.array.find(item => item.id == id) || null;
    }
    getChildren(id) {
        return this.array.filter(item => item.parent == id);
    }
    getAllChildren(id) {
        let result = [];
        let currentChildren = this.getChildren(id);
        if (currentChildren.length) {
            result.push(...currentChildren);
            currentChildren.map(item => result.push(...this.getAllChildren(item.id)));
        }
        return result;
    }
    getAllParents(id) {
        let result = [];
        let currentParent;
        const currentItem = this.getItem(id);
        if (currentItem)
            currentParent = this.getItem(currentItem === null || currentItem === void 0 ? void 0 : currentItem.parent);
        if (currentItem && currentParent) {
            result.push(currentParent);
            result.push(...this.getAllParents(currentParent.id));
        }
        return result;
    }
};
