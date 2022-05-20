async function Test(){
    const result = await import("./routes/src/contract-call");
    console.log(result);
}

Test();