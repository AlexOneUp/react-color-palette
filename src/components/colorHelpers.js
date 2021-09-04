import chroma from 'chroma-js';
const levels = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        eomoji: starterPalette.emoji,
        colors: {

        }
    }
    for (let level of levels) {
        newPalette.colors[level] = [];
    }
    for (let color of starterPalette.colors) {
        let scale = getScale(color.color, 10).reverse();
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i])
                    .css()
                    .replace("rgba", "rgb")
                    .replace(")", ",1.0)")
            })
        }
    }
    return newPalette;
}

/**
 * This function generates an array with 3 color values
 * Whitens as color.darken(1.4) -> white
 */
function getRange(hexColor) {
    const end = "#fff";
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ]
}

/**
 * This takes in the above function and generates a scale UI
 * colors(numberOfColors) will spit out a range of give number of colors.
 */
function getScale(hexColor, numberOfColors) {
    return chroma
        .scale(getRange(hexColor))
        .mode("lab")
        .colors(numberOfColors);
}

export { generatePalette };