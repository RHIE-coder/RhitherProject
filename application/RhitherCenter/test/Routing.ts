import { expect } from "chai";
import { RoutingElement, createRouter } from "../src/routes/extensions/Routing"

describe("Routing Model Test", () => {
    it("Check Importing", () => {
        const importObj : RoutingElement = {
            routers : function(injected1, injected2) {
                const r = createRouter();
                
                r.get("/t", (req, res) => {
                    res.send("test");
                })

                console.log(injected1, injected2);

                return r;
            } 
        }

        importObj.routers("dynamic a", "dynamic b");
        expect(importObj).to.have.own.property("routers");
        expect(importObj).to.be.a("object");
        expect(!importObj.options).to.be.equal(true);
    })
})