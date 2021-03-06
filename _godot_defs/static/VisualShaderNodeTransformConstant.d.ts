
/**
 * A constant [Transform], which can be used as an input node.
 *
*/
declare class VisualShaderNodeTransformConstant extends VisualShaderNode  {

  
/**
 * A constant [Transform], which can be used as an input node.
 *
*/
  new(): VisualShaderNodeTransformConstant; 
  static "new"(): VisualShaderNodeTransformConstant 


/** A [Transform] constant which represents the state of this node. */
constant: Transform;



  connect<T extends SignalsOf<VisualShaderNodeTransformConstant>>(signal: T, method: SignalFunction<VisualShaderNodeTransformConstant[T]>): number;






}

