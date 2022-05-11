#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 newTexCoord = (texcoord*2.0) - 1.0;
    float texSize = length(newTexCoord);
    float radius = pow(texSize, 1.5);
    vec2 offset = newTexCoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

    vec2 finalCoord = texcoord * offset;
    FragColor = texture(image, finalCoord);
}
