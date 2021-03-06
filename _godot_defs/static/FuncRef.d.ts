
/**
 * In GDScript, functions are not **first-class objects**. This means it is impossible to store them directly as variables, return them from another function, or pass them as arguments.
 *
 * However, by creating a [FuncRef] using the [method @GDScript.funcref] function, a reference to a function in a given object can be created, passed around and called.
 *
*/
declare class FuncRef extends Reference  {

  
/**
 * In GDScript, functions are not **first-class objects**. This means it is impossible to store them directly as variables, return them from another function, or pass them as arguments.
 *
 * However, by creating a [FuncRef] using the [method @GDScript.funcref] function, a reference to a function in a given object can be created, passed around and called.
 *
*/
  new(): FuncRef; 
  static "new"(): FuncRef 


/** The name of the referenced function. */
function: string;

/** Calls the referenced function previously set in [member function] or [method @GDScript.funcref]. */
call_func(...args: any[]): any;

/** Calls the referenced function previously set in [member function] or [method @GDScript.funcref]. Contrarily to [method call_func], this method does not support a variable number of arguments but expects all parameters to be passed via a single [Array]. */
call_funcv(arg_array: any[]): any;

/** Returns whether the object still exists and has the function assigned. */
is_valid(): boolean;

/** The object containing the referenced function. This object must be of a type actually inheriting from [Object], not a built-in type such as [int], [Vector2] or [Dictionary]. */
set_instance(instance: Object): void;

  connect<T extends SignalsOf<FuncRef>>(signal: T, method: SignalFunction<FuncRef[T]>): number;






}

