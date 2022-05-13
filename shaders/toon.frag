#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

/* This filter will round each color component to one of 5 levels (0.0, 0.25, 0.5, 0.75, 1.0)
Rounding can be done by multiplying by 4.0, then rounding, then dividing by 4.0
The result should be a cartoon-ish looking image

*/

void main() {
    vec4 newImage = texture(image, texcoord);
    newImage.x = (round(newImage.x * 4.0) ) / 4.0;
    newImage.y = (round(newImage.y * 4.0) ) / 4.0;
    newImage.z = (round(newImage.z * 4.0) ) / 4.0;
    FragColor = newImage;
}

