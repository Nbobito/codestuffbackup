function letItBe() {
    let v = 2;
    if (true) {
        let v = 4;
        console.log(v);
    }
    console.log(v);
}
letItBe();