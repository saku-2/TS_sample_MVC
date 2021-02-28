function Welcome(person) {
    //return "<h2>Hello " + person + ", Lets learn TypeScript</h2>";
    return "<h2> " + person + "がコンパイルされたよ♪</h2>";
}
function ClickMeButton() {
    var user = "Typescript";
    document.getElementById("divMsg").innerHTML = Welcome(user);
}
//# sourceMappingURL=app.js.map