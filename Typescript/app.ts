function Welcome(person: string) {
    //return "<h2>Hello " + person + ", Lets learn TypeScript</h2>";
    return "<h2> " + person + "がコンパイルされたよ♪</h2>";
}

function ClickMeButton() {
    let user: string = "Typescript";
    document.getElementById("divMsg").innerHTML = Welcome(user);
}