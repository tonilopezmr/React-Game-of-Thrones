'use strict'

const houses = require('../../src/reducers/houses.reducer')

const characters = [{
        houseImageUrl: "https://s3-eu-west-1.amazonaws.com/npatarino/got/tyrell.jpg",
        houseId: "f47fe47c",
        houseName: "House Tyrell"
    },
    {
        houseImageUrl: "https://s3-eu-west-1.amazonaws.com/npatarino/got/mormont.jpg",
        houseId: "2bd90e3d",
        houseName: "House Mormont"
    },
    {
        houseImageUrl: "",
        houseId: "",
        houseName: ""
    }]

describe('Get houses should', () => {

    it('get empty houses', () => {
        const characters = [{
            houseImageUrl: "",
            houseId: "",
            houseName: ""
        }]

        expect(houses.getHouses(1, 2)).toBe(3);
    })
});