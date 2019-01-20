describe("Question List",()=>{
    beforeEach(() => {
        console.log("Before Each!");
    });

    beforeAll(() => {
        console.log("Before All");
    });

    it("should display in list of items",()=>{
        expect(2+2).toEqual(4);
    });

    it("should run the meaning of life",()=>{
        expect(20+20).toEqual(40);
    });
});