#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 newTexCoord = (texcoord*2.0) - 1.0;
    float theta = atan(newTexCoord.y, newTexCoord.x);
    float texSize = length(newTexCoord);
    float radius = pow(texSize, 1.5);

    //calculate fish eye texture coordinate = (radius * cos(𝜽),  radius * sin(𝜽))
    vec2 fishEye = vec2(radius * cos(theta),  radius * sin(theta));
   
    //final texture coordinate = 0.5 * (fish eye texture coordinate + 1.0)
    fishEye = 0.5 * (fishEye + 1.0);
    FragColor = texture(image, fishEye);
}
