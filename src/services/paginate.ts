'use strict';

export const paginate = (data, page = 0, number = 8) => {
    console.log('oooo');
    const itemsPerPage = number;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pageItems = data.slice(startIndex, endIndex);

    console.log({
        items: pageItems,
        totalPages,
    });

    return {
        items: pageItems,
        totalPages,
    };
};
