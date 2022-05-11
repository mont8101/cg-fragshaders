#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() { 
    vec4 newImage = texture(image, texcoord);
    //L = 0.299 * Red + 0.587 * Green + 0.114 * Blue
    float luminance = 0.299 * newImage.x + 0.587 * newImage.y + 0.114 * newImage.z;
    newImage.x = luminance;
    newImage.y = luminance;
    newImage.z = luminance;
    FragColor = newImage;
}
