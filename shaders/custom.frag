#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() { //invert colors maybe
    vec2 newTexCoord = (texcoord*2.0) - 1.0;
    float radius = length(newTexCoord);
    vec2 offset = newTexCoord * (sin(radius * 360.0 - time * 5.0) + 0.5) / 60.0;

    vec2 finalCoord = texcoord + offset;
    vec4 newImage = texture(image, finalCoord);
    FragColor = vec4(1.0 - newImage.x,1.0 -newImage.y,1.0 -newImage.z,1);
}

/*
vec2 newTexCoord = (texcoord*2.0) - 1.0;
    float theta = atan(newTexCoord.y, newTexCoord.x);
    float texSize = length(newTexCoord);
    float radius = pow(texSize, 1.5);

    //calculate fish eye texture coordinate = (radius * cos(𝜽),  radius * sin(𝜽))
    vec2 fishEye = vec2((((radius * cos(theta)* 30.0 - mod(time, 60.0) * 5.0)) / 60.0),  (((radius * sin(theta)* 30.0 - mod(time, 60.0) * 5.0)) / 60.0));
   
    //final texture coordinate = 0.5 * (fish eye texture coordinate + 1.0)
    fishEye = 0.5 * (fishEye + 1.0);
    FragColor = texture(image, fishEye);
*/