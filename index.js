import Konva from "konva"
import {registerFont} from "canvas"
import fs from "fs"

 const createKonvaStage = (width, height) => {
    return new Konva.Stage({ width: width, height: height });
  };
  
const createKonvaLayer = () => {
    return new Konva.Layer();
};
  

const main = () => {
    registerFont("./Lato-Regular.ttf",{family:"Lato",weight:"400"})

    const stage = createKonvaStage(595,842)
    const layer = createKonvaLayer()
    var background = new Konva.Rect({
        x: 0,
        y: 0,
        width: stage.width(),
        height: stage.height(),
        fill:"white"
    })

    layer.add(background)

    const textLato = new Konva.Text({x:842/2,y:595/2,fontFamily:"Lato",text:"John Doe", fontSize:30})
    layer.add(textLato)

    const textArial = new Konva.Text({x:200,y:0,fontFamily:"Arial",text:"John Doe", fontSize:30})
    layer.add(textArial)

    stage.add(layer)

    layer.draw()

    
  const img = stage.toDataURL({ pixelRatio: 3 });
  const imageBuffer = Buffer.from(
    img.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  fs.writeFileSync("path.png", img.split(";base64,").pop(), {
    encoding: "base64",
  });


}

main()