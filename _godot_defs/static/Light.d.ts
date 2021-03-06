
/**
 * Light is the **abstract** base class for light nodes. As it can't be instanced, it shouldn't be used directly. Other types of light nodes inherit from it. Light contains the common variables and parameters used for lighting.
 *
*/
declare class Light extends VisualInstance  {

  
/**
 * Light is the **abstract** base class for light nodes. As it can't be instanced, it shouldn't be used directly. Other types of light nodes inherit from it. Light contains the common variables and parameters used for lighting.
 *
*/
  new(): Light; 
  static "new"(): Light 


/** If [code]true[/code], the light only appears in the editor and will not be visible at runtime. */
editor_only: boolean;

/** The light's bake mode. See [enum BakeMode]. */
light_bake_mode: int;

/** The light's color. An [i]overbright[/i] color can be used to achieve a result equivalent to increasing the light's [member light_energy]. */
light_color: Color;

/** The light will affect objects in the selected layers. */
light_cull_mask: int;

/** The light's strength multiplier (this is not a physical unit). For [OmniLight] and [SpotLight], changing this value will only change the light color's intensity, not the light's radius. */
light_energy: float;

/** Secondary multiplier used with indirect light (light bounces). This works on both [BakedLightmap] and [GIProbe]. */
light_indirect_energy: float;

/** If [code]true[/code], the light's effect is reversed, darkening areas and casting bright shadows. */
light_negative: boolean;

/** The size of the light in Godot units. Only considered in baked lightmaps and only if [member light_bake_mode] is set to [constant BAKE_ALL]. Increasing this value will make the shadows appear blurrier. This can be used to simulate area lights to an extent. */
light_size: float;

/** The intensity of the specular blob in objects affected by the light. At [code]0[/code], the light becomes a pure diffuse light. When not baking emission, this can be used to avoid unrealistic reflections when placing lights above an emissive surface. */
light_specular: float;

/** Used to adjust shadow appearance. Too small a value results in self-shadowing ("shadow acne"), while too large a value causes shadows to separate from casters ("peter-panning"). Adjust as needed. */
shadow_bias: float;

/** The color of shadows cast by this light. */
shadow_color: Color;

/** Attempts to reduce [member shadow_bias] gap. */
shadow_contact: float;

/** If [code]true[/code], the light will cast shadows. */
shadow_enabled: boolean;

/** If [code]true[/code], reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [constant GeometryInstance.SHADOW_CASTING_SETTING_DOUBLE_SIDED]. */
shadow_reverse_cull_face: boolean;

/** Returns the value of the specified [enum Light.Param] parameter. */
get_param(param: int): float;

/** Sets the value of the specified [enum Light.Param] parameter. */
set_param(param: int, value: float): void;

  connect<T extends SignalsOf<Light>>(signal: T, method: SignalFunction<Light[T]>): number;



/**
 * Constant for accessing [member light_energy].
 *
*/
static PARAM_ENERGY: any;

/**
 * Constant for accessing [member light_indirect_energy].
 *
*/
static PARAM_INDIRECT_ENERGY: any;

/**
 * Constant for accessing [member light_size].
 *
*/
static PARAM_SIZE: any;

/**
 * Constant for accessing [member light_specular].
 *
*/
static PARAM_SPECULAR: any;

/**
 * Constant for accessing [member OmniLight.omni_range] or [member SpotLight.spot_range].
 *
*/
static PARAM_RANGE: any;

/**
 * Constant for accessing [member OmniLight.omni_attenuation] or [member SpotLight.spot_attenuation].
 *
*/
static PARAM_ATTENUATION: any;

/**
 * Constant for accessing [member SpotLight.spot_angle].
 *
*/
static PARAM_SPOT_ANGLE: any;

/**
 * Constant for accessing [member SpotLight.spot_angle_attenuation].
 *
*/
static PARAM_SPOT_ATTENUATION: any;

/**
 * Constant for accessing [member shadow_contact].
 *
*/
static PARAM_CONTACT_SHADOW_SIZE: any;

/**
 * Constant for accessing [member DirectionalLight.directional_shadow_max_distance].
 *
*/
static PARAM_SHADOW_MAX_DISTANCE: any;

/**
 * Constant for accessing [member DirectionalLight.directional_shadow_split_1].
 *
*/
static PARAM_SHADOW_SPLIT_1_OFFSET: any;

/**
 * Constant for accessing [member DirectionalLight.directional_shadow_split_2].
 *
*/
static PARAM_SHADOW_SPLIT_2_OFFSET: any;

/**
 * Constant for accessing [member DirectionalLight.directional_shadow_split_3].
 *
*/
static PARAM_SHADOW_SPLIT_3_OFFSET: any;

/**
 * Constant for accessing [member DirectionalLight.directional_shadow_normal_bias].
 *
*/
static PARAM_SHADOW_NORMAL_BIAS: any;

/**
 * Constant for accessing [member shadow_bias].
 *
*/
static PARAM_SHADOW_BIAS: any;

/**
 * Constant for accessing [member DirectionalLight.directional_shadow_bias_split_scale].
 *
*/
static PARAM_SHADOW_BIAS_SPLIT_SCALE: any;

/**
 * Represents the size of the [enum Param] enum.
 *
*/
static PARAM_MAX: any;

/**
 * Light is ignored when baking.
 *
 * **Note:** Hiding a light does **not** affect baking.
 *
*/
static BAKE_DISABLED: any;

/**
 * Only indirect lighting will be baked (default).
 *
*/
static BAKE_INDIRECT: any;

/**
 * Both direct and indirect light will be baked.
 *
 * **Note:** You should hide the light if you don't want it to appear twice (dynamic and baked).
 *
*/
static BAKE_ALL: any;



}

