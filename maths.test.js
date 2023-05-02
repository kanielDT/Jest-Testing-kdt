import { sum, multiply, subtract } from "./maths.js"
import { describe, expect, test } from "@jest/global"

describe("testing math.js library", () => {
    test("adds 4 + 5 and expects it to equal 9", () => {

        //Arrange
        let a = 4
        let b = 5
        let expectedTotal = -1

        //Act
        let total = sum(a, b)

        //Assert
        expect(total).toequal(expectedTotal)
        //same as
        //expect(sum(4,5).toequal(9))

    })
    test("subtracts 4 - 5 and expects it to equal -1", () => {

        //Arrange
        let a = 4
        let b = 5
        let expectedTotal = 9

        //Act
        let total = subtract(a, b)

        //Assert
        expect(total).toequal(expectedTotal)
        //same as
        //expect(sum(4,5).toequal(9))

    })
})