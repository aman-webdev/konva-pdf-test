import { createCanvas, loadImage,registerFont } from 'canvas'
import fs from "fs"

registerFont("./Lato-Regular.ttf",{family:"Lato",weight:"400"})

const canvas = createCanvas(595, 842)
const ctx = canvas.getContext('2d')


ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = 'black';
// Write "Awesome!"
ctx.font = '30px Lato'
ctx.textBaseline='middle'
ctx.fillText('John Doe', 842/2,595/2 )

const buf = canvas.toBuffer()
const imgBuf = Buffer.from(buf)
console.log(imgBuf)

fs.writeFileSync("path2.png", buf, {
    encoding: "base64",
  });
