/**
 * @jest-environment jsdom
 */

/* jsdom for jest is no longer a part of the normal jest package
therefore it is required to input: npm i jest-environment-jsdom
into the terminal to install jsdom to work properly with the dom
*/

const buttonClick = require("../button");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});