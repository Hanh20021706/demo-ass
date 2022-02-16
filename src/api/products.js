/* eslint-disable import/prefer-default-export */
import instance from "./instance";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = () => {
    const url = "/products";
    return instance.get(url);
};
export const add = (post) => {
    const url = "/products";
    return instance.post(url, post);
};
export const remove = () => {
    const url = "/products";
    return instance.get(url);
};
export const update = () => {
    const url = "/products";
    return instance.get(url);
};