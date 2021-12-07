/**
 * 733. 图像渲染
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const oldColor = image[sr][sc];
    if(oldColor === newColor) return image;
    let changeColor = function(i, j) {
        if(i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== oldColor) return;
        image[i][j] = newColor;
        changeColor(i - 1, j);
        changeColor(i + 1, j);
        changeColor(i, j - 1);
        changeColor(i, j + 1);
    }
    changeColor(sr, sc);
    return image;
};