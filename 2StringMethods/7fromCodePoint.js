console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"

let icons = "☃★♲你";
for(let val in icons){
    //val is index
    let code = icons.codePointAt(val);
    let codetoIcon = String.fromCodePoint(code);
    console.log(codetoIcon);
}