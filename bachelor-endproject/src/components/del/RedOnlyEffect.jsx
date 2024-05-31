import React, { forwardRef, useMemo } from "react";
import { Uniform } from "three";
import { Effect } from "postprocessing";

// Updated fragment shader to allow only red color to pass through
const fragmentShader = `
uniform float param;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // Allow only red color to pass through, setting green and blue to zero
  outputColor = vec4(inputColor.r, 0.0, 0.0, inputColor.a);
}
`;

let _uParam;

// Effect implementation
class MyCustomEffectImpl extends Effect {
  constructor({ param = 1.0 } = {}) {
    // Default param set to 1.0 for full effect
    super("MyCustomEffect", fragmentShader, {
      uniforms: new Map([["param", new Uniform(param)]]),
    });

    _uParam = param;
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("param").value = _uParam;
  }
}

// Effect component
export const MyCustomEffect = forwardRef(({ param }, ref) => {
  const effect = useMemo(() => new MyCustomEffectImpl({ param }), [param]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
