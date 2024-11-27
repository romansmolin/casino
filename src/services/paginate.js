'use strict';

const paginate = (data, page = 1, number = 8) => {
    const itemsPerPage = number;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pageItems = data.slice(startIndex, endIndex);

    return {
        items: pageItems,
        totalPages,
    };
};

module.exports = paginate